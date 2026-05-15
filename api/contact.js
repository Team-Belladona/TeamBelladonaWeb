const nodemailer = require('nodemailer');

// 요청 횟수 추적 (Vercel 재시작 시 초기화됨 — 간이용)
const rateLimit = new Map();
const RATE_LIMIT_MAX = 3;        // 최대 요청 수
const RATE_LIMIT_WINDOW = 60000; // 1분 (ms)

const ALLOWED_ORIGIN = 'https://team-belladona-web.vercel.app'; // ← 본인 도메인으로 수정

module.exports = async function handler(req, res) {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  // Rate Limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();
  const record = rateLimit.get(ip) || { count: 0, start: now };

  if (now - record.start > RATE_LIMIT_WINDOW) {
    record.count = 0;
    record.start = now;
  }
  record.count++;
  rateLimit.set(ip, record);

  if (record.count > RATE_LIMIT_MAX) {
    return res.status(429).json({ error: '잠시 후 다시 시도해 주세요.' });
  }

  // 입력값 추출 및 타입 확인
  const { name, email, message } = req.body ?? {};

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: '올바른 요청 형식이 아닙니다.' });
  }

  // 공백 제거
  const safeName    = name.trim();
  const safeEmail   = email.trim();
  const safeMessage = message.trim();

  // 필수 필드 확인
  if (!safeName || !safeEmail || !safeMessage) {
    return res.status(400).json({ error: '모든 필드를 입력해 주세요.' });
  }

  // 길이 제한 (헤더 인젝션 방지)
  if (safeName.length > 100 || safeEmail.length > 200 || safeMessage.length > 5000) {
    return res.status(400).json({ error: '입력값이 너무 깁니다.' });
  }

  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(safeEmail)) {
    return res.status(400).json({ error: '올바른 이메일 형식이 아닙니다.' });
  }

  // 줄바꿈 문자 제거 (헤더 인젝션 방지)
  const cleanName  = safeName.replace(/[\r\n]/g, '');
  const cleanEmail = safeEmail.replace(/[\r\n]/g, '');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: cleanEmail,
      to: [process.env.GMAIL_USER, process.env.TEAM_EMAIL],
      subject: `[Team Belladona] ${cleanName}님의 메시지`,
      text: `이름: ${cleanName}\n이메일: ${cleanEmail}\n\n${safeMessage}`,
    });

    res.status(200).json({ success: true });
  } catch (e) {
    console.error('sendMail error:', e.message);
    res.status(500).json({ error: '메일 전송에 실패했습니다.' });
  }
};
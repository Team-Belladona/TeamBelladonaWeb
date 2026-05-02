const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log('GMAIL_PASS 존재:', !!process.env.GMAIL_PASS);

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
      to: [process.env.GMAIL_USER, process.env.TEAM_EMAIL],
      subject: `[Team Belladona] ${name}님의 메시지`,
      text: `이름: ${name}\n이메일: ${email}\n\n${message}`,
    });
    res.status(200).json({ success: true });
  } catch (e) {
    console.error('sendMail error:', e.message);
    res.status(500).json({ error: e.message });
  }
}
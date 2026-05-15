// 카드 3D 기울기
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -10;
    const rotateY = ((x - cx) / cx) * 10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});


// 히어로 글자 랜덤 플래시
const heroChars = document.querySelectorAll('.hero-char');
const highlightColor = '#AD69A8';
const baseColor = '#270A30';
const flashTimers = new Set(); // 타이머 추적

function randomFlash(char) {
  const t1 = setTimeout(() => {
    char.style.transition = 'color 0.8s ease';
    char.style.color = highlightColor;

    const t2 = setTimeout(() => {
      char.style.color = baseColor;
      randomFlash(char);
    }, 1500);

    flashTimers.add(t2);
  }, Math.random() * 3000 + 1000);

  flashTimers.add(t1);
}

heroChars.forEach(char => {
  char.style.color = baseColor;
  randomFlash(char);
});

// 페이지 떠날 때 타이머 정리
window.addEventListener('pagehide', () => {
  flashTimers.forEach(clearTimeout);
  flashTimers.clear();
});


// 폼 제출
const form = document.querySelector('.contact-form');
if (form) {
  const messages = {
    ko: {
      success: '메시지가 전송됐습니다 :)',
      fail: '전송에 실패했습니다. 다시 시도해주세요.',
      error: '오류가 발생했습니다. 다시 시도해주세요.',
      // 검증 메시지
      required: '모든 필드를 입력해주세요.',
      invalidEmail: '올바른 이메일 형식이 아닙니다.',
      tooLong: '메시지가 너무 깁니다. (2000자 이하)',
    },
    en: {
      success: 'Message sent successfully :)',
      fail: 'Failed to send. Please try again.',
      error: 'An error occurred. Please try again.',
      required: 'Please fill in all fields.',
      invalidEmail: 'Please enter a valid email address.',
      tooLong: 'Message is too long. (Max 2000 characters)',
    },
    ja: {
      success: 'メッセージが送信されました :)',
      fail: '送信に失敗しました。もう一度お試しください。',
      error: 'エラーが発生しました。もう一度お試しください。',
      required: 'すべての項目を入力してください。',
      invalidEmail: '正しいメールアドレスを入力してください。',
      tooLong: 'メッセージが長すぎます。（2000文字以内）',
    }
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const lang = location.pathname.startsWith('/en') ? 'en'
               : location.pathname.startsWith('/ja') ? 'ja'
               : 'ko';
    const msg = messages[lang];

    const data = Object.fromEntries(new FormData(form));
    const { name, email, message } = data;

    // 🆕 클라이언트 검증
    const statusEl = form.querySelector('#form-status') ?? (() => {
      const p = document.createElement('p');
      p.id = 'form-status';
      form.appendChild(p);
      return p;
    })();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      statusEl.style.color = 'red';
      statusEl.textContent = msg.required;
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      statusEl.style.color = 'red';
      statusEl.textContent = msg.invalidEmail;
      return;
    }

    if (message.trim().length > 5000) {
      statusEl.style.color = 'red';
      statusEl.textContent = msg.tooLong;
      return;
    }

    // 중복 제출 방지
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        form.innerHTML = `<p style="color: var(--accent);">${msg.success}</p>`;
      } else {
        statusEl.style.color = 'red';
        statusEl.textContent = msg.fail;
        if (submitBtn) submitBtn.disabled = false;
      }
    } catch {
      statusEl.style.color = 'red';
      statusEl.textContent = msg.error;
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
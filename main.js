
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


const heroChars = document.querySelectorAll('.hero-char');
const highlightColor = '#AD69A8';
const baseColor = '#270A30';

function randomFlash(char) {
  const delay = Math.random() * 3000 + 1000;
  setTimeout(() => {
    char.style.transition = 'color 0.8s ease';
    char.style.color = highlightColor;
    setTimeout(() => {
      char.style.color = baseColor;
      setTimeout(() => randomFlash(char), Math.random() * 3000 + 1000);
    }, 1500);
  }, delay);
}

heroChars.forEach(char => {
  char.style.color = baseColor;
  randomFlash(char);
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    const lang = location.pathname.startsWith('/en') ? 'en' 
               : location.pathname.startsWith('/ja') ? 'ja' 
               : 'ko';

    const messages = {
      ko: {
        success: '메시지가 전송됐습니다 :)',
        fail: '전송에 실패했습니다. 다시 시도해주세요.',
        error: '오류가 발생했습니다. 다시 시도해주세요.'
      },
      en: {
        success: 'Message sent successfully :)',
        fail: 'Failed to send. Please try again.',
        error: 'An error occurred. Please try again.'
      },
      ja: {
        success: 'メッセージが送信されました :)',
        fail: '送信に失敗しました。もう一度お試しください。',
        error: 'エラーが発生しました。もう一度お試しください。'
      }
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        form.innerHTML = `<p style="color: var(--accent);">${messages[lang].success}</p>`;
      } else {
        form.innerHTML = `<p style="color: red;">${messages[lang].fail}</p>`;
      }
    } catch (e) {
      form.innerHTML = `<p style="color: red;">${messages[lang].error}</p>`;
    }
  });
}
/* ═══════════════════════════════════════════════════════════
   КОНФИГ
   ═══════════════════════════════════════════════════════════ */
const CONFIG = {
  startDate: "2026-08-25",
  password: "25.08.2026"
};

/* ═══════════════════════════════════════════════════════════
   ТЕКСТ ПЕСНИ: Гуф — «Письмо домой»
   ═══════════════════════════════════════════════════════════ */
const LYRICS = [
  { time: 23,   text: "Есть отличный проверенный способ для передачи мыслей:" },
  { time: 26,   text: "Берёшь бумагу, ручку и пишешь письма." },
  { time: 30,   text: "Когда надо что-то сказать, но молчишь и злишься," },
  { time: 33,   text: "Хочешь, но боишься, садишься и пишешь письма." },
  { time: 37,   text: "Не стоит бежать на почту искать конверт," },
  { time: 40,   text: "Клеить марку, вспоминать индекс тоже не надо." },
  { time: 44,   text: "Достаточно написать всё откровенно," },
  { time: 47,   text: "Листик спрятать и вскоре ждите результата." },
  { time: 51,   text: "Вы увидите, очень быстро адресат получит импульсы" },
  { time: 55,   text: "Посыл под корку с заложенным смыслом." },
  { time: 58,   text: "Он, скорее всего, вас даже и не вычислит" },
  { time: 62,   text: "Но сразу же поймёт, что по-прежнему вы с ним." },
  { time: 65,   text: "Может это вымысел? Я пока не выяснил," },
  { time: 69,   text: "Но есть некая сила в бумаге и чернилах." },
  { time: 72,   text: "Я помню декабрь, когда весь дым осел" },
  { time: 76,   text: "Это всё, что у меня было, когда люто крыло." },
  { time: 80,   text: "Представьте, зима, уютный трёхэтажный домик" },
  { time: 84,   text: "С бассейном, бильярдом в ближайшем подмосковье." },
  { time: 88,   text: "На втором этаже горит лампа настольная," },
  { time: 91,   text: "Там в комнате соломенной пишу письмо домой." },
  { time: 95,   text: "Тут момент не простой. Ну и ладно." },
  { time: 98,   text: "Я люблю правду, а ещё люблю себя оправдывать." },
  { time: 102,  text: "И может я покажусь слегка неадекватным," },
  { time: 106,  text: "Но я показываю вам, как делать не надо." },
  { time: 110,  text: "Не ругайте себя за прошлое," },
  { time: 113,  text: "Совсем скоро рассеется дым." },
  { time: 117,  text: "Я так хотел быть хоть раз хорошим," },
  { time: 120,  text: "Но опять оказался плохим." },
  { time: 124,  text: "Я с моста монетку подброшу," },
  { time: 127,  text: "Она исчезнет в темноте Москвы-реки." },
  { time: 131,  text: "Я так хочу быть хорошим," },
  { time: 134,  text: "Но не получается, прикинь." },
  { time: 138,  text: "Здравствуйте, маленькие мои, самые любимые" },
  { time: 142,  text: "Ну вы же в курсе, что папа у вас полный дебил." },
  { time: 146,  text: "Я поступил невероятно некрасиво," },
  { time: 150,  text: "Когда слился и оставил вас на целый месяц одних." },
  { time: 154,  text: "После очередных выходных, я послушал свои мысли" },
  { time: 158,  text: "И захотелось убежать от них." },
  { time: 161,  text: "Посреди возни у меня вопрос возник:" },
  { time: 165,  text: "Притормози, кое-что надо прояснить." },
  { time: 168,  text: "Дорогая, на этот раз удивляться нечему," },
  { time: 172,  text: "Я вернусь сразу как только они меня подлечат." },
  { time: 176,  text: "И ещё; хотел пообещать, что всё будет круто," },
  { time: 180,  text: "Но не буду, сейчас время трудное." },
  { time: 184,  text: "Хорошо, что я пишу отсюда" },
  { time: 187,  text: "Всем нам на пользу пойдут эти 28 суток." },
  { time: 191,  text: "Я вас люблю больше всего на свете," },
  { time: 194,  text: "Но иногда попадаю в старые добрые сети." },
  { time: 198,  text: "Если надо, я готов объехать экватор на велике" },
  { time: 202,  text: "Ради своей микро семейки." },
  { time: 205,  text: "Вы не поверите или сделаете вид хотя бы" },
  { time: 209,  text: "Я ведь могу быть самым лучшим мужем и папой." },
  { time: 213,  text: "Уже пора бы в собственной жизни принять участие." },
  { time: 217,  text: "Девочка, если ты будешь плакать, то только от счастья." },
  { time: 221,  text: "Я вёл себя ужасно и полностью согласен," },
  { time: 225,  text: "Но я нуждаюсь в ещё одном последнем шансе." },
  { time: 229,  text: "Не ругайте себя за прошлое," },
  { time: 232,  text: "Совсем скоро рассеется дым." },
  { time: 236,  text: "Я так хотел быть хоть раз хорошим," },
  { time: 239,  text: "Но опять оказался плохим." },
  { time: 243,  text: "Я с моста монетку подброшу," },
  { time: 246,  text: "Она исчезнет в темноте Москвы-реки." },
  { time: 250,  text: "Я так хочу быть хорошим," },
  { time: 253,  text: "Но не получается, прикинь." },
  { time: 258,  text: "Улыбнись, бусь, погрустили и хватит, всё" },
  { time: 262,  text: "Я вернусь через три недели и всё наладится." },
  { time: 266,  text: "И если я уже решил пойти на это сам," },
  { time: 270,  text: "Значит я хочу меняться и ты почувствуешь разницу." },
  { time: 274,  text: "Всего два абзаца, вот и всё, пожалуй" },
  { time: 278,  text: "Хорошо, что это письмо я никуда не отправлю." },
  { time: 282,  text: "И вдруг я почувствовал себя гораздо лучше," },
  { time: 286,  text: "Жаль только, что Айза его не получит." },
  { time: 291,  text: "Не ругайте себя за прошлое," },
  { time: 294,  text: "Совсем скоро рассеется дым." },
  { time: 298,  text: "Я так хотел быть хоть раз хорошим," },
  { time: 301,  text: "Но опять оказался плохим." },
  { time: 305,  text: "Я с моста монетку подброшу," },
  { time: 308,  text: "Она исчезнет в темноте Москвы-реки." },
  { time: 312,  text: "Я так хочу быть хорошим," },
  { time: 315,  text: "Но не получается, прикинь." }
];

/* ═══════════════════════════════════════════════════════════
   ЭКРАН-ПАРОЛЬ
   ═══════════════════════════════════════════════════════════ */
const lockScreen = document.getElementById('lockScreen');
const dateInput = document.getElementById('dateInput');
const lockBtn = document.getElementById('lockBtn');
const lockError = document.getElementById('lockError');
const lockTransition = document.getElementById('lockTransition');
const transitionHearts = document.getElementById('transitionHearts');
const site = document.getElementById('site');

dateInput.addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '');
  if (v.length > 8) v = v.slice(0, 8);
  let formatted = '';
  if (v.length > 0) formatted = v.slice(0, 2);
  if (v.length > 2) formatted += '.' + v.slice(2, 4);
  if (v.length > 4) formatted += '.' + v.slice(4, 8);
  e.target.value = formatted;
});

dateInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') tryUnlock();
});

lockBtn.addEventListener('click', tryUnlock);

function tryUnlock() {
  const entered = dateInput.value.trim();
  if (entered === CONFIG.password) {
    lockError.classList.remove('show');
    startUnlockAnimation();
  } else {
    showError();
  }
}

function showError() {
  const errors = [
    "Кажется, ты ошиблась с датой ❤️",
    "Хм... попробуй ещё раз 💭",
    "Не совсем. Помнишь, когда всё началось? 🌸",
    "Почти! Но не то число ✨"
  ];
  lockError.textContent = errors[Math.floor(Math.random() * errors.length)];
  lockError.classList.add('show');

  dateInput.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(-8px)' },
    { transform: 'translateX(8px)' },
    { transform: 'translateX(-6px)' },
    { transform: 'translateX(6px)' },
    { transform: 'translateX(0)' }
  ], { duration: 400, easing: 'ease-in-out' });

  setTimeout(() => lockError.classList.remove('show'), 3000);
}

function startUnlockAnimation() {
  lockTransition.classList.add('active');

  for (let i = 0; i < 30; i++) {
    const h = document.createElement('div');
    h.className = 'transition-heart';
    h.textContent = ['❤', '🌸', '✨', '💕'][Math.floor(Math.random() * 4)];
    h.style.left = (Math.random() * 100) + '%';
    h.style.top = (Math.random() * 100) + '%';
    const angle = Math.random() * Math.PI * 2;
    const dist = 100 + Math.random() * 300;
    h.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    h.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    h.style.animationDelay = (Math.random() * 0.5) + 's';
    transitionHearts.appendChild(h);
  }

  setTimeout(() => {
    lockScreen.classList.add('hidden');
    site.classList.add('visible');
    document.body.style.overflow = 'auto';
    startCounter();
    startParticles();
  }, 1200);

  document.body.style.overflow = 'hidden';
}

/* ═══════════════════════════════════════════════════════════
   СЧЁТЧИК
   ═══════════════════════════════════════════════════════════ */
function startCounter() {
  const start = new Date(CONFIG.startDate + 'T00:00:00');

  function update() {
    const now = new Date();
    const diff = now - start;

    if (diff < 0) {
      document.getElementById('monthsNum').textContent = '0';
      document.getElementById('daysNum').textContent = '0';
      return;
    }

    let months = (now.getFullYear() - start.getFullYear()) * 12 +
                 (now.getMonth() - start.getMonth());

    let dayDiff;
    if (now.getDate() >= start.getDate()) {
      dayDiff = now.getDate() - start.getDate();
    } else {
      months -= 1;
      const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      dayDiff = now.getDate() + prevMonthDays - start.getDate();
    }

    if (months < 0) { months = 0; dayDiff = 0; }

    document.getElementById('monthsNum').textContent = months;
    document.getElementById('daysNum').textContent = dayDiff;
    document.getElementById('hoursNum').textContent = String(now.getHours()).padStart(2, '0');
    document.getElementById('minutesNum').textContent = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('secondsNum').textContent = String(now.getSeconds()).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ═══════════════════════════════════════════════════════════
   ЧАСТИЦЫ
   ═══════════════════════════════════════════════════════════ */
function startParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const symbols = ['❤', '🌸', '✿', '❀', '✦'];
  setInterval(() => {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = (Math.random() * 100) + '%';
    p.style.fontSize = (10 + Math.random() * 14) + 'px';
    p.style.animationDuration = (10 + Math.random() * 8) + 's';
    container.appendChild(p);
    setTimeout(() => p.remove(), 20000);
  }, 800);
}

/* ═══════════════════════════════════════════════════════════
   ПОЯВЛЕНИЕ БЛОКОВ ПРИ СКРОЛЛЕ
   ═══════════════════════════════════════════════════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('revealed');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.memory-block').forEach(el => observer.observe(el));

/* ═══════════════════════════════════════════════════════════
   АКТИВНАЯ ССЫЛКА В МЕНЮ
   ═══════════════════════════════════════════════════════════ */
const navLinks = document.querySelectorAll('.nav-link');
const sections = ['home', 'memories', 'music-section'];

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

/* ═══════════════════════════════════════════════════════════
   МОДАЛКА ФОТО
   ═══════════════════════════════════════════════════════════ */
const photoModal = document.getElementById('photoModal');
const modalPhoto = document.getElementById('modalPhoto');

function openPhoto(src) {
  modalPhoto.src = src;
  photoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePhoto(e) {
  if (e && e.target !== photoModal && !e.target.classList.contains('modal-close')) return;
  photoModal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════════════════
   МОДАЛКА ВИДЕО
   ═══════════════════════════════════════════════════════════ */
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

function openVideo() {
  videoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalVideo.currentTime = 0;
  modalVideo.play().catch(() => {});
}

function closeVideo(e) {
  if (e && e.target !== videoModal && !e.target.classList.contains('modal-close')) return;
  videoModal.classList.remove('open');
  modalVideo.pause();
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════════════════
   КОНВЕРТ С ПИСЬМОМ + ПЕЧАТАЮЩИЙСЯ ТЕКСТ
   ═══════════════════════════════════════════════════════════ */
const letterBtn = document.getElementById('letterBtn');
const envelopeOverlay = document.getElementById('envelopeOverlay');
const envelope = document.getElementById('envelope');
const letterContent = document.getElementById('letterContent');
const letterCursor = document.getElementById('letterCursor');

const letterParagraphs = [];
letterContent.querySelectorAll('p').forEach(p => {
  letterParagraphs.push({
    text: p.textContent.trim(),
    isGreeting: p.classList.contains('letter-greeting'),
    isSignature: p.classList.contains('letter-signature')
  });
  p.textContent = '';
});

let typingTimer = null;
let typingStarted = false;

letterBtn.addEventListener('click', () => {
  envelopeOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  envelope.classList.remove('opening');
  resetLetter();
});

envelope.addEventListener('click', () => {
  const wasOpening = envelope.classList.contains('opening');
  envelope.classList.toggle('opening');
  if (!wasOpening && !typingStarted) {
    setTimeout(startTyping, 1200);
  }
});

function closeEnvelope() {
  envelopeOverlay.classList.remove('open');
  envelope.classList.remove('opening');
  document.body.style.overflow = '';
  if (typingTimer) { clearTimeout(typingTimer); typingTimer = null; }
  typingStarted = false;
  resetLetter();
}

function resetLetter() {
  if (typingTimer) { clearTimeout(typingTimer); typingTimer = null; }
  typingStarted = false;
  letterContent.classList.remove('typing');
  letterContent.querySelectorAll('p').forEach(p => p.textContent = '');
  if (letterCursor) letterCursor.style.display = 'inline-block';
}

function startTyping() {
  if (typingStarted) return;
  typingStarted = true;

  letterContent.classList.add('typing');
  const paragraphs = letterContent.querySelectorAll('p');
  const speedMs = 22;
  const pauseBetween = 550;

  let pIndex = 0;
  let charIndex = 0;

  function typeChar() {
    if (pIndex >= paragraphs.length) {
      if (letterCursor) letterCursor.style.display = 'none';
      letterContent.classList.remove('typing');
      return;
    }

    const currentP = paragraphs[pIndex];
    const source = letterParagraphs[pIndex].text;

    if (charIndex < source.length) {
      currentP.textContent += source.charAt(charIndex);
      charIndex++;
      const jitter = Math.random() * 20 - 8;
      typingTimer = setTimeout(typeChar, Math.max(8, speedMs + jitter));
    } else {
      pIndex++;
      charIndex = 0;
      typingTimer = setTimeout(typeChar, pauseBetween);
    }
  }

  typeChar();
}

envelopeOverlay.addEventListener('click', (e) => {
  if (e.target === envelopeOverlay) closeEnvelope();
});

/* ═══════════════════════════════════════════════════════════
   ФОНОВАЯ МУЗЫКА (кнопка в углу)
   ═══════════════════════════════════════════════════════════ */
const musicToggle = document.getElementById('musicToggle');
let bgAudio = null;

musicToggle.addEventListener('click', () => {
  if (!bgAudio) {
    bgAudio = new Audio('https://spaces.im/music/view/115555093/');
    bgAudio.loop = true;
    bgAudio.volume = 0.4;
  }
  if (bgAudio.paused) {
    bgAudio.play().then(() => {
      musicToggle.classList.add('playing');
      musicToggle.textContent = '⏸';
    }).catch(() => {});
  } else {
    bgAudio.pause();
    musicToggle.classList.remove('playing');
    musicToggle.textContent = '🎵';
  }
});

/* ═══════════════════════════════════════════════════════════
   МУЗЫКАЛЬНЫЙ ПЛЕЕР
   ═══════════════════════════════════════════════════════════ */
const audioPlayer = document.getElementById('audioPlayer');
const playerPlay = document.getElementById('playerPlay');
const playerProgress = document.getElementById('playerProgress');
const playerProgressFill = document.getElementById('playerProgressFill');
const playerCurrent = document.getElementById('playerCurrent');
const playerDuration = document.getElementById('playerDuration');
const playerLyrics = document.getElementById('playerLyrics');
const playerCover = document.getElementById('playerCover');

function renderLyrics() {
  playerLyrics.innerHTML = '';
  if (!LYRICS.length) {
    playerLyrics.innerHTML = '<div class="lyric-line active">♪</div>';
    return;
  }
  LYRICS.forEach((line, idx) => {
    const el = document.createElement('div');
    el.className = 'lyric-line';
    el.dataset.time = line.time;
    el.dataset.index = idx;
    el.textContent = line.text;
    playerLyrics.appendChild(el);
  });
}

renderLyrics();

function fmtTime(sec) {
  if (!isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ':' + String(s).padStart(2, '0');
}

playerPlay.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play().then(() => {
      playerPlay.classList.add('playing');
      playerPlay.textContent = '⏸';
      playerCover.classList.add('playing');
    }).catch(() => {});
  } else {
    audioPlayer.pause();
    playerPlay.classList.remove('playing');
    playerPlay.textContent = '▶';
    playerCover.classList.remove('playing');
  }
});

audioPlayer.addEventListener('loadedmetadata', () => {
  playerDuration.textContent = fmtTime(audioPlayer.duration);
});

audioPlayer.addEventListener('timeupdate', () => {
  const cur = audioPlayer.currentTime;
  const dur = audioPlayer.duration || 0;
  playerCurrent.textContent = fmtTime(cur);
  if (dur > 0) playerProgressFill.style.width = (cur / dur * 100) + '%';
  updateLyrics(cur);
});

function updateLyrics(currentTime) {
  const lines = document.querySelectorAll('.lyric-line');
  if (!lines.length) return;

  let activeIdx = -1;
  for (let i = 0; i < LYRICS.length; i++) {
    if (currentTime >= LYRICS[i].time) activeIdx = i;
    else break;
  }

  lines.forEach((line, idx) => {
    line.classList.remove('active', 'passed');
    if (idx === activeIdx) line.classList.add('active');
    else if (idx < activeIdx) line.classList.add('passed');
  });

  if (activeIdx >= 0 && lines[activeIdx]) {
    const active = lines[activeIdx];
    const container = playerLyrics;
    const offset = active.offsetTop - container.offsetTop - container.clientHeight / 2 + active.clientHeight / 2;
    container.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

playerProgress.addEventListener('click', (e) => {
  const rect = playerProgress.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  if (audioPlayer.duration) audioPlayer.currentTime = percent * audioPlayer.duration;
});

playerLyrics.addEventListener('click', (e) => {
  const line = e.target.closest('.lyric-line');
  if (!line) return;
  const time = parseFloat(line.dataset.time);
  if (isFinite(time)) {
    audioPlayer.currentTime = time;
    if (audioPlayer.paused) audioPlayer.play().catch(() => {});
  }
});

audioPlayer.addEventListener('ended', () => {
  playerPlay.classList.remove('playing');
  playerPlay.textContent = '▶';
  playerCover.classList.remove('playing');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePhoto();
    closeVideo();
    if (envelopeOverlay.classList.contains('open')) closeEnvelope();
  }
});
/* ═══════════════════════════════════════════════════════════
   ПОДАРОК-СЮРПРИЗ
   ═══════════════════════════════════════════════════════════ */
const giftBtn = document.getElementById('giftBtn');
const giftOverlay = document.getElementById('giftOverlay');
const giftClose = document.getElementById('giftClose');

// Стадии
const stage1 = document.getElementById('stage1');
const stage2 = document.getElementById('stage2');
const stage3 = document.getElementById('stage3');
const stage4 = document.getElementById('stage4');

// Уровень 1
const heartTarget = document.getElementById('heartTarget');
const giftHeart = document.getElementById('giftHeart');
const fill1 = document.getElementById('fill1');

// Уровень 2
const fireTarget = document.getElementById('fireTarget');
const giftFire = document.getElementById('giftFire');
const burnCircle = document.getElementById('burnCircle');
const fill2 = document.getElementById('fill2');

// Финал
const giftYes = document.getElementById('giftYes');
const giftNo = document.getElementById('giftNo');
const giftNoMessage = document.getElementById('giftNoMessage');
const giftShare = document.getElementById('giftShare');
const signCanvas = document.getElementById('signCanvas');
const signHint = document.getElementById('signHint');
const docDone = document.getElementById('docDone');

let pressTimer = null;
let progress = 0;
let holding = false;

function resetGift() {
  progress = 0;
  holding = false;
  if (pressTimer) { clearInterval(pressTimer); pressTimer = null; }

  fill1.style.width = '0%';
  fill2.style.width = '0%';

  giftHeart.style.transform = 'scale(1)';
  giftFire.style.transform = 'scale(1)';

  burnCircle.classList.remove('burning', 'burned');

  stage1.style.display = 'block';
  stage2.style.display = 'none';
  stage3.style.display = 'none';
  stage4.style.display = 'none';

  giftNoMessage.classList.remove('show');
  docDone.style.display = 'none';
  signHint.style.display = 'block';

  clearSignature();
}

giftBtn.addEventListener('click', () => {
  giftOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  resetGift();
});

giftClose.addEventListener('click', () => {
  giftOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (pressTimer) { clearInterval(pressTimer); pressTimer = null; }
});

/* ─── Уровень 1: сердечко ─── */
function startHeartGrow(e) {
  e.preventDefault();
  if (holding) return;
  holding = true;
  progress = 0;

  pressTimer = setInterval(() => {
    progress += 3;
    if (progress > 100) progress = 100;

    const scale = 1 + (progress / 100) * 2.2;
    giftHeart.style.transform = 'scale(' + scale + ')';
    fill1.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(pressTimer);
      pressTimer = null;
      holding = false;
      setTimeout(goToFire, 400);
    }
  }, 40);
}

function stopHeartGrow() {
  if (pressTimer) { clearInterval(pressTimer); pressTimer = null; }
  holding = false;
  if (progress < 100) {
    progress = 0;
    giftHeart.style.transform = 'scale(1)';
    fill1.style.width = '0%';
  }
}

heartTarget.addEventListener('pointerdown', startHeartGrow);
heartTarget.addEventListener('pointerup', stopHeartGrow);
heartTarget.addEventListener('pointerleave', stopHeartGrow);
heartTarget.addEventListener('pointercancel', stopHeartGrow);

/* ─── Уровень 2: огонь ─── */
function goToFire() {
  stage1.style.display = 'none';
  stage2.style.display = 'block';
  progress = 0;
}

function startFireGrow(e) {
  e.preventDefault();
  if (holding) return;
  holding = true;
  progress = 0;

  pressTimer = setInterval(() => {
    progress += 3;
    if (progress > 100) progress = 100;

    const scale = 1 + (progress / 100) * 1.8;
    giftFire.style.transform = 'scale(' + scale + ')';
    fill2.style.width = progress + '%';

    if (progress > 40) burnCircle.classList.add('burning');
    if (progress >= 100) {
      burnCircle.classList.remove('burning');
      burnCircle.classList.add('burned');
      clearInterval(pressTimer);
      pressTimer = null;
      holding = false;
      setTimeout(goToRing, 500);
    }
  }, 40);
}

function stopFireGrow() {
  if (pressTimer) { clearInterval(pressTimer); pressTimer = null; }
  holding = false;
  if (progress < 100) {
    progress = 0;
    giftFire.style.transform = 'scale(1)';
    fill2.style.width = '0%';
    burnCircle.classList.remove('burning');
  }
}

fireTarget.addEventListener('pointerdown', startFireGrow);
fireTarget.addEventListener('pointerup', stopFireGrow);
fireTarget.addEventListener('pointerleave', stopFireGrow);
fireTarget.addEventListener('pointercancel', stopFireGrow);

/* ─── Уровень 3: кольцо ─── */
function goToRing() {
  stage2.style.display = 'none';
  stage3.style.display = 'block';
}

const noMessages = [
  "Точно? 😢",
  "Может, ещё подумаешь? ❤",
  "Я подожду...",
  "Обещаю сделать тебя самой счастливой 🥺"
];
let noIndex = 0;

giftNo.addEventListener('click', () => {
  giftNoMessage.textContent = noMessages[noIndex % noMessages.length];
  noIndex++;
  giftNoMessage.classList.add('show');
});

giftYes.addEventListener('click', () => {
  stage3.style.display = 'none';
  stage4.style.display = 'block';
  setTimeout(initSignature, 200);
});

/* ─── Подпись на канвасе ─── */
let ctx, drawing = false, hasSignature = false;

function initSignature() {
  ctx = signCanvas.getContext('2d');

  // Подгоняем размер канваса под контейнер
  const rect = signCanvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  signCanvas.width = rect.width * dpr;
  signCanvas.height = rect.height * dpr;
  signCanvas.style.width = rect.width + 'px';
  signCanvas.style.height = rect.height + 'px';
  ctx.scale(dpr, dpr);

  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#4a2830';

  signCanvas.addEventListener('pointerdown', startDraw);
  signCanvas.addEventListener('pointermove', draw);
  signCanvas.addEventListener('pointerup', endDraw);
  signCanvas.addEventListener('pointerleave', endDraw);
  signCanvas.addEventListener('pointercancel', endDraw);

  // ═══ ЗАПУСКАЕМ АНИМАЦИЮ ПОДПИСИ ИЛЬИ ═══
  setTimeout(playIlyaSignature, 800);
}

/* ─── Анимация: подпись Ильи "пишется" сама ─── */
function playIlyaSignature() {
  const ilyaSign = document.getElementById('ilyaSign');
  if (!ilyaSign || ilyaSign.style.display === 'none') return;

  // Создаём кончик пера, который будет двигаться по подписи
  const wrap = ilyaSign.parentElement;
  const pen = document.createElement('div');
  pen.className = 'sign-anim-pen';
  wrap.appendChild(pen);

  // Показываем кончик
  pen.classList.add('active');

  // Анимируем движение пера слева направо с лёгкой змейкой
  const rect = ilyaSign.getBoundingClientRect();
  const wrapRect = wrap.getBoundingClientRect();
  const startX = 0;
  const endX = rect.width;
  const baseY = rect.height * 0.55;

  let t = 0;
  const duration = 1800; // мс — сколько "пишется" подпись
  const startTime = performance.now();

  function animatePen(now) {
    const elapsed = now - startTime;
    t = Math.min(elapsed / duration, 1);

    // Плавно слева направо + лёгкая змейка по вертикали
    const x = startX + (endX - startX) * t;
    const y = baseY + Math.sin(t * Math.PI * 3) * 6;

    pen.style.left = (rect.left - wrapRect.left + x) + 'px';
    pen.style.top = (rect.top - wrapRect.top + y - 5) + 'px';

    if (t < 1) {
      requestAnimationFrame(animatePen);
    } else {
      // Закончили — убираем перо
      pen.classList.remove('active');
      setTimeout(() => pen.remove(), 400);
    }
  }

  requestAnimationFrame(animatePen);

  // Запускаем "проявление" подписи через 0.2 сек, чтобы перо уже было видно
  setTimeout(() => {
    ilyaSign.classList.add('signing');
  }, 200);
}

function clearSignature() {
  if (!ctx) return;
  const rect = signCanvas.getBoundingClientRect();
  ctx.clearRect(0, 0, rect.width, rect.height);
  hasSignature = false;
  if (docDone) docDone.style.display = 'none';
  if (signHint) signHint.style.display = 'block';
}

function startDraw(e) {
  e.preventDefault();
  drawing = true;
  const rect = signCanvas.getBoundingClientRect();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
  if (!drawing) return;
  e.preventDefault();
  const rect = signCanvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();

  if (!hasSignature) {
    hasSignature = true;
    setTimeout(() => {
      signHint.style.display = 'none';
      docDone.style.display = 'block';
    }, 600);
  }
}

function endDraw(e) {
  if (!drawing) return;
  drawing = false;
}

/* ─── Кнопка "Сделать скриншот" ─── */
giftShare.addEventListener('click', async () => {
  const text = "Я сказала «Да» ❤ Готово. Отправь этот скриншот Илье — он знает, кому это нужно.";

  // Пробуем нативное "поделиться" на телефоне
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Свидетельство о помолвке',
        text: text
      });
      return;
    } catch (err) {
      // Пользователь отменил или не поддерживается — идём дальше
    }
  }

  // Иначе — копируем текст в буфер
  try {
    await navigator.clipboard.writeText(text);
    const tip = document.createElement('div');
    tip.style.cssText = `
      position:fixed; bottom:100px; left:50%; transform:translateX(-50%);
      background:#ff4d7a; color:white; padding:12px 22px;
      border-radius:14px; font-family:Inter,sans-serif; font-size:13px;
      box-shadow:0 10px 30px rgba(255,77,122,.6); z-index:9999;
    `;
    tip.textContent = '📸 Сделай скриншот и отправь Илье ❤';
    document.body.appendChild(tip);
    setTimeout(() => tip.remove(), 3500);
  } catch (e) {
    alert('Сделай скриншот экрана и отправь Илье ❤');
  }
});

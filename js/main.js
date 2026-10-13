/* === CURSOR === */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  document.body.style.setProperty('--gx', mx + 'px');
  document.body.style.setProperty('--gy', my + 'px');
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

/* === NAV SCROLL === */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* === TYPED TEXT === */
(function() {
  const words = window.typedWords || [];
  const el    = document.getElementById('typedEl');
  if (!el || !words.length) return;

  let wi = 0, ci = 0, deleting = false;
  function type() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 110);
  }
  type();
})();

/* === MARQUEE === */
(function() {
  const items = window.marqueeItems || [];
  const track = document.getElementById('marqueeTrack');
  if (!track || !items.length) return;
  const html = items.map(i =>
    `<div class="marquee-item"><div class="marquee-dot"></div>${i}</div>`
  ).join('');
  track.innerHTML = html + html;
})();

/* === SCROLL REVEAL === */
const reveals = document.querySelectorAll('.reveal');
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealIO.unobserve(e.target); }
  });
}, { threshold: 0.15 });
reveals.forEach(r => revealIO.observe(r));

/* === SKILL BARS === */
const barIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barIO.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-card').forEach(c => barIO.observe(c));

/* === HERO GRID PARALLAX === */
const heroGrid = document.querySelector('.hero-grid');
if (heroGrid) {
  window.addEventListener('scroll', () => {
    heroGrid.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }, { passive: true });
}

/* === HERO GLOW CURSOR TRACKING === */
(function() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  hero.classList.add('hero-idle');
  let idleTimer;
  document.addEventListener('mousemove', e => {
    const px = (e.clientX / window.innerWidth  * 100).toFixed(2) + '%';
    const py = (e.clientY / window.innerHeight * 100).toFixed(2) + '%';
    hero.style.setProperty('--mx', px);
    hero.style.setProperty('--my', py);
    hero.classList.remove('hero-idle');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => hero.classList.add('hero-idle'), 3000);
  });
})();

/* === MAGNETIC BUTTONS === */
(function() {
  const btns = document.querySelectorAll('.btn-primary, .btn-ghost');
  document.addEventListener('mousemove', e => {
    btns.forEach(btn => {
      const r  = btn.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        const x = Math.min(Math.max(dx * 0.1, -8), 8);
        const y = Math.min(Math.max(dy * 0.1, -8), 8);
        btn.style.transition = 'box-shadow 0.2s';
        btn.style.transform  = `translate(${x}px,${y}px)`;
      } else {
        btn.style.transition = 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.2s';
        btn.style.transform  = 'translate(0px,0px)';
      }
    });
  }, { passive: true });
})();

/* === PROJECT MODAL === */
(function() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const modalImg         = modal.querySelector('.modal-img');
  const modalImgHolder   = modal.querySelector('.modal-img-placeholder');
  const modalTitle       = modal.querySelector('.modal-title');
  const modalDesc        = modal.querySelector('.modal-desc');
  const modalTagsEl      = modal.querySelector('.modal-tags');
  const modalLink        = modal.querySelector('.modal-link');
  const modalBackdrop    = modal.querySelector('.modal-backdrop');
  const modalPanel       = modal.querySelector('.modal-panel');
  const modalClose       = modal.querySelector('.modal-close');

  function openModal(card) {
    const title = card.dataset.title || '';
    const desc  = card.dataset.desc  || '';
    const image = card.dataset.image || '';
    const url   = card.dataset.url   || '#';
    const tags  = (card.dataset.tags || '').split(',').filter(Boolean);

    modalTitle.textContent = title;
    modalDesc.textContent  = desc;

    if (image) {
      modalImg.src = image;
      modalImg.alt = title;
      modalImg.style.display    = 'block';
      modalImgHolder.style.display = 'none';
    } else {
      const num = card.querySelector('.project-placeholder');
      modalImgHolder.textContent = num ? num.textContent : '?';
      modalImg.style.display       = 'none';
      modalImgHolder.style.display = 'flex';
    }

    modalTagsEl.innerHTML = '';
    tags.forEach(t => {
      const span = document.createElement('span');
      span.className   = 'tag';
      span.textContent = t.trim();
      modalTagsEl.appendChild(span);
    });

    if (url && url !== '#') {
      modalLink.href         = url;
      modalLink.style.display = 'inline-flex';
    } else {
      modalLink.style.display = 'none';
    }

    modal.classList.add('open');
    document.body.classList.remove('cursor-view');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click',      () => openModal(card));
    card.addEventListener('mouseenter', () => document.body.classList.add('cursor-view'));
    card.addEventListener('mouseleave', () => document.body.classList.remove('cursor-view'));
  });

  modalBackdrop.addEventListener('click', closeModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  modalPanel.addEventListener('click', e => e.stopPropagation());
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();

/* === TIMELINE DRAW === */
(function() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;
  const tlIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); tlIO.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  tlIO.observe(timeline);
})();

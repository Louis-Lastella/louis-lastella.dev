/* === NAV BORDER ON SCROLL === */
const nav = document.getElementById('navbar');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* === TYPED WORD (starts from the server-rendered first word) === */
(function () {
  const el = document.getElementById('typedEl');
  const words = window.typedWords || [];
  if (!el || words.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let wi = 0, ci = words[0].length, deleting = true;
  function step() {
    const word = words[wi];
    el.textContent = word.slice(0, deleting ? --ci : ++ci);
    if (!deleting && ci === word.length) { deleting = true; return setTimeout(step, 2200); }
    if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; return setTimeout(step, 300); }
    setTimeout(step, deleting ? 55 : 105);
  }
  setTimeout(step, 2600);
})();

/* === TIMELINE LINE DRAW === */
const timeline = document.querySelector('.timeline');
if (timeline) {
  new IntersectionObserver(([entry], io) => {
    if (entry.isIntersecting) { timeline.classList.add('visible'); io.disconnect(); }
  }, { threshold: 0.15 }).observe(timeline);
}

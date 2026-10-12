// Small amount of JS: mobile menu, active nav link, image zoom, fade-in.

const topbar = document.querySelector('.topbar');
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? 'close' : 'menu';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = 'menu';
}));

addEventListener('scroll', () => topbar.classList.toggle('scrolled', scrollY > 8), { passive: true });

// highlight the section you're in
const links = [...nav.querySelectorAll('a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

// click a photo to see it bigger
const box = document.createElement('div');
box.className = 'lightbox';
box.innerHTML = '<img alt=""><p></p>';
document.body.appendChild(box);
document.querySelectorAll('img.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    box.querySelector('img').src = img.currentSrc || img.src;
    box.querySelector('img').alt = img.alt;
    const cap = img.closest('figure')?.querySelector('figcaption');
    box.querySelector('p').textContent = cap ? cap.textContent : '';
    box.classList.add('open');
  });
});
box.addEventListener('click', () => box.classList.remove('open'));
addEventListener('keydown', e => { if (e.key === 'Escape') box.classList.remove('open'); });

// gentle fade-in
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

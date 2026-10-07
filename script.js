// 年份
document.getElementById('year').textContent = new Date().getFullYear();

// 滚动进度条 + 导航栏阴影
const progress = document.getElementById('progress');
const nav = document.getElementById('nav');
function onScroll() {
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
  progress.style.width = (scrolled * 100) + '%';
  nav.classList.toggle('scrolled', h.scrollTop > 8);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 滚动渐入动画
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// 主题切换（记忆用户选择，默认跟随系统）
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved) {
  root.setAttribute('data-theme', saved);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
}
toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

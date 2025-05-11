// Animasi scroll
const fadeEls = document.querySelectorAll('.fade-in');
function isInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}
function checkScroll() {
  fadeEls.forEach(el => {
    if (isInView(el)) el.classList.add('visible');
  });
}
document.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', () => {
  checkScroll();
  typeWriter();
});

// Toggle Dark Mode
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Animasi ketik otomatis
function typeWriter() {
  const el = document.querySelector('.typewriter');
  const fullText = el.getAttribute('data-text');
  let i = 0;
  const speed = 100;
  function typing() {
    if (i < fullText.length) {
      el.textContent += fullText.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

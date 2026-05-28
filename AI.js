document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href') || '';
    if (href.toLowerCase().includes('ai.html')) {
  link.classList.add('active');
    }
  });
});
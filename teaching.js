document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href') || '';
    if (href.toLowerCase().includes('teaching')) {
      link.classList.add('active');
    }
  });
});
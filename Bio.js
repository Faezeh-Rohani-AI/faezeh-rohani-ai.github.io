document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').toLowerCase().includes('bio')) {
      link.classList.add('active');
    }
  });
});

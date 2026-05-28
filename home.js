function toggleOldNews() {
  const panel  = document.getElementById('old-news');
  const btn    = document.getElementById('toggleBtn');

  panel.classList.toggle('visible');
  btn.classList.toggle('open');
}


function setActiveNavLink() {
  const links = document.querySelectorAll('.nav-links a');
  const hash  = window.location.hash || 'home.html';

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === hash) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();

  /* Update active link whenever the hash changes */
  window.addEventListener('hashchange', setActiveNavLink);

  /* Attach toggle handler programmatically (belt-and-suspenders) */
  const toggleBtn = document.getElementById('toggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleOldNews);
  }
});

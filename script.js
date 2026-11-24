const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const dialog = document.querySelector('#project-dialog');
const dialogTitle = document.querySelector('#dialog-title');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  dialogTitle.textContent = button.dataset.project;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

document.querySelector('#whatsapp-button').addEventListener('click', () => {
  document.querySelector('#contact-note').textContent = 'Envíame el número de WhatsApp y dejaré el botón conectado directamente.';
});
document.querySelector('#year').textContent = new Date().getFullYear();

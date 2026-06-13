// Dark Mode Toggle
const toggle = document.getElementById('darkToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Initial setzen
if (localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && prefersDark.matches)) {
  document.body.classList.add('dark');
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

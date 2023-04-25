const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  document.body.classList.add(storedTheme);
} else {
  document.body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
  }
});

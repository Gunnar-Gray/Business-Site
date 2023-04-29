// main.js

// Select the theme toggle button from the DOM
const themeToggle = document.getElementById('theme-toggle');

// Add an event listener for the click event on the theme toggle button
themeToggle.addEventListener('click', () => {
  // Toggle the 'dark-theme' class on the body element when the button is clicked
  document.body.classList.toggle('dark-theme');
});

// Retrieve the stored theme from local storage
const storedTheme = localStorage.getItem('theme');

// If there is a stored theme, apply it to the body element, otherwise set the light theme
if (storedTheme) {
  document.body.classList.add(storedTheme);
} else {
  document.body.classList.add('light-theme');
}

// Add another event listener for the click event on the theme toggle button
themeToggle.addEventListener('click', () => {
  // If the body element has the 'dark-theme' class, store the dark theme in local storage
  // Otherwise, store the light theme in local storage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
  }
});

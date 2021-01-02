const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function setDarkLightMode(mode) {
  nav.style.backgroundColor =
    mode === 'light' ? 'rbg(255 255 255 / 50%)' : 'rbg(0 0 0 / 50%)';
  textBox.style.backgroundColor =
    mode === 'light' ? 'rgb( 0 0 0 / 50%' : 'rgb( 255 255 255 / 50%)';
  toggleIcon.children[0].textContent =
    mode === 'light' ? 'Light Mode' : 'Dark Mode';
  mode === 'light'
    ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  mode === 'light' ? imageMode('light') : imageMode('dark');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    // Sets "data-theme as a property on the HTML root element <HTML>"
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    setDarkLightMode('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    setDarkLightMode('light');
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}

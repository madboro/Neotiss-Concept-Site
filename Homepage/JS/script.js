// ===== SEARCH BAR =====
const searchToggle = document.querySelector('#searchToggle');
const searchIcon = document.querySelector('#searchIcon');
const searchBar = document.querySelector('#searchBar');
const searchInput = document.querySelector('#searchInput');
const navLinks = document.querySelector('.nav-links');
let searchOpen = false;

searchToggle.addEventListener('click', () => {
  searchOpen = !searchOpen;

  if (searchOpen) {
    searchIcon.innerHTML = `
      <line x1="4" y1="4" x2="20" y2="20" stroke-width="2"></line>
      <line x1="4" y1="20" x2="20" y2="4" stroke-width="2"></line>`;
    navLinks.classList.add('hidden');
    searchBar.classList.remove('hidden');
    searchInput.focus();
  } else {
    searchIcon.innerHTML = `
      <circle cx="11" cy="11" r="8" stroke-width="2"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2"></line>`;
    navLinks.classList.remove('hidden');
    searchBar.classList.add('hidden');
    searchInput.value = '';
    searchInput.classList.add('blinking');
    searchInput.style.color = '#858585';
  }
});

searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() !== '') {
    searchInput.classList.remove('blinking');
    searchInput.style.color = '#222';
  } else {
    searchInput.classList.add('blinking');
    searchInput.style.color = '#858585';
  }
});

// ===== BURGER MENU =====
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
const contactBtn = document.getElementById('Btn');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  overlay.classList.toggle('open');

  if(overlay.classList.contains('open')) {
    contactBtn.style.display = 'none';
  } else {
    contactBtn.style.display = 'block';
  }
});

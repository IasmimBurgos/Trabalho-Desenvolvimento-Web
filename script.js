const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
    }
});

let userName = localStorage.getItem('userName') || prompt('Qual é o seu nome?');
if (!localStorage.getItem('userName')) {
    localStorage.setItem('userName', userName);
}

const welcomeBanner = document.getElementById('welcome-banner');
const userNameSpan = document.getElementById('user-name');
const closeBanner = document.getElementById('close-banner');

userNameSpan.textContent = userName;
closeBanner.addEventListener('click', () => {
    welcomeBanner.style.display = 'none';
});

window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    if (window.scrollY > 250) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  });
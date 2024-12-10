const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
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

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + window.innerHeight * 0.8; 
    sections.forEach(section => {
        if (scrollY > section.offsetTop) {
            section.classList.add('visible');
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// Dark and light mode

function setDarkMode() {
    document.body.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute('src-dark');
    });
}

function setLightMode() {
    document.body.removeAttribute('theme');
    localStorage.setItem('theme', 'light');
    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute('src-light');
    });
}

function setTheme() {
    let currentTheme = document.body.getAttribute("theme");

    if(currentTheme === 'dark'){
        setLightMode();
    } else {
        setDarkMode();
    }
}

const btn = document.getElementById('modeToggle');
const btn2 = document.getElementById('modeToggle2');
const themeIcons = document.querySelectorAll('.icon');
const currentTheme = localStorage.getItem('theme');

if(currentTheme === 'dark'){
    setDarkMode();
}

btn.addEventListener('click', function (){
    setTheme();
});

btn2.addEventListener('click', function (){
    setTheme();
});
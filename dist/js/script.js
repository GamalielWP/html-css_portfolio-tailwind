// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    // menghitung jarak header dengan batas atas window
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.replace('hidden', 'flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.replace('flex', 'hidden');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.replace('light', 'dark');
        localStorage.theme = 'dark';
    }
    else {  
        html.classList.replace('dark', 'light');
        localStorage.theme = 'light';
    }
});

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// Mail to Gmail
const message = document.querySelector('#message');
const sendBtn = document.querySelector('#send-btn');
let body = '';

message.addEventListener('keyup', function () {
    body = message.value;
});

sendBtn.addEventListener('click', function () {
    sendBtn.href = 'https://mail.google.com/mail?fs=1&to=gamalielwp@gmail.com&tf=cm&body=' + body;
    message.value = '';
});
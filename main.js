//Selectors
let header = document.querySelector('.header');
let toggleMenu = document.querySelector('.toggle-menu');

window.addEventListener('scroll', function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition);
});

toggleMenu.addEventListener('click', function() {
    header.classList.toggle('menu-open');
});
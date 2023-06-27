const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.menu img');
const dropdownMenu = document.querySelector('.dropdown-menu');

menu.onclick = function () {
    dropdownMenu.classList.toggle('open')
}

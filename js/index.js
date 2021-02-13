const burger = document.querySelector(".burger");
const links = document.querySelector(".lists");

burger.addEventListener('click', () => {
    links.classList.toggle('open');
});
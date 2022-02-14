const hamburger = document.querySelector('.hamburger-menu');

const open__hamburger = document.querySelector('.header-right > a');

const close__hamburger = document.querySelector('.hamburger-menu .close');

open__hamburger.addEventListener("click", function() {
    hamburger.classList.add("active")
})

close__hamburger.addEventListener("click", function () {
    hamburger.classList.remove("active")
})
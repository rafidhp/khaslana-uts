const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".navbar-toggle");
const navLink = document.querySelectorAll(".navbar-right a");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

toggle.addEventListener("click", () => {
    navbar.classList.toggle("menu-open");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("menu-open");
    });
});
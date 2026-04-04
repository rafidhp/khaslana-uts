const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".navbar-toggle");
const navLink = document.querySelectorAll(".navbar-right a");
const trackingBtns = document.querySelectorAll('.tracking-btn');

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

trackingBtns.forEach(btn => {
    const img = btn.querySelector('img');
    const normalSrc = "./../../assets/arrow-kanan-atas.png";
    const hoverSrc = "./../../assets/arrow-kanan-atas-hover.png";

    btn.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });
    btn.addEventListener('mouseleave', () => {
        img.src = normalSrc;
    });
});
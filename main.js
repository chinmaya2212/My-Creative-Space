// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Sticky Navbar
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// Dropdown Menu in Mobile
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});



// Scroll Reveal Animation
window.addEventListener('scroll', () => {
    const homeContent = document.querySelector('.home-content');
    const homePosition = homeContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (homePosition < screenPosition) {
        homeContent.style.opacity = '1';
        homeContent.style.transform = 'translateY(0)';
    }
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show-back-to-top');
    } else {
        backToTopBtn.classList.remove('show-back-to-top');
    }
});

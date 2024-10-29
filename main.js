// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu'); // Ensure this is your toggle button
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu on button click
mobileMenu.addEventListener('click', (event) => {
    navLinks.classList.toggle('nav-active');
    event.stopPropagation(); // Prevent click event from bubbling up
});

// Hide mobile menu when clicking outside
document.addEventListener('click', (event) => {
    // Check if the click was outside the mobile menu and toggle button
    if (!mobileMenu.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('nav-active');
    }
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

// Toggle dropdown menu on click
dropdown.addEventListener('click', (event) => {
    dropdownContent.classList.toggle('show');
    event.stopPropagation(); // Prevent click event from bubbling up
});

// Hide dropdown menu when clicking outside
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
    }
});

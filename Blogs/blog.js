// blog.js

document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.blog-sidebar ul li a');
    const blogCards = document.querySelectorAll('.blog-card');

    // Show all blog cards by default
    blogCards.forEach(card => {
        card.style.display = 'block'; // Show all cards initially
    });

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            const selectedCategory = this.textContent; // Get the selected category text
            
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active')); 
            // Add active class to the clicked link
            this.classList.add('active'); 

            // Filter blog cards based on the selected category
            blogCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedCategory === 'All' || cardCategory === selectedCategory) {
                    card.style.display = 'block'; // Show the card
                } else {
                    card.style.display = 'none'; // Hide the card
                }
            });
        });
    });
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all category buttons and gallery items
    const categoryButtons = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Add click event listener to each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedCategory = this.getAttribute('data-category');

            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter gallery items
            filterGallery(selectedCategory);
        });
    });

    // Function to filter gallery items
    function filterGallery(category) {
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (category === 'all') {
                // Show all items with animation
                item.classList.remove('hidden');
                animateItem(item);
            } else if (itemCategory === category) {
                // Show items matching the category
                item.classList.remove('hidden');
                animateItem(item);
            } else {
                // Hide items not matching the category
                item.classList.add('hidden');
            }
        });
    }

    // Function to animate items on filter
    function animateItem(item) {
        item.classList.add('animating');
        setTimeout(() => {
            item.classList.remove('animating');
        }, 300);
    }

    // Optional: Add keyboard navigation (only when category nav is focused)
    categoryButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            const buttons = Array.from(categoryButtons);
            const currentIndex = buttons.indexOf(this);

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % buttons.length;
                buttons[nextIndex].focus();
                buttons[nextIndex].click();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                buttons[prevIndex].focus();
                buttons[prevIndex].click();
            }
        });
    });

    // Initial animation for all items
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in');
        }, index * 50);
    });
});

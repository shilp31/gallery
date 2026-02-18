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
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 10);
    }

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const activeButton = document.querySelector('.category-btn.active');
        const buttons = Array.from(categoryButtons);
        const currentIndex = buttons.indexOf(activeButton);

        if (e.key === 'ArrowRight') {
            const nextIndex = (currentIndex + 1) % buttons.length;
            buttons[nextIndex].click();
        } else if (e.key === 'ArrowLeft') {
            const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            buttons[prevIndex].click();
        }
    });

    // Initial animation for all items
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            animateItem(item);
        }, index * 50);
    });
});

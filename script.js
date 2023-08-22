// script.js
function setupSlideshow(container) {
    const slideshowImages = container.querySelectorAll('.slideshow-image');
    const prevButton = container.querySelector('.prev-button');
    const nextButton = container.querySelector('.next-button');

    let currentSlide = 0;

    function showSlide(slideIndex) {
        if (slideIndex < 0) {
            currentSlide = slideshowImages.length - 1;
        } else if (slideIndex >= slideshowImages.length) {
            currentSlide = 0;
        }

        slideshowImages.forEach(image => image.style.display = 'none');
        slideshowImages[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Add event listeners to the buttons
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Initial slide display
    showSlide(currentSlide);
}

// Find and set up all slideshow containers
document.querySelectorAll('.slideshow-container').forEach(container => {
    setupSlideshow(container);
});

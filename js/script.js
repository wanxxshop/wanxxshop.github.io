let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slideshow-container .slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start the slideshow
showSlides();

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slides img");
    let index = 0;

    function tampilkanSlide() {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
        index = (index + 1) % slides.length;
    }

    setInterval(tampilkanSlide, 3000);
    tampilkanSlide();
});

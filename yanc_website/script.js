document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 3000; 

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block'; 
                slide.classList.add('fade-in'); 
            } else {
                slide.style.display = 'none'; 
            }
        });
    }
    setTimeout(function() {
        document.getElementById('buttons').classList.remove('hidden');
    }, 8000);
    function startSlideshow() {
        showSlide(currentSlide);
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    }
    showSlide(currentSlide);
    setInterval(startSlideshow, slideInterval);
});

const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;
let autoplayInterval;

function showSlide(index) {
    const slidesLength = slides.children.length;
    if (index < 0) {
        slideIndex = slidesLength - 1;
    } else if (index >= slidesLength) {
        slideIndex = 0;
    }

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 3000); 
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

startAutoplay();

slides.addEventListener('mouseenter', stopAutoplay);
slides.addEventListener('mouseleave', startAutoplay);
nextBtn.addEventListener('click', () => {
    nextSlide();
    if (slideIndex === slides.children.length - 1) {
        slideIndex = -1; 
    }
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    if (slideIndex === 0) {
        slideIndex = slides.children.length; 
    }
});
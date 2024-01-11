const bookSlide = document.querySelector('.book-slider');
const totalSlides = document.querySelectorAll('.book-slide').length;
const visibleSlides = 9;
const slideWidth = 100 / visibleSlides;
let currentIndexes = 0;
let allowCarouselAdvance = true;

function updateBookSlide() {
  const translateValue = currentIndexes * (100 / visibleSlides);
  bookSlide.style.transform = `translateX(-${translateValue}%)`;

  const hideLeft = currentIndexes === 0;
  const hideRight = currentIndexes >= totalSlides - visibleSlides;
  document.querySelector('.book-prev').style.visibility = hideLeft ? 'hidden' : 'visible';
  document.querySelector('.book-next').style.visibility = hideRight ? 'hidden' : 'visible';
}

function nextSlides() {
  if (allowCarouselAdvance && currentIndexes < totalSlides - visibleSlides) {
    currentIndexes = Math.min(currentIndexes + 1, totalSlides - visibleSlides);
    updateBookSlide();
  } else {
    allowCarouselAdvance = false;
  }
}

function prevSlides() {
  currentIndexes = Math.max(currentIndexes - 1, 0);
  updateBookSlide();
}

function resetCarousel() {
  allowCarouselAdvance = true;
}
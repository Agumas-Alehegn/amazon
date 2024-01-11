const movieSlide = document.querySelector('.movie-slider');
const totalMovieSlides = document.querySelectorAll('.movie-slide').length;
const visibleMovieSlides = 9;
const movieSlideWidth = 100 / visibleMovieSlides;
let currentMovieIndexes = 0;
let carouselMovieAdvance = true;

function updateMovieSlide() {
  const translateValue = currentMovieIndexes * (100 / visibleMovieSlides);
  movieSlide.style.transform = `translateX(-${translateValue}%)`;

  const hideLeft = currentMovieIndexes === 0;
  const hideRight = currentMovieIndexes >= totalMovieSlides - visibleMovieSlides;
  document.querySelector('.movie-prev').style.visibility = hideLeft ? 'hidden' : 'visible';
  document.querySelector('.movie-next').style.visibility = hideRight ? 'hidden' : 'visible';
}

function movieNextSlides() {
  if (carouselMovieAdvance && currentMovieIndexes < totalMovieSlides - visibleMovieSlides) {
    currentMovieIndexes = Math.min(currentMovieIndexes + 1, totalMovieSlides - visibleMovieSlides);
    updateMovieSlide();
  } else {
    carouselMovieAdvance = false;
  }
}

function moviePrevSlides() {
  currentMovieIndexes = Math.max(currentMovieIndexes - 1, 0);
  updateMovieSlide();
}

function resetMovieCarousel() {
  carouselMovieAdvance = true;
}
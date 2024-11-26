let currentSlide = 0;

function scrollImages(direction) {
  const container = document.querySelector('.image-container');
  const totalSlides = document.querySelectorAll('.image-container img').length;

  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;

  container.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateIndicators();
}

function goToSlide(index) {
  currentSlide = index;
  const container = document.querySelector('.image-container');
  container.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateIndicators();
}

function updateIndicators() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

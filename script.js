let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-slide');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
  });
}

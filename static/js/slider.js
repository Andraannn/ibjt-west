document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Auto-slide every 4 seconds
  setInterval(nextSlide, 4000);

  // Optional: Uncomment below for manual navigation
  // document.querySelector('.next-btn').addEventListener('click', nextSlide);
  // document.querySelector('.prev-btn').addEventListener('click', function() {
  //   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  //   showSlide(currentIndex);
  // });
});
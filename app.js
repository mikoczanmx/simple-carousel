let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let currentSlide = 1;
let numberOfSlides = slides.length;

function nextSlide() {
  if (currentSlide == numberOfSlides) {
    currentSlide = 1;
  } else {
    currentSlide += 1;
  }
  showSlide();
}

function prevSlide() {
  if (currentSlide == 1) {
    currentSlide = numberOfSlides;
  } else {
    currentSlide -= 1;
  }
  showSlide();
}

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.add("slide-hidden");
  });
  slides[currentSlide - 1].classList.remove("slide-hidden");
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
showSlide();

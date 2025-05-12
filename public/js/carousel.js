// let current = 0;
// const carousel = document.getElementById('carousel');

// function goto(index) {
//     current = index;
//     carousel.style.transform =  `translateX(-${index * 100}%)`;
// }

document.addEventListener("DOMContentLoaded", function () {
  let current = 0;

  const carousel = document.getElementById("carousel");
  const slides = carousel.children;
  const totalSlides = slides.length;

  const button = document.querySelectorAll(".nav-car");

  button.forEach((btn) => {
    btn.addEventListener("click", function () {
      const slideIndex = parseInt(btn.dataset.slide);
      goto(slideIndex);
    });
  });

  function goto(index) {
    current = index;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(() => {
    current = (current + 1) % totalSlides;
    goto(current);
  }, 5000);
});

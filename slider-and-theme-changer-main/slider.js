const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");

let index = 0;

display(index);

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[index].style.display = "flex";
  slides[index].style.flexDirection = "column";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }

  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }

  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

const body = document.querySelector("body");
const input = document.getElementById("theme");

input.addEventListener("click", () => {
  if (input.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});

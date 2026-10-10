//mobile header toggle
document.getElementById("toggle-nav").onclick = () => {
  const menu = document.getElementById("menu-items");
  const arrow = document.getElementById("toggle-nav");

  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    arrow.innerHTML = "▲";
  } else {
    arrow.innerHTML = "▼";
  }
};

//spaces/rooms slideshow 
document.getElementById("next-slide").onclick = (e) => {
  e.preventDefault();
  const currentSlide = getCurrentSlide();
  let nextSlide = currentSlide.nextElementSibling;

  while (nextSlide && !nextSlide.classList.contains("slide")) {
    nextSlide = nextSlide.nextElementSibling;
  }

  //if there re no more slides, the slideshow goes back to the first image/slide
  if (nextSlide == null) {
    nextSlide = document.querySelector(".slideshow-container .slide:first-child");
  }

  slide(currentSlide, nextSlide);
};

document.getElementById("prev-slide").onclick = (e) => {
  e.preventDefault();
  const currentSlide = getCurrentSlide();
  let nextSlide = currentSlide.previousElementSibling;

  while (nextSlide && !nextSlide.classList.contains("slide")) {
    nextSlide = nextSlide.previousElementSibling;
  }

  //if there re no more slides, the slideshow goes back to the first image/slide
  if (nextSlide == null) {
  nextSlide = document.querySelector(".slideshow-container .slide:last-of-type");
}

  slide(currentSlide, nextSlide);
};

const getCurrentSlide = () => {
  return document.querySelector(".slideshow-container .slide.active");
};

const slide = (currentSlide, nextSlide) => {
  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");
};

//heart button toggle
document.querySelectorAll(".heart").forEach(button => {
  button.onclick = () => {
    button.classList.toggle("liked");
    if (button.classList.contains("liked")) {
      button.innerHTML = "♥";
    } 
    else {
      button.innerHTML = "♡";
    }
  };
});
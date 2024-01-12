// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  let navbar = document.getElementById("header");
  console.log(navbar);
  if (scrollPosition > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const bar = document.getElementById("bar");
const nav = document.querySelector(".middle");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const MainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

// Important to understand smallImg is a nodelist which is the same thing as an array which means you can loop through the elements in html.
for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", function () {
    MainImg.src = smallImg[i].src;
  });
}

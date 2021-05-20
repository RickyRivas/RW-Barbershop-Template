const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("is-active");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .1s ease-in forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("is-active");
  });
};
navSlide();
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var d = new Date();
var n = d.getDay();

let today = document.querySelector(".todaysDate");

let closedText = "closed.";

let openText = "open until 8pm.";

if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5 || n === 6) {
  today.textContent = openText;
  today.style.color = "green";
} else {
  today.textContent = closedText;
  today.style.color = "red";
}

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

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

// HEADER CHANGE BACKGROUND FROM SECTION TO SECTION
window.addEventListener("scroll", () => {
  var header = document.getElementById("header");
  var hero = document.getElementById("hero");
  if (hero.getBoundingClientRect().top <= 0) {
    header.style.backgroundColor = "#000";
  } else [(header.style.backgroundColor = "transparent")];
});

var menuOpen = document.querySelector(".fa-bars");
var menuClose = document.querySelector(".fa-xmark");
menuOpen.addEventListener("click", () => {
  menuClose.style.display = "block";
  document.querySelector("nav").style.left = "0";
  document.querySelector("body").style.overflowY = "hidden";
});

menuClose.addEventListener("click", () => {
  menuClose.style.display = "none";
  document.querySelector("nav").style.left = "100%";
  document.querySelector("body").style.overflowY = "scroll";
});

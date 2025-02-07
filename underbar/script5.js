let horizontalUnderLine = document.querySelector("#horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width =
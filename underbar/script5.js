let horizontalUnderLine = document.querySelector("#horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

let verticalUnderLine = document.querySelector("#vertical-underline");
let verticlaMenus = document.querySelectorAll("nav:nth-child(2) a");

verticlaMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => verticalIndicator(e))
);

function verticalIndicator(e) {
  verticalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  verticalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  verticalUnderLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

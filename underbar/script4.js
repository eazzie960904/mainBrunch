let horizontalUnderline = document.querySelector("#horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalUnderline = document.querySelector("#vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
  horizontalUnderline.style.left = e.target.offsetLeft + "px";
  horizontalUnderline.style.width = e.target.offsetWidth + "px";
  horizontalUnderline.style.top =
    e.target.offsetTop + e.target.offsetHeight + "px";
}

verticalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => verticalIndicator(e))
);

function verticalIndicator(e) {
  verticalUnderline.style.left = e.target.offsetLeft + "px";
  verticalUnderline.style.width = e.target.offsetWidth + "px";
  verticalUnderline.style.top =
    e.target.offsetTop + e.target.offsetHeight + "px";
}

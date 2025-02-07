const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuDiary = document.querySelector("#menuDiary");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #eee; color: #000";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuDiary.style = "background: #55b2e4; color: #fff";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #eee; color: #000";
  menuDiary.style = "background: #55b2e4; color: #fff";
};
const diaryChange = () => {
  contentFrame.setAttribute("src", "./diary.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuDiary.style = "background: #eee; color: #000";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuDiary.addEventListener("click", diaryChange);

//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호가 >유저번호 Down!
//랜덤번호가 > 유저번호 Up!
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측불가, 버튼이 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깍지않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다

let computerNum = 0;
const playButton = document.querySelector("#play-button");
const userInput = document.querySelector("#user-input");
const resultArea = document.querySelector("#result-area");
const resetButton = document.querySelector("#reset-button");
let chances = 5;
let gameOver = false;
const chanceArea = document.querySelector("#chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

pickRandomNum();

function play() {
  let userValue = userInput.value;
  userInput.value = "";
  userInput.focus();
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "범위밖의 숫자를 입력했습니다. 다시 입력해주세요";
    return;
  }
  if (history.includes(userValue)) {
    resultArea.textContent = "이미입력한 숫자입니다. 다시 입력해주세요";
    return;
  }
  chances--;

  history.push(userValue);
  console.log(history);

  chanceArea.textContent = `남은참스:${chances}번`;
  if (userValue < computerNum) {
    resultArea.textContent = "UP";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down";
  } else {
    resultArea.textContent = "정답";
    gameOver = true;
  }

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  //useInput창이 깨끗하게 정리되고
  //새로운번호가 생성된다.
  chances = 5;
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과가 나옵니다.";
  chanceArea.textContent = "남은참스:5번";
  playButton.disabled = false;
}

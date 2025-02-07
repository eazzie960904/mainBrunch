// 랜덤번호지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번호가 < 유저번호 Down
// 랜덤번호가 > 유저번호 Up
// Reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깍지않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지않는다.

let computerNum = 0;
let playButton = document.querySelector("#playButton");
let userInput = document.querySelector("#userInput");
let resultArea = document.querySelector("#resultArea");
let resetButton = document.querySelector("#reset");
let chances = 7;
let gameOver = false;
let chanceArea = document.querySelector("#chanceArea");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답:", computerNum);
}

pickRandomNum();

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.innerHTML = "1과 100사이 숫자를 입력해주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.innerHTML = "이미 입력한 숫자입니다. 다른거 입력해";
    return;
  }

  chances--;
  chanceArea.innerHTML = `신에게는 아직: ${chances}번의 기회가 남았습니다.`;

  if (userValue < computerNum) {
    resultArea.innerHTML = "UP!!";
  } else if (userValue > computerNum) {
    resultArea.innerHTML = "Down";
  } else {
    resultArea.innerHTML = "정답입니다.";
    gameOver = true;
  }
  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
    chanceArea.innerHTML = `내가이겼지롱😝..`;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  // user input창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();
  resultArea.innerHTML = "다시 주어진 7번의 도전 목걸이😝";
  chanceArea.innerHTML = "남은 기회: 7번";
  gameOver = false;
  playButton.disabled = false;
  chances = 7;
  history = [];
}

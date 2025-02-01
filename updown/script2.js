let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
playButton.addEventListener("click", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

pickRandomNum();

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자를 입력해주세요.";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미입력한숫자입니다.다른 숫자를 입력해주세요";
    return;
  }

  chances--;
  chanceArea.textContent = `남은기회 ${chances}번`;
  console.log("chances:", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "UP";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down";
  } else {
    resultArea.textContent = "정답 ";
    gameOver = true;
  }

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
    resultArea.textContent = "게임이 끝났습니다.";
  }
}

function reset() {
  //user input창이 정리
  userInput.value = "";
  //새로운 번호 생성
  pickRandomNum();
  let chances = 5;
  chanceArea.textContent = `남은기회 ${chances}번`;
}

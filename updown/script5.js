//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호가 < 유저번호 Down
//랜덤번호가 > 유저번호 Up
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측불가. 버튼이 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다

let computerNum = 0;
let playButton = document.querySelector("#play-button");
let userInput = document.querySelector("#user-input");
let resultArea = document.querySelector("#result-area");
let resetButton = document.querySelector("#reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.querySelector("#chance-area");

//click이란 이벤트가 발생했을 경우만 실행하므로 ()쓰지 않는다.
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

pickRandomNum();

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과가 나옵니다.";
}

function play() {
  let userValue = userInput.value;

  chances--;
  chanceArea.textContent = `남은찬스:${chances}번`;

  if (userValue < computerNum) {
    resultArea.textContent = "up";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down";
  } else if ((userValue = computerNum)) {
    resultArea.textContent = "정답";
  }

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
  userInput.value = "";
  userInput.focus();
}

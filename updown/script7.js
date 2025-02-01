//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 Up!!
//Reset 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다 쓰면 게임이 끝난다(더이상 추측불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를  입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.querySelector("#play-button");
let userInput = document.querySelector("#user-input");
let resultArea = document.querySelector("#result-area");
let resetButton = document.querySelector("#reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.querySelector("#chance-area");
let history = [];

//click이라는 이벤트가 되어야 실행되므로 play()를 써주면 안된다.
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
    resultArea.textContent = "1과 100사이의 값을 입력해주세요";
    userInput.value = "";
    userInput.focus();
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한숫자입니다.";
    return;
  }

  chances--;
  chanceArea.textContent = `남은찬스:${chances}번`;

  if (userValue < computerNum) {
    resultArea.textContent = "up";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down";
  } else if ((userValue = computerNum)) {
    resultArea.textContent = "정답";
    gameOver = true;
  }

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  //user input 창이 깨끗하게 정리되고
  userInput.value = "";
  //새로운 번호가 생성되고
  pickRandomNum();
  userInput.focus();
  resultArea.textContent = "다시시작ㅋ";
}

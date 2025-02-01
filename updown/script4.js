//랜덤번호 지정
//유저가 번호를 입력한다. 그리고 go라는 버트능ㄹ 누름
//만약에 유저가 랜덤번호를 맟주면, 맞췄습니다.
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 Up!!
//Reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다 쓰면 게임이 끝난다.(더이상 추측불가, 버튼이 disable)
//유저가 1~100범위 밖의 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.querySelector("#play-button");
let userInput = document.querySelector("#user-input");
let resultArea = document.querySelector("#result-area");
let resetButton = document.querySelector("#reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.querySelector("#chance-area");
let history = [];

playButton.addEventListener("click", play);
//매개변수로 넘길시 ()하면 바로 출력되어서 쓰면 안됨.
resetButton.addEventListener("click", reset);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

pickRandomNum();

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자를 입력해주세요";
    return;
  }

  //history에 값이 있다면
  if (history.includes(userValue)) {
    resultArea.textContent = "이미입력한 숫자입니다.";
    return;
  }

  chances--;
  chanceArea.textContent = `남은찬스:${chances}번`;
  if (userValue < computerNum) {
    resultArea.textContent = "Up";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down";
  } else if ((userValue = computerNum)) {
    resultArea.textContent = "정답입니다!";
    gameOver = true;
  }

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver === true) {
    playButton.disabled = true;
  }
  //빈칸만들기
  userInput.value = "";

  //포커스 효과 주기
  userInput.focus();
}

function reset() {
  //userinput창이 깨끗하게 정리되고
  userInput.value = "";
  //새로운 번호가 생성되고
  pickRandomNum();
  resultArea.textContent = "결과가 나옵니다.";
}

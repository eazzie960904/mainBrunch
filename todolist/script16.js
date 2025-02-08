//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다.
//delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이간다
//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은 끝난아이템만, 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체 아이템으로 돌아옴

const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let mode = "all";
let filterList = [];

addButton.addEventListener("click", addTask);
for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    filter(e);
  });
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskInput.value = "";
  taskInput.focus();
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  //1.내가 선택한 아이템에 따라서
  let list = [];
  if (mode === "all") {
    //all taskList
    list = taskList;
  } else if (mode === "ongoing" || mode === "done") {
    //ongoing done filterList
    list = filterList;
  }
  //2.다른 결과값을 보여준다
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task" id="task-done">
                <div>${list[i].taskContent}</div>
                <div>
                  <button onclick="toggleComplete('${list[i].id}')">check</button>
                  <button onclick="deleteButton('${list[i].id}')">delete</button>
                </div>
              </div>`;
    } else {
      resultHTML += `<div class="task">
                <div>${list[i].taskContent}</div>
                <div>
                  <button onclick="toggleComplete('${list[i].id}')">check</button>
                  <button onclick="deleteButton('${list[i].id}')">delete</button>
                </div>
              </div>`;
    }
  }

  document.querySelector("#task-board").innerHTML = resultHTML;
}

function 
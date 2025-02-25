//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//진행중 끝남탭을 누르면, 언더바가 이동한다.
//끝남탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체 아이템으로 돌아옴

const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-button");
const tabs = document.querySelectorAll(".task-tabs div");
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
  taskList.push(task);
  console.log(taskList);
  render();
  taskInput.value = "";
  taskInput.focus();
}

function render() {
  let list = [];
  if (mode === "all") {
    //all taskList
    list = taskList;
  } else if (mode === "ongoing" || mode === "done") {
    //ongoing done filterList
    list = filterList;
  }
  //1. 내가 선택한 탭에 따라서
  //2. 다른 리스트를 보여준다.
  resultHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task" id="task-done">
                <div>${list[i].taskContent}</div>
                <div>
                  <button onclick="toggleComplete('${list[i].id}')">check</button>
                  <button onclick="deleteButton('${list[i].id}')">delete</button>
                </div>
              </div> `;
    } else {
      resultHTML += `<div class="task">
                <div>${list[i].taskContent}</div>
                <div>
                  <button onclick="toggleComplete('${list[i].id}')">check</button>
                  <button onclick="deleteButton('${list[i].id}')">delete</button>
                </div>
              </div> `;
    }
  }

  document.querySelector("#task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteButton(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function filter(e) {
  mode = e.target.id;
  filterList = [];
  console.log(e.target.id);
  if (mode === "all") {
    //전체리스트를 보여준다.
    render();
  } else if (mode === "ongoing") {
    //진행중 아이템을 보여준다.
    //taskList[i].isComplete===false
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode === "done") {
    //끝남 아이템을 보여준다.
    //taskList[i].isComplete===true
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

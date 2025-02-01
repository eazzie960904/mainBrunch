//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//1. check버튼을 클릭하는 순간 true false
//2. true이면 끝난걸로 간주하고 밑줄 보여주기
//3. falsedl이면 안끝난걸로 간주하고 그대로

//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은 끝난 아이템만, 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector("#add-button");
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
  taskList.push(task);
  console.log(taskList);
  render();
  taskInput.value = "";
  taskInput.focus();
}

function render() {
  //1.내가 선택한 탭에 따라서
  if (mode === "all") {
    //all taskList
    list = taskList;
  } else if (mode === "ongoing" || mode === "done") {
    //ongoing, done filterList
    list = filterList;
  }
  //2.리스트를 달리 보여준다
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task" id="task-done">
            <div>${list[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${list[i].id}')">check</button>
              <button onclick="deleteTask('${list[i].id}')">delete</button>
            </div>
          </div>`;
    } else {
      resultHTML += `<div class="task">
                <div>${list[i].taskContent}</div>
                <div>
                  <button onclick="toggleComplete('${list[i].id}')">check</button>
                  <button onclick="deleteTask('${list[i].id}')">delete</button>
                </div>
              </div>`;
    }
  }
  document.querySelector("#task-board").innerHTML = resultHTML;
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
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

function filter(e) {
  //뭘 클릭했는지를 알아야 할때
  mode = e.target.id;
  filterList = [];

  if (mode === "all") {
    //전체리스트를 보여준다
    render();
  } else if (mode === "ongoing") {
    //진행중인 아이템을 보여준다
    //task.isComplete=false
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode === "done") {
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

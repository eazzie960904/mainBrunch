//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할이 끝나면서 밑줄이간다
//1.check버튼을 클릭하는 순간 true false
//2. true이면 끝난걸로 간주하고 밑줄 보여주기
//3. false이면 안끝난걸로 간주하고 그대로

//진행중 끝남 탭을 누르면, 언더바가 이동한다.
//끝남탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체 아이템으로 돌아옴

const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-button");
let tabs = document.querySelectorAll(".task-tabs div");
console.log(tabs);
const taskList = [];
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
  taskInput.value = "";
  taskInput.focus();
  render();
}

function render() {
  //1.내가 선택한 탭에 따라서
  let list = [];
  if (mode === "all") {
    //all taskList
    list = taskList;
  } else if (mode === "ongoing" || "done") {
    //ongoing,done filterList
    list = filterList;
  }
  //2.리스트를 달리보여준다
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
  console.log(mode);
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
    console.log(filterList);
  } else if (mode === "done") {
    //task.isComplete=true
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

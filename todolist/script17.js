//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이간다/
//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은 끝난아이템만, 진행중 탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체 아이템으로 돌아옴

const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-button");
let taskList = [];

addButton.addEventListener("click", addTask);
taskInput.addEventListener("focus", function () {
  taskInput.value = "";
});

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task" id="task-done">
            <div>${taskList[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${taskList[i].id}')">check</button>
              <button onclick="deleteButton('${taskList[i].id}')">delete</button>
            </div>
          </div>`;
    } else {
      resultHTML += `<div class="task">
                <div>${taskList[i].taskContent}</div>
                <div>
                  <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                   <button onclick="deleteButton('${taskList[i].id}')">delete</button>
                </div>
              </div>`;
    }
  }

  document.querySelector("#task-board").innerHTML = resultHTML;
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
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
  for (let i = 0; taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
    }
  }
  console.log(taskList);
  render();
}

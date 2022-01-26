// 유저가 값을 입력
// +버튼 클릭시 할일탭에 추가
// delete 버튼을 누르면 할 일 삭제
// check  버튼을 누르면 할 일이 끝나면서 문자에 밑줄을 침
//
// Not done을 누르면 언더바 이동
// done은 done 할 일만 나온다

let taskInput = document.getElementById("task-input");
let btnAdd = document.getElementById("add");
let taskList = [];
let btnCheck = document.getElementById("check");
let tabs = document.querySelectorAll(".task-tabs div");
let mode = "all";
let filterList = [];
let underLine = document.getElementById("under-line");



btnAdd.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addTask(event);
  }
});

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  render();
}

function render() {
  let list = [];
  if (mode == "all") {
    list = taskList;
    console.log(list);
  } else if (mode == "not-done" || mode == "done") {
    list = filterList;
  }

  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task task-done-bg text-center">
    <div class="task-done">${list[i].taskContent}</div>
    <div class="btn-box">
    <button onclick="toggleComplete('${list[i].id}')">
    <i class="fas fa-undo-alt"></i>
    </button>
    <button onclick="toggleDelete('${list[i].id}')">
    <i class="fas fa-trash-alt"></i>
  </button>
    </div>

  </div>`;
    } else {
      resultHTML += `<div class="task">
  <div>${list[i].taskContent}</div>
    <div class="btn-box">
    <button onclick="toggleComplete('${list[i].id}')">
    <i class="fas fa-check"></i>
    </button>
    <button onclick="toggleDelete('${list[i].id}')">
    <i class="fas fa-trash-alt"></i>
  </button>
    </div>
  </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}
function toggleComplete(id) {
  console.log(id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      // if (taskList[i].isComplete == true){
      //   taskList[i].isComplete=false;
      // }else if (taskList[i].isComplete == false){
      //   taskList[i].isComplete=true;
      // }
      break;
    }
  }
  render();
}

function toggleDelete(id) {
  console.log("삭제");
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      console.log(taskList);
      break;
    }
  }

  render();
  filter();
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
function filter(e) {
  if (e) {
    mode = e.target.id;
    underLine.style.left = e.currentTarget.offsetLeft + "px";
    underLine.style.width = e.currentTarget.offsetWidth + "px";
    underLine.style.top =
      e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
  }
  filterList = [];
  if (mode == "all") {
    render();
  } else if (mode == "not-done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }

  console.log(filterList);
}

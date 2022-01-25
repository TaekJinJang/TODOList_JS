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

btnAdd.addEventListener("click", addTask);


function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,

  }
  taskList.push(task);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
if(taskList[i].isComplete==true) {
  resultHTML += `<div class="task">
    <div class="task-done">${taskList[i].taskContent}</div>
      <div>
          <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
          <button onclick="toggleDelete()">Delete</button>
      </div>
  </div>`;
}else {
  resultHTML += `<div class="task">
  <div>${taskList[i].taskContent}</div>
    <div>
        <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
        <button onclick="toggleDelete()">Delete</button>
    </div>
  </div>`;
}
}

  document.getElementById("task-board").innerHTML = resultHTML;
}
function toggleComplete(id) {
  console.log(id);
  for(let i=0;i<taskList.length;i++){
    if(taskList[i].id==id) {
      taskList[i].isComplete= !taskList[i].isComplete;
      // if (taskList[i].isComplete == true){
      //   taskList[i].isComplete=false;
      // }else if (taskList[i].isComplete == false){
      //   taskList[i].isComplete=true;
      // }
      break;
    }
  }
  render();
  console.log(taskList);
}

function toggleDelete() {
  console.log("삭제");
}

function randomIDGenerate(){
  return '_' + Math.random().toString(36).substr(2, 9);
}
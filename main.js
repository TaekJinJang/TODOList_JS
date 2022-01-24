// 유저가 값을 입력
// +버튼 클릭시 할일탭에 추가
// delete 버튼을 누르면 할 일 삭제
// check  버튼을 누르면 할 일이 끝나면서 문자에 밑줄을 침
// Not done을 누르면 언더바 이동
// done은 done 할 일만 나온다

let taskInput = document.getElementById("task-input");
let btnAdd = document.getElementById("add");
let taskList = [];

btnAdd.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
    <div>${taskList[i]}</div>
      <div>
          <button>Check</button>
          <button>Delete</button>
      </div>
  </div>`;
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}
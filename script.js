document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    function addTask(taskText) {
      const taskItem = document.createElement("li");
      taskItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="btn btn-success btn-sm mr-2">Complete</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </div>
      `;
      taskList.appendChild(taskItem);
  
      const completeBtn = taskItem.querySelector(".btn-success");
      const deleteBtn = taskItem.querySelector(".btn-danger");
  
      completeBtn.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
      });
  
      deleteBtn.addEventListener("click", function() {
        taskItem.remove();
      });
    }
  });
  
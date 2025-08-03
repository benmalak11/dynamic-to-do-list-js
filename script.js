document.addEventListener("DOMContentLoaded", function () {
const taskInput = document.getElementById("task-input") 
const taskList = document.getElementById("task-list") 
const addButton = document.getElementById("add-task-btn")

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    console.log("Task added:", taskText); // Test

    const li = document.createElement("li");
li.textContent = taskText;
const removeButton = document.createElement("button");
removeButton.textContent = "Remove";

removeButton.onclick = function() {
    li.remove();
};
li.appendChild(removeButton);
taskList.appendChild(li);
taskInput.value = "";
}
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
});
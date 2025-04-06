function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let taskList = document.getElementById("taskList");

  // Create new list item
  let li = document.createElement("li");
  li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">❌</button>
    `;

  taskList.appendChild(li);
  taskInput.value = ""; // Clear input field
}

// Toggle completed task
function toggleTask(task) {
  task.classList.toggle("completed");
}

// Delete a task
function deleteTask(button) {
  button.parentElement.remove();
}



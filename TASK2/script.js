const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task on button click
addBtn.addEventListener("click", addTask);

// Also allow Enter key to add
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create list item
    const li = document.createElement("li");

    // Task text span
    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark complete on click
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "remove-btn";

    removeBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    // Append elements
    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

const taskInput = document.getElementById('taskInput'); 
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }

    const li = document.createElement('li');

    // Task span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');

    // Mark as done toggle
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

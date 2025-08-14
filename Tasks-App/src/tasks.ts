const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
    description: string;
    isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

// Render saved tasks on page load
tasks.forEach(renderTask);

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

function createTask(event: SubmitEvent) {
    event.preventDefault();

    const taskDescription = formInput?.value?.trim();

    if (taskDescription) {
        const task: Task = {
            description: taskDescription,
            isCompleted: false,
        };

        addTask(task);
        renderTask(task);
        updateStorage();

        if (formInput) formInput.value = '';
        return;
    }
    alert('Please enter a task description');
}

function addTask(task: Task): void {
    tasks.push(task);
}

function renderTask(task: Task): void {
    const taskElement = document.createElement('li');
    taskElement.style.display = 'flex';
    taskElement.style.justifyContent = 'space-between';
    taskElement.style.alignItems = 'center';
    taskElement.style.padding = '5px 0';
    taskElement.style.gap = '10px';

    // Task description
    const taskDescriptionElement = document.createElement('span');
    taskDescriptionElement.textContent = task.description;
    if (task.isCompleted) {
        taskDescriptionElement.style.textDecoration = 'line-through';
    }

    const rightSection = document.createElement('div');
    rightSection.style.display = 'flex';
    rightSection.style.alignItems = 'center';
    rightSection.style.gap = '8px';

    // Checkbox
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.isCompleted;

    taskCheckbox.addEventListener('change', () => {
        task.isCompleted = taskCheckbox.checked;
        updateStorage();
        taskDescriptionElement.style.textDecoration = task.isCompleted
            ? 'line-through'
            : 'none';
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.border = 'none';
    deleteBtn.style.background = 'transparent';
    deleteBtn.style.fontSize = '16px';

    deleteBtn.addEventListener('click', () => {
        // Remove from tasks array
        const index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        taskElement.remove();
        // Update storage
        updateStorage();
    });

    rightSection.appendChild(taskCheckbox);
    rightSection.appendChild(deleteBtn);

    taskElement.appendChild(taskDescriptionElement);
    taskElement.appendChild(rightSection);

    taskListElement?.appendChild(taskElement);
}

taskForm?.addEventListener('submit', createTask);

function updateStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

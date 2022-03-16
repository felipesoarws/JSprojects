const taskValue = document.getElementById("taskValue");
const area = document.querySelector(".area");
const tasks = document.querySelector(".tasks");

taskValue.addEventListener("change", () => {
  const check = taskValue.classList[0] == "error";
  check ? taskValueWithoutError() : "";
  uptadeLocalStorage();
});

const createTask = () => {
  const inputTask = taskValue.value.trim().length > 0;

  if (inputTask) {
    const task = document.createElement("div");

    task.classList.add("task");
    task.innerHTML = `
    <div class="content">
      <p >${taskValue.value}</p>
  </div>
  <div class="del-task">
  <i class="fa-solid fa-trash-can"></i>
</div>
    `;

    tasks.appendChild(task);

    taskValue.value = "";
    taskValue.focus();

    const delTask = document.querySelectorAll(".del-task");
    deleteTask(delTask);

    const doneTask = document.querySelectorAll(".content p");
    checkTask(doneTask);

    checkSpace(tasks);
    uptadeLocalStorage();
  } else {
    taskValueWithError();
  }
};

const addTask = document.querySelector(".addTask");
addTask.addEventListener("click", createTask);

const taskValueWithoutError = () => {
  taskValue.classList.remove("error");
  taskValue.placeholder = "Add a task...";
};

const taskValueWithError = () => {
  taskValue.classList.add("error");
  taskValue.placeholder = "Add a valid task...";
};

const deleteTask = (delTask) => {
  for (let x = 0; x < delTask.length; x++) {
    delTask[x].addEventListener("click", () => {
      const taskToRemove = delTask[x].parentNode;
      taskToRemove.remove();
      checkSpace(tasks);
      uptadeLocalStorage();
    });
  }
};

const checkTask = (doneTask) => {
  for (let x = 0; x < doneTask.length; x++) {
    doneTask[x].addEventListener("click", () => {
      doneTask[x].classList.add("done");
      uptadeLocalStorage();
    });
  }
};

const checkSpace = (tasks) => {
  const check = tasks.childNodes.length < 1;
  check ? (tasks.style.marginTop = 0) : (tasks.style.marginTop = `1rem`);
};

checkSpace(tasks);

const uptadeLocalStorage = () => {
  const organizedTasks = tasks.childNodes;

  const localStorageTasks = [...organizedTasks].map((task) => {
    const content = task.firstElementChild.firstElementChild;
    const isCompleted = content.classList.contains("done");

    return { description: content.innerText, isCompleted };
  });

  localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
};

const refreshTasks = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

  for (let jsonTask of tasksFromLocalStorage) {
    const task = document.createElement("div");

    task.classList.add("task");
    task.innerHTML = `
    <div class="content">
      <p >${jsonTask.description}</p>
  </div>
  <div class="del-task">
  <i class="fa-solid fa-trash-can"></i>
</div>
    `;

    tasks.appendChild(task);
    checkSpace(tasks);

    const delTask = document.querySelectorAll(".del-task");
    deleteTask(delTask);

    const doneTask = document.querySelectorAll(".content p");

    if (jsonTask.isCompleted) {
      for (let x = 0; x < doneTask.length; x++) {
        doneTask[x].classList.add("done");
      }
    } else {
      checkTask(doneTask);
    }
  }
};

refreshTasks();

document.addEventListener("keypress", (e) => {
  e.keyCode == 13 ? createTask() : taskValueWithError();
});

document.addEventListener("DOMContentLoaded", function () {
  const mainContent1 = document.querySelector(".main-content-1");
  const mainContent2 = document.querySelector(".main-content-2");
  const form = document.getElementById("initial-form");
  const inputName = document.querySelector('[name="initial-name"]');
  const greetingElement = document.getElementById("greeting");
  const dateElement = document.getElementById("date");
  let editingTaskId = null;

  function hideMainContent() {
    mainContent1.style.display = "none";
  }

  function hideKanbanContent() {
    mainContent2.style.display = "none";
  }

  function showMainContent() {
    mainContent2.style.display = "block";
  }

  function updateGreeting() {
    const name = localStorage.getItem("initial-name") || inputName.value;
    const now = new Date();
    const hours = now.getHours();
    let greeting = "Olá";

    if (hours < 12) {
      greeting = "Bom dia";
    } else if (hours >= 12 && hours <= 17) {
      greeting = "Boa tarde";
    } else {
      greeting = "Boa noite";
    }

    greetingElement.textContent = `${greeting}, ${name}`;
    dateElement.textContent = now.toLocaleDateString("pt-BR");
    showMainContent();
  }

  if (localStorage.getItem("initial-name")) {
    hideMainContent();
    updateGreeting();
  } else {
    hideKanbanContent();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem("initial-name", inputName.value);
    hideMainContent();
    updateGreeting();
  });

  document
    .getElementById("taskForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const task = {
        id: editingTaskId ? editingTaskId : generateUniqueId(),
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value,
        dueDate: document.getElementById("dueDate").value,
        assignees: document.getElementById("assignees").value,
        status: document.getElementById("status").value,
      };

      if (editingTaskId) {
        updateTask(task);
      } else {
        saveTask(task);
        addTaskToDOM(task);
      }

      toggleModal();
      document.getElementById("taskForm").reset();
      editingTaskId = null;
    });

  document
    .querySelectorAll(".kanban-table-header span")
    .forEach(function (addButton) {
      addButton.addEventListener("click", function () {
        document.getElementById("taskForm").reset();
        editingTaskId = null;
        toggleModal();
      });
    });

  document
    .querySelector(".close-button")
    .addEventListener("click", toggleModal);

  function toggleModal() {
    const modal = document.getElementById("taskModal");
    modal.style.display = modal.style.display === "none" ? "block" : "none";
  }

  function generateUniqueId() {
    let nextId = parseInt(localStorage.getItem("next-task-id")) || 0;
    localStorage.setItem("next-task-id", nextId + 1);
    return `task-${nextId}`;
  }

  function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function updateTask(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskIndex = tasks.findIndex((t) => t.id === updatedTask.id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      updateDOMTask(updatedTask);
    }
  }

  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(addTaskToDOM);
  }

  function formatDate(dateString) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const normalizedDate = getNormalizedDate(dateString);
    return normalizedDate.toLocaleDateString("pt-BR", options);
  }

  function getNormalizedDate(input) {
    let date = new Date(input);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const dateString = date.toISOString().split("T")[0] + "T03:00:00-03:00";
    return new Date(dateString);
  }

  function getBorderColorClass(dueDate) {
    const today = getNormalizedDate(new Date());
    const taskDueDate = getNormalizedDate(dueDate);

    if (taskDueDate > today) {
      return "border-green";
    } else if (taskDueDate.getTime() === today.getTime()) {
      return "border-yellow";
    } else {
      return "border-red";
    }
  }

  function addTaskToDOM(task) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.id = task.id;
    taskCard.draggable = true;

    const borderColorClass = getBorderColorClass(task.dueDate);
    taskCard.classList.add(borderColorClass);

    taskCard.innerHTML = `<h3>${task.title}</h3><p>${formatDate(
      task.dueDate
    )}</p><div class="priority-container">Prioridade<span class="priority priority-${task.priority.toLowerCase()}"></span></div>`;
    taskCard.addEventListener("click", function () {
      editTask(task.id);
    });
    taskCard.addEventListener("dragstart", dragStart);
    taskCard.addEventListener("dragend", dragEnd);

    const targetColumn = document.querySelector(
      `.kanban-table[data-status="${task.status}"]`
    );
    targetColumn.appendChild(taskCard);
  }

  function editTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let task = tasks.find((task) => task.id === taskId);
    if (task) {
      document.getElementById("title").value = task.title;
      document.getElementById("description").value = task.description;
      document.getElementById("priority").value = task.priority;
      document.getElementById("dueDate").value = task.dueDate;
      document.getElementById("assignees").value = task.assignees;
      document.getElementById("status").value = task.status;
      editingTaskId = task.id;
      toggleModal();
    }
  }

  function updateDOMTask(updatedTask) {
    const taskCard = document.getElementById(updatedTask.id);
    if (taskCard) {
      const previousColumn = taskCard.closest(".kanban-table");
      previousColumn.removeChild(taskCard);

      const borderColorClass = getBorderColorClass(updatedTask.dueDate);
      taskCard.className = "task-card"; // Reinicia as classes
      taskCard.classList.add(borderColorClass);

      taskCard.innerHTML = `<h3>${updatedTask.title}</h3><p>${formatDate(
        updatedTask.dueDate
      )}</p><div class="priority-container">Prioridade<span class="priority priority-${updatedTask.priority.toLowerCase()}"></span></div>`;

      const targetColumn = document.querySelector(
        `.kanban-table[data-status="${updatedTask.status}"]`
      );
      targetColumn.appendChild(taskCard);
    }
  }

  function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    setTimeout(() => {
      event.target.classList.add("hide");
    }, 0);
  }

  function dragEnd(event) {
    event.target.classList.remove("hide");
  }

  window.allowDrop = function (event) {
    event.preventDefault();
  };

  window.drop = function (event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target.closest(".kanban-table");

    const newStatus = dropzone.getAttribute("data-status");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let task = tasks.find((task) => task.id === id);
    if (task) {
      task.status = newStatus;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      updateDOMTask(task);

      if (editingTaskId === id) {
        document.getElementById("status").value = newStatus;
      }
    }
  };

  loadTasks();
});

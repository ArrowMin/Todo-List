export function renderNewProject(project) {
  const projectList = document.getElementById("projectsContainer");
  const projectButton = document.createElement("button");
  projectButton.textContent = project.projectName;
  projectButton.classList.add("project-button");
  projectButton.dataset.projectId = project.id;
  projectList.appendChild(projectButton);
  viewProject(project);
}

export function renderNewToDoItem(todoItem) {
  const todoList = document.getElementById("todoContainer");
  const newToDoItem = document.createElement("div");
  newToDoItem.classList.add("todoItem");
  newToDoItem.dataset.todoId = todoItem.id;

  const titleItem = document.createElement("div");
  titleItem.classList.add("todoItemProperty");
  titleItem.textContent = `Title: ${todoItem.title}`;

  const descriptionItem = document.createElement("div");
  descriptionItem.classList.add("todoItemProperty");
  descriptionItem.textContent = `Description: ${todoItem.description}`;

  const dueDateItem = document.createElement("div");
  dueDateItem.classList.add("todoItemProperty");
  dueDateItem.textContent = `Due Date: ${todoItem.dueDate}`;

  const priorityItem = document.createElement("div");
  priorityItem.classList.add("todoItemProperty");
  priorityItem.textContent = `Priority: ${todoItem.priority}`;

  const editButton = document.createElement("button");
  editButton.classList.add("todoItemEdit");
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("todoItemDelete");
  deleteButton.textContent = "Finish";

  newToDoItem.append(
    titleItem,
    descriptionItem,
    dueDateItem,
    priorityItem,
    editButton,
    deleteButton
  );
  todoList.appendChild(newToDoItem);
}

export function viewProject(project) {
  const currentProjectName = document.getElementById("currentProject");
  currentProjectName.textContent = project.projectName;
  //render all todo items in project by clearing everything in the todoContainer and rendering all items
  const todoList = document.getElementById("todoContainer");
  todoList.textContent = "";
  project.getItems().forEach((todoItem) => renderNewToDoItem(todoItem));
}

export function populateEditForm(todoItem) {
  const editForm = document.getElementById("editDialog").querySelector("form");
  editForm.elements.Title.value = todoItem.title;
  editForm.elements.Description.value = todoItem.description;
  editForm.elements.DueDate.value = todoItem.dueDate;
  editForm.elements.Priority.value = todoItem.priority;
}

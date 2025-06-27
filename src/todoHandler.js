import { createToDoItem } from "./todoitem";
import { getCurrentProject } from "./state";
import { renderNewToDoItem } from "./dom-updates";

export function handleNewToDo(formData) {
  const formObject = Object.fromEntries(formData.entries());
  const newToDoItem = createToDoItem(
    formObject.Title,
    formObject.Description,
    formObject.DueDate,
    formObject.Priority
  );
  console.log(
    `Created new to-do item with properties Title: ${newToDoItem.title}, Description: ${newToDoItem.description}, DueDate: ${newToDoItem.dueDate}, Priority: ${newToDoItem.priority}`
  );
  const currentProject = getCurrentProject();
  currentProject.addItem(newToDoItem);
  renderNewToDoItem(newToDoItem);
}

export function deleteToDo(todoItemId) {
  const currentProject = getCurrentProject();
  currentProject.removeItem(todoItemId);
}

import { createToDoItem } from "./todoitem";
import { getCurrentProject } from "./state";
import { renderNewToDoItem } from "./dom-updates";
import { state } from "./state";
import { saveState } from "./storage";

export function handleNewToDo(formData) {
  const formObject = Object.fromEntries(formData.entries());
  const newToDoItem = createToDoItem({
    title: formObject.Title,
    description: formObject.Description,
    dueDate: formObject.DueDate,
    priority: formObject.Priority,
  });
  console.log(
    `Created new to-do item with properties Title: ${newToDoItem.title}, Description: ${newToDoItem.description}, DueDate: ${newToDoItem.dueDate}, Priority: ${newToDoItem.priority}`
  );
  const currentProject = getCurrentProject();
  currentProject.addItem(newToDoItem);
  renderNewToDoItem(newToDoItem);
  saveState(state);
}

export function deleteToDo(todoItemId) {
  const currentProject = getCurrentProject();
  currentProject.removeItem(todoItemId);
  saveState(state);
}

export function handleEditToDo(formData) {
  const formObject = Object.fromEntries(formData.entries());
  const currentProject = getCurrentProject();
  const itemToUpdate = currentProject.getItemById(state.editingTodoId);
  if (itemToUpdate) {
    itemToUpdate.title = formObject.Title;
    itemToUpdate.description = formObject.Description;
    itemToUpdate.dueDate = formObject.DueDate;
    itemToUpdate.priority = formObject.Priority;
  }
  state.editingTodoId = null;
  saveState(state);
}

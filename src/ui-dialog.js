import { viewProject, populateEditForm } from "./dom-updates";
import { handleNewProject } from "./projectHandler";
import { handleNewToDo, deleteToDo, handleEditToDo } from "./todoHandler";
import { state, getCurrentProject } from "./state";
import { saveState } from "./storage";

export function initializeFormDialog() {
  const newProjectBtn = document.getElementById("newProjectButton");
  const newToDoBtn = document.getElementById("newToDoButton");
  // New Project Dialog
  const projectDialog = document.getElementById("projectDialog");
  const formInProjectDialog = projectDialog.querySelector("form");
  // New To-Do Dialog
  const todoDialog = document.getElementById("todoDialog");
  const formInToDoDialog = todoDialog.querySelector("form");
  // Edit To-Do Dialog
  const editDialog = document.getElementById("editDialog");
  const formInEditDialog = editDialog.querySelector("form");

  newProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();
  });

  newToDoBtn.addEventListener("click", () => {
    if (state.currentProjectId === null) {
      alert("Please create a project first!");
      return;
    }

    todoDialog.showModal();
  });

  projectDialog.addEventListener("close", () => {
    console.log(
      `Dialog closed with return value: ${projectDialog.returnValue}.`
    );
    if (projectDialog.returnValue === "submit") {
      const formData = new FormData(formInProjectDialog);
      handleNewProject(formData);
      //console.log("Form data:", Object.fromEntries(formData.entries()));
      formInProjectDialog.reset(); // Clear the form for the next time
    }
  });

  todoDialog.addEventListener("close", () => {
    console.log("got here");
    console.log(`Dialog closed with return value: ${todoDialog.returnValue}.`);
    if (todoDialog.returnValue === "submit") {
      const formData = new FormData(formInToDoDialog);
      handleNewToDo(formData);
      //console.log("Form data:", Object.fromEntries(formData.entries()));
      formInToDoDialog.reset(); // Clear the form for the next time
    }
  });

  const projectsContainer = document.getElementById("projectsContainer");
  projectsContainer.addEventListener("click", (event) => {
    const clickedButton = event.target.closest(".project-button");

    if (clickedButton) {
      const projectId = clickedButton.dataset.projectId;
      state.currentProjectId = projectId;
      saveState(state);

      console.log(`Current project id is now: ${state.currentProjectId}`);
      //get the actual project from the state list
      const selectedProject = getCurrentProject();
      if (selectedProject) {
        console.log("Found project object:", selectedProject);
        console.log("Project Name:", selectedProject.projectName);
        viewProject(selectedProject);
      } else {
        console.error("Error: Project not found in state!");
      }
    }
  });

  const todoContainer = document.getElementById("todoContainer");
  todoContainer.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".todoItemDelete");
    const editButton = event.target.closest(".todoItemEdit");
    if (deleteButton) {
      const todoItemId = deleteButton.parentNode.dataset.todoId;
      deleteToDo(todoItemId);
      deleteButton.parentNode.remove();
    }
    if (editButton) {
      const todoItemId = editButton.parentNode.dataset.todoId;
      state.editingTodoId = todoItemId;
      // 2. Get the current project object
      const currentProject = getCurrentProject();
      if (!currentProject) return; // Safety check

      // 3. Find the specific to-do item object within that project
      const todoItem = currentProject.getItemById(todoItemId);
      if (!todoItem) return; // Safety check

      // 4. Populate the edit form with this item's data
      populateEditForm(todoItem);

      // 5. Open the edit dialog
      editDialog.showModal();
    }
  });

  editDialog.addEventListener("close", () => {
    if (editDialog.returnValue === "submit") {
      const formData = new FormData(formInEditDialog);

      // 1. Call the handler to update the data in the state
      handleEditToDo(formData);

      // 2. Refresh the UI to show the changes
      viewProject(getCurrentProject());

      formInEditDialog.reset();
    }
  });
}

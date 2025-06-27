import { viewProject } from "./dom-updates";
import { handleNewProject } from "./projectHandler";
import { state } from "./state";

export function initializeFormDialog() {
  const newProjectBtn = document.getElementById("newProjectButton");
  const newToDoBtn = document.getElementById("newToDoButton");
  // New Project Dialog
  const projectDialog = document.getElementById("projectDialog");
  const formInProjectDialog = projectDialog.querySelector("form");
  // New To-Do Dialog
  const todoDialog = document.getElementById("todoDialog");
  const formInToDoDialog = todoDialog.querySelector("form");

  newProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();
  });

  newToDoBtn.addEventListener("click", () => {
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
      console.log(`Current project id is now: ${state.currentProjectId}`);
      //get the actual project from the state list
      const selectedProject = state.projects.find(
        (project) => project.id === projectId
      );
      if (selectedProject) {
        console.log("Found project object:", selectedProject);
        console.log("Project Name:", selectedProject.projectName);

        // You can now access its methods, like getItems()
        console.log(
          "To-Do items for this project:",
          selectedProject.getItems()
        );
        viewProject(selectedProject);

        // Now you can pass this full object to your renderer
        // renderToDosForProject(selectedProject);
      } else {
        console.error("Error: Project not found in state!");
      }
    }
  });
}

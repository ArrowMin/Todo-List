import "./styles.css";
import { createToDoItem } from "./todoitem";
import { createProject } from "./project";
import { initializeFormDialog } from "./ui-dialog";
import { state } from "./state";
import { handleNewProject } from "./projectHandler";
import { renderNewProject, viewProject } from "./dom-updates";
import { getCurrentProject } from "./state";

// const defaultProject = createProject("Default");
// state.projects.push(defaultProject);
// state.currentProjectId = defaultProject.id;
// renderNewProject(defaultProject);
// console.log(state.currentProjectId);
// viewProject(defaultProject);
function initialRender() {
  // Render all saved projects
  state.projects.forEach((project) => renderNewProject(project));

  // Get the last viewed project (or the first project if none was selected)
  let projectToView = getCurrentProject();
  if (!projectToView && state.projects.length > 0) {
    // If no current project is set, default to the first one
    projectToView = state.projects[0];
    state.currentProjectId = projectToView.id;
  }

  // If there's a project to view, render its content
  if (projectToView) {
    viewProject(projectToView);
  }
}

// Run the initial render and set up event listeners
initializeFormDialog();
initialRender();

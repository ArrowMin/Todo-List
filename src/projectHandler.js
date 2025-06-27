import { createProject } from "./project";
import { state } from "./state";
import { renderNewProject } from "./dom-updates";
import { saveState } from "./storage"; // Import saveState

export function handleNewProject(formData) {
  const formObject = Object.fromEntries(formData.entries());
  console.log(`Created new project with name ${formObject.Name}`);
  const newProject = createProject({ projectName: formObject.Name });
  state.projects.push(newProject);
  state.currentProjectId = newProject.id;
  console.log(`Current project ID: ${state.currentProjectId}`);
  renderNewProject(newProject);
  saveState(state);
}

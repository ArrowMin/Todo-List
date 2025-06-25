import { createProject } from "./project";
import { state } from "./index";
import { renderNewProject } from "./dom-updates";

export function handleNewProject(formData) {
  const formObject = Object.fromEntries(formData.entries());
  console.log(formObject.Name);
  const newProject = createProject(formObject.Name);
  state.projects.push(newProject);
  renderNewProject(newProject);
}

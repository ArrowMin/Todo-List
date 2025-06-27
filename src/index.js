import "./styles.css";
import { createToDoItem } from "./todoitem";
import { createProject } from "./project";
import { initializeFormDialog } from "./ui-dialog";
import { state } from "./state";
import { handleNewProject } from "./projectHandler";
import { renderNewProject, viewProject } from "./dom-updates";

initializeFormDialog();

const defaultProject = createProject("Default");
state.projects.push(defaultProject);
state.currentProjectId = defaultProject.id;
renderNewProject(defaultProject);
console.log(state.currentProjectId);
viewProject(defaultProject);

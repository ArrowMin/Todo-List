import "./styles.css";
import { createToDoItem } from "./todoitem";
import { createProject } from "./project";
import { initializeFormDialog } from "./ui-dialog";

export const state = {
  projects: [],
  currentProjectId: null,
};

initializeFormDialog();

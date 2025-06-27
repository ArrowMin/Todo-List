import { loadState } from "./storage";

const loadedState = loadState();

export const state = loadedState || {
  projects: [],
  currentProjectId: null,
  editingTodoId: null,
};

export function getCurrentProject() {
  // First, check if there even is a current project ID.
  if (!state.currentProjectId) {
    return null;
  }
  // If there is, find it in the projects array.
  return state.projects.find(
    (project) => project.id === state.currentProjectId
  );
}

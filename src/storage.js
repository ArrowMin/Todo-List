import { createProject } from "./project";
import { createToDoItem } from "./todoitem";

// Function to save the entire application state to localStorage
export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todoAppState", serializedState);
  } catch (error) {
    console.error("Could not save state to localStorage", error);
  }
}

// Function to load the state and "rehydrate" it with methods
export function loadState() {
  try {
    const serializedState = localStorage.getItem("todoAppState");
    if (serializedState === null) return undefined;
    const plainData = JSON.parse(serializedState);

    const rehydratedProjects = plainData.projects.map((plainProject) => {
      // Pass the plain object directly to the factory.
      // It will use the existing ID and name.
      const project = createProject(plainProject);

      plainProject.listOfItems.forEach((plainTodo) => {
        // Pass the plain to-do object directly to the factory.
        // It will use the existing ID and other properties.
        const todoItem = createToDoItem(plainTodo);
        project.addItem(todoItem);
      });

      return project;
    });

    return {
      projects: rehydratedProjects,
      currentProjectId: plainData.currentProjectId,
      editingTodoId: null,
    };
  } catch (error) {
    // The original error happened here. Now it's fixed!
    console.error("Could not load state from localStorage", error);
    return undefined;
  }
}

export function renderNewProject(project) {
  const projectList = document.getElementById("projectsContainer");
  const projectButton = document.createElement("button");
  projectButton.textContent = project.projectName;
  projectButton.classList.add("project-button");
  projectButton.dataset.projectId = project.id;
  projectList.appendChild(projectButton);
  viewProject(project);
}

export function viewProject(project) {
  const currentProjectName = document.getElementById("currentProject");
  currentProjectName.textContent = project.projectName;
}

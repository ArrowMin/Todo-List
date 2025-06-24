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
      console.log("Form data:", Object.fromEntries(formData.entries()));
      formInProjectDialog.reset(); // Clear the form for the next time
    }
  });
}

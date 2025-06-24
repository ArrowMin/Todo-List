import "./styles.css";
import { createToDoItem } from "./todoitem";
import { createProject } from "./project";
import { initializeFormDialog } from "./ui-dialog";

initializeFormDialog();

const testItem = createToDoItem("mytitle", "mydescription", "3/2/2004", 10);

const testProject = createProject("Default");

testProject.addItem(testItem);

console.log(testProject.getItems());

const testItem2 = createToDoItem("mytitle", "mydescription", "3/2/2004", 10);
testProject.addItem(testItem2);

console.log(testProject.getItems());

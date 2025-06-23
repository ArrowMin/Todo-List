import { createToDoItem } from "./todoitem";

const testItem = createToDoItem("mytitle", "mydescription", "3/2/2004", 10);
console.log(testItem.description + " " + testItem.id);

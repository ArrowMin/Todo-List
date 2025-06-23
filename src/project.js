export function createProject(projectName) {
  let listOfItems = [];

  function addItem(item) {
    listOfItems.push(item);
  }

  function removeItem(itemId) {
    const originalLength = listOfItems.length;

    listOfItems = listOfItems.filter((item) => item.id !== itemId);

    if (listOfItems.length < originalLength) {
      console.log(`Successfully removed item.`);
    } else {
      console.log(`Item with ID ${itemId} not found.`);
    }
  }

  function getItems() {
    return [...listOfItems];
  }

  return { projectName, addItem, removeItem, getItems };
}

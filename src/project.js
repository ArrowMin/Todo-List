export function createProject(projectName) {
  const id = crypto.randomUUID();
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

  return { id, projectName, addItem, removeItem, getItems };
}

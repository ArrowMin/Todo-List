export function createProject({ projectName, id }) {
  const projectId = id || crypto.randomUUID();
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

  function getItemById(itemId) {
    return listOfItems.find((item) => item.id === itemId);
  }

  return {
    id: projectId,
    projectName,
    addItem,
    removeItem,
    getItems,
    getItemById,
    toJSON: function () {
      return {
        id: this.id,
        projectName: this.projectName,
        listOfItems: listOfItems, // Expose the list for serialization
      };
    },
  };
}

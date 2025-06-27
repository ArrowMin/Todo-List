export function createToDoItem(data) {
  // Private properties of every To-Do Item
  const properties = {
    id: data.id || crypto.randomUUID(),
    title: data.title,
    description: data.description,
    dueDate: data.dueDate,
    priority: data.priority,
  };
  return {
    //ACCESS ID
    get id() {
      return properties.id;
    },
    //GET/SET TITLE
    get title() {
      return properties.title;
    },
    set title(newTitle) {
      properties.title = newTitle;
    },
    //GET/SET DESCRIPTION
    get description() {
      return properties.description;
    },
    set description(newDescription) {
      properties.description = newDescription;
    },
    //GET/SET DUE DATE
    get dueDate() {
      return properties.dueDate;
    },
    set dueDate(newDueDate) {
      properties.dueDate = newDueDate;
    },
    //GET/SET PRIORITY
    get priority() {
      return properties.priority;
    },
    set priority(newPriority) {
      properties.priority = newPriority;
    },
    toJSON: function () {
      // Just return the raw properties object
      return properties;
    },
  };
}

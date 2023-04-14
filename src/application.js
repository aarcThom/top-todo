// toDo object factory function

const ToDoFactory = (tdComplete = false, tdTitle = 'New Task', tdDescription = 'Task Description',
  tdDueDate = '12-12-12', tdPriority = 'low') => {

  let complete = tdComplete;
  let title = tdTitle;
  let description = tdDescription;
  let dueDate = tdDueDate;
  let priority = tdPriority;

  // toggle status setter
  const changeStatus = () => {
    complete = complete !== true;
  };

  // title and description setter
  const changeText = (textToChange, newChange) => {
    if (textToChange === 'title') {
      title = newChange; } else {
      description = newChange;
    }
  };

  // due date setter
  const changeDate = (newDate) => {
    // enter formatting steps here
    dueDate = newDate;
  };

  // toggle priority
  const changePriority = () => {
    if (priority === 'low') {
      priority = 'high';
    } else {
      priority = 'low';
    }
  };

  // getter for all values
  const getValues = () => ({ complete, title, description, dueDate, priority });

  return { changeStatus, changeText, changeDate, changePriority, getValues };
};




const test = ToDoFactory();
console.log(test.getValues());
test.changeStatus();
console.log(test.getValues());
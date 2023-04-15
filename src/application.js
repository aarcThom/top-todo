// shared functions =========================================================================================
function randomId(givenId) {
  if (!givenId) {
    return Math.floor(Math.random()*Date.now()).toString(16);
  }
  return givenId;
};

// toDo object factory function =============================================================================
const ToDoFactory = (tdId, tdComplete = false, tdTitle = 'New Task', tdDescription = 'Task Description',
  tdDueDate = '12-12-12', tdPriority = 'low') => {
  
  const id = randomId(tdId);
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
  const getValues = () => ({ id, complete, title, description, dueDate, priority });

  return { changeStatus, changeText, changeDate, changePriority, getValues };
};

// projects factory function ================================================================================

const ProjectsFactory = (projectId, projectTitle = 'New Project', 
  projectDescription = 'Project Description') => {
  
  const id = randomId(projectId);
  let title = projectTitle;
  let description = projectDescription;
  const toDoList = [];

  // title and description setter
  const changeText = (textToChange, newChange) => {
    if (textToChange === 'title') {
      title = newChange; } else {
      description = newChange;
    }
  };

  // add toDos to the list
  const addTodo = () => toDoList.push(ToDoFactory());

  // getter for all values
  const getValues = () => ({ id, title, description, toDoList});

  return { changeText, getValues, addTodo};

};

const test = ProjectsFactory();
console.log(test.getValues());
test.addTodo();
console.log(test.getValues());
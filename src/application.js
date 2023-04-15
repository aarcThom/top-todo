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
  const getValues = () => ({complete, title, description, dueDate, priority });

  return { id, changeStatus, changeText, changeDate, changePriority, getValues };
};

// projects factory function ================================================================================

const ProjectsFactory = (projectId, projectTitle = 'New Project', 
  projectDescription = 'Project Description') => {
  
  const id = randomId(projectId);
  let title = projectTitle;
  let description = projectDescription;
  let toDoList = [];

  // title and description setter
  const changeText = (textToChange, newChange) => {
    if (textToChange === 'title') {
      title = newChange; } else {
      description = newChange;
    }
  };

  // add toDos to the list
  const addTodo = () => toDoList.push(ToDoFactory());

  // remove particular toDo from list
  const removeTodo = function rmvTodo(idToRemove) {
    toDoList = toDoList.filter(toDoObj => toDoObj.id === idToRemove);
  }

  // getter for all values
  const getValues = () => ({ title, description, toDoList });

  return { id, toDoList, changeText, getValues, addTodo, removeTodo};

};

const test = ProjectsFactory();
test.addTodo();
test.addTodo();
test.toDoList.forEach(toDo => console.log(toDo.id));
const toRemove = test.toDoList[0].id;
test.removeTodo(toRemove);
test.toDoList.forEach(toDo => console.log(toDo.id));
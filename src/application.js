// shared functions =========================================================================================
function randomId(givenId,idType) {
  if (!givenId) {
    return idType.concat(Math.floor(Math.random()*Date.now()).toString(16));
  }
  return givenId;
};

// toDo object factory function =============================================================================
const ToDoFactory = (tdId, tdComplete = false, tdTitle = 'New Task', tdDescription = 'Task Description',
  tdDueDate = '12-12-12', tdPriority = 'low') => {
  
  const id = randomId(tdId, 'toDo-');
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
  
  const id = randomId(projectId, 'prjct-');
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

  // add toDos to the array
  const addTodo = () => toDoList.push(ToDoFactory());

  // remove particular toDo from array
  const removeTodo = function rmvTodo(idToRemove) {
    toDoList = toDoList.filter(toDoObj => toDoObj.id === idToRemove);
  }

  // move particular toDo from one positon in the array to another
  const moveTodo = (currentPos, newPos) => {
    const itemToMove = toDoList[currentPos];
    toDoList.splice(currentPos, 1);
    toDoList.splice(newPos, 0, itemToMove);
  }
 
  // getter for all values
  const getValues = () => ({ title, description, toDoList });

  return { id, toDoList, changeText, getValues, addTodo, removeTodo, moveTodo};

};

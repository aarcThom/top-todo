// shared functions =========================================================================================
function randomId(givenId,idType) {
  if (!givenId) {
    return idType.concat(Math.floor(Math.random()*Date.now()).toString(16));
  }
  return givenId;
};

// toDo object factory function =============================================================================
const ToDoFactory = (tdProject, tdId, tdComplete = false, tdTitle = 'New Task', tdDescription = 'Task Description',
  tdDueDate = '12-12-12', tdPriority = 'low') => {
  
  let project = tdProject;
  const id = randomId(tdId, 'toDo-');
  let complete = tdComplete;
  let title = tdTitle;
  let description = tdDescription;
  let dueDate = tdDueDate;
  let priority = tdPriority;

  // project getter
  const getProject = () => project;
  // project setter
  const setProject = (newProject) => {project = newProject};

  // id getter
  const getId = () => id;

  // status getter
  const getComplete = () => complete;
  // toggle status setter
  const toggleComplete = () => {
    complete = complete !== true;
  };

  // title getter
  const getTitle = () => title;
  // title setter
  const setTitle = (newText) => {
    title = newText;
  };

  // description getter
  const getDescription = () => description;
  // description setter
  const setDescription = (newText) => {
    description = newText;
  };

  // due date getter
  const getDueDate = () => dueDate;
  // due date setter
  const setDueDate = (newDate) => {
    // enter formatting steps here
    dueDate = newDate;
  };

  // priority getter
  const getPriority = () => priority;
  // toggle priority
  const togglePriority = () => {
    if (priority === 'low') {
      priority = 'high';
    } else {
      priority = 'low';
    }
  };


  return { getProject, setProject, getId, getComplete, toggleComplete, getTitle, setTitle, getDescription, 
    setDescription, getDueDate, setDueDate, getPriority, togglePriority  };
};

// projects factory function ================================================================================

const ProjectsFactory = (projectId, projectTitle = 'New Project', 
  projectDescription = 'Project Description') => {
  
  const id = randomId(projectId, 'prjct-');
  let title = projectTitle;
  let description = projectDescription;
  // I disabled the eslint rule because toDoArr IS modified. I just needed to use this.toDoArr to set
  // a new value for toDoArr inside of the removeTodo method.
  // eslint-disable-next-line prefer-const
  let toDoArr = [];


  // title and description setter
  const changeText = (textToChange, newChange) => {
    if (textToChange === 'title') {
      title = newChange; } else {
      description = newChange;
    }
  };

  // add toDos to the array
  const addTodo = (toDo) => toDoArr.push(toDo);

  // remove particular toDo from array
  const removeTodo = function rmvTodo(idToRemove) {
    this.toDoArr = toDoArr.filter(toDoObj => toDoObj.id !== idToRemove);
  };

  // move particular toDo from one positon in the array to another
  const moveTodo = (currentPos, newPos) => {
    const itemToMove = toDoArr[currentPos];
    toDoArr.splice(currentPos, 1);
    toDoArr.splice(newPos, 0, itemToMove);
  };
 
  // getter for all values
  const getValues = () => ({ title, description, toDoArr });

  return { id, toDoArr, changeText, getValues, addTodo, removeTodo, moveTodo};

};

export { ProjectsFactory, ToDoFactory };
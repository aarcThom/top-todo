// shared functions =========================================================================================
function randomId(givenId,idType) {
  if (!givenId) {
    return idType.concat(Math.floor(Math.random()*Date.now()).toString(16));
  }
  return givenId;
};

// toDo object factory function =============================================================================
const ToDoFactory = (tdProject, tdId, tdComplete = false, tdTitle = 'New Task', 
  tdDescription = 'Task Description', tdDueDate = '12-12-12', tdPriority = 0) => {
  
  let projectId = tdProject.getId();
  const id = randomId(tdId, 'toDo-');
  let complete = tdComplete;
  let title = tdTitle;
  let description = tdDescription;
  let dueDate = tdDueDate;
  let priority = tdPriority;

  // project getter
  const getProject = () => projectId;
  // project setter
  const setProject = (newProject) => {projectId = newProject.getId()};

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
  const setPriority = (newPriority) => {
    priority = newPriority;
  };


  return { getProject, setProject, getId, getComplete, toggleComplete, getTitle, setTitle, getDescription, 
    setDescription, getDueDate, setDueDate, getPriority, setPriority  };
};

// projects factory function ================================================================================

const ProjectsFactory = (projectId, projectTitle = 'New Project', 
  projectDescription = 'Project Description') => {
  
  const id = randomId(projectId, 'prjct-');
  let title = projectTitle;
  let description = projectDescription;

  // id getter
  const getId = () => id;

  // title getter
  const getTitle = () => title;
  // title setter
  const setTitle = (newTitle) => {
    title = newTitle;
  };

  // description getter 
  const getDescription = () => description;
  // description setter
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  return { getId, getTitle, setTitle, getDescription, setDescription };

};

// the canvas module =========================================================================================
const toDoList =(() => {

  let groupByProject = true;

  // sort modes
  // 0 - none
  // 1 - due date
  // 2 - priority
  // 3 - alphabetically
  let sortMode = 0;

  const getSortMode = () => sortMode;
  const setSortMode = (newMode) => {
    sortMode = newMode;
  };
  
  const projectArr = [];
  const toDoArr = [];

  const addProject = () => {
    const newProj = ProjectsFactory();
    projectArr.push(newProj);
    return newProj;
  };

  const addToDo = (hostProject) => {
    const newToDo = ToDoFactory(hostProject);
    toDoArr.push(newToDo);
    return newToDo;
  };

  const sortToDos = () => {
    if (sortMode !== 0) {
      const sortAlgo = {

        // sort mode 1 is by due date - current strings
        1: () => { 
          toDoArr.sort((a, b) => {
            if (a.getDueDate() > b.getDueDate()) {
              return 1;
            }
            return -1;
          })
        },

        // sort mode 2 is by priority - currently num
        2: () => {
          toDoArr.sort((a, b) => a.getPriority() - b.getPriority())
        },

        // sort mode 3 is by title - strings
        3: () => { 
          toDoArr.sort((a, b) => {
            if (a.getTitle() > b.getTitle()) {
              return 1;
            }
            return -1;
          })
        },
      };
      sortAlgo[sortMode]();
    };
  };

  const getList = () => {
    if (groupByProject) 
    {
      console.log('hello');
    } else 
    {
      console.log('hello');
    }
  };



  return { groupByProject, getSortMode, setSortMode, addProject, addToDo, getList, projectArr, toDoArr, sortToDos }
})();

export { toDoList };
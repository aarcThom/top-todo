// shared functions =========================================================================================
function randomId(givenId,idType) {
  if (!givenId) {
    return idType.concat(Math.floor(Math.random()*Date.now()).toString(16));
  }
  return givenId;
};

// toDo object factory function =============================================================================
const ToDoFactory = (tdProjectId, tdId, tdComplete = false, tdTitle = 'New Task', 
  tdDescription = 'Task Description', tdDueDate = '12-12-12', tdPriority = 0) => {
  
  let projectId = tdProjectId;
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

// the main toDoList module =========================================================================================
const toDoList =(() => {

  let sortMode = 0;
  let groupByProject = true;
  let projectArr = [];
  let toDoArr = [];

  const setSortMode = (newMode) => {
    if ( newMode === 0 // no sort
      || newMode === 1 // sort by due date 
      || newMode === 2 // sort by priority 
      || newMode === 3 // sort alphabetically
    ) {
      sortMode = newMode;
    }
  };

  const toggleGroupByProject = () => {
    groupByProject = groupByProject !== true;
  };

  const getGroupByProject = () => groupByProject;

  const addToDo = (hostProject) => {
    const newToDo = ToDoFactory(hostProject);
    toDoArr.push(newToDo);
    return newToDo;
  };

  /* THIS HAS NOT BEEN TESTED
  const removeToDo = (toDoId) => {
    const ix = toDoArr.indexOf(toDoArr.filter(x => x.getId() === toDoId)); // get index of id-having object
    toDoArr.splice(ix, 1);
  };
  */

  const getToDos = () => toDoArr;

  const addProject = () => {
    const newProj = ProjectsFactory();
    projectArr.push(newProj);
    return newProj;
  };

  const removeProject = (projectId) => {
    projectArr = projectArr.filter(prj => prj.getId() !== projectId);
    toDoArr = toDoArr.filter(toDo => toDo.getProject() !== projectId);
  };

  const getProjects = () => projectArr;



  // this method is interesting. I created an object whose values are functions. I then can call
  // the function I need based on the key which is the sortMode in this instance. It's almost like
  // a more refined Switch statement.
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



  return { setSortMode, toggleGroupByProject, getGroupByProject, addProject, removeProject, getProjects, 
    addToDo, getToDos, sortToDos }
})();

// eslint-disable-next-line import/prefer-default-export
export { toDoList };
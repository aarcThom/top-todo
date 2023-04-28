import './style.css';

// the page layout elements ================================
const canvas = document.querySelector('#canvas');

// dom elements ===========================

function toDoDom (hostProj,tdName, tdId) {
  const newToDo = document.createElement('div');
  newToDo.className = 'todo-collapsed';
  newToDo.id = tdId;
  newToDo.textContent = tdName;

  const host = document.querySelector(`#${hostProj}`);
  host.appendChild(newToDo);
};

function projectDom (proj, projName, projDesc, projId, addTDLogic) {
  const newProj = document.createElement('div');
  newProj.className = 'project-collapsed';
  newProj.id = projId;
  
  const projHeader = document.createElement('div');
  projHeader.className = 'project-header';
  projHeader.textContent = projName;
  newProj.appendChild(projHeader);

  const projDescription = document.createElement('div');
  projDescription.className = 'project-description';
  projDescription.textContent = projDesc;
  newProj.appendChild(projDescription);

  // if we are organizing by project
  if (proj) {
    const addToDoBox = document.createElement('div');
    addToDoBox.className = 'project-add-todo';

    const addToDoBut = document.createElement('button');
    addToDoBut.textContent = 'Add a new task';
    addToDoBut.className = 'project-add-todo-button';

    addToDoBut.addEventListener('click', () => {
      // I pass in a function from the index.js file in order to reference the main page object
      const newTD = addTDLogic(proj);
      toDoDom(projId, newTD.getTitle(), newTD.getId());
    });

    addToDoBox.appendChild(addToDoBut);
    newProj.appendChild(addToDoBox);
  };

  return newProj;
};

// rendering the projects ================================================================================
function renderProjects (groupByProj, projects, toDos, tdLogicFunc) {
  if (groupByProj) {
    projects.forEach( prj => {
      const newP = projectDom(prj, prj.getId(), prj.getDescription(), prj.getId(), tdLogicFunc);
      canvas.appendChild(newP);
    });
  
    toDos.forEach( td => {
      toDoDom(td.getProject(), td.getTitle(), td.getId());
    });
  }
  else {
    const newP = projectDom(false, 'null', 'all projects', 'null', tdLogicFunc );
    canvas.appendChild(newP);

    toDos.forEach( td => {
      toDoDom('null', td.getTitle(), td.getId());
    });
  }
  
};









// eslint-disable-next-line import/prefer-default-export
export { renderProjects };

import './style.css';

// dom elements ===========================

function toDoDom (tdName, tdId) {
  const newToDo = document.createElement('div');
  newToDo.className = 'todo';
  newToDo.id = tdId;
  newToDo.textContent = tdName;

  return newToDo;
};

function projectDom (projName, projDesc, projId, addToDoFunc, pckry) {
  const newProj = document.createElement('div');
  newProj.className = 'project';
  newProj.id = projId;
  
  const projHeader = document.createElement('div');
  projHeader.className = 'project-header';
  projHeader.textContent = projName;
  newProj.appendChild(projHeader);

  const projDescription = document.createElement('div');
  projDescription.className = 'project-description';
  projDescription.textContent = projDesc;
  newProj.appendChild(projDescription);

  const toDoHolder = document.createElement('div');
  toDoHolder.className = 'todo-holder';

  const projButtonBar = document.createElement('div');
  projButtonBar.className = 'project-button-bar';

  const addToDoButton = document.createElement('button');
  addToDoButton.className = 'project-buttons';
  addToDoButton.textContent = 'Add Item';
  projButtonBar.appendChild(addToDoButton);

  newProj.appendChild(projButtonBar);

  // adding callback function for the add project button click
  addToDoButton.addEventListener('click', () => {
    // add the todo to the todo logic list
    const newToDo = addToDoFunc(projId);

    // add toDo to DOM
    const newToDoDom = toDoDom(newToDo.getTitle(), newToDo.getId());

    // append to toDoHolder
    toDoHolder.appendChild(newToDoDom);

    // relaying out the packery layout
    pckry.layout();

  });

  newProj.appendChild(toDoHolder);


  return newProj;
};


export { projectDom, toDoDom };

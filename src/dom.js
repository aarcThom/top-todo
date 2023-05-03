import './style.css';

// dom elements ===========================

function toDoDom (td) {
  const newToDo = document.createElement('div');
  newToDo.className = 'todo';
  newToDo.id = td.getId();

  const titleBox = document.createElement('div');
  titleBox.className = 'todo-title-box';
  titleBox.textContent = td.getTitle();
  newToDo.appendChild(titleBox);

  const buttonBox = document.createElement('div');
  buttonBox.className = 'todo-button-box-min';

  const markCompleteBut = document.createElement('button');
  markCompleteBut.className = 'todo-buttons';
  markCompleteBut.id = 'mark-complete-but';
  markCompleteBut.textContent = 'mark complete';
  buttonBox.appendChild(markCompleteBut);

  const deleteToDoBut = document.createElement('button');
  deleteToDoBut.className = 'todo-buttons';
  deleteToDoBut.id = 'delete-todo-but';
  deleteToDoBut.textContent = 'delete task';
  buttonBox.appendChild(deleteToDoBut);


  const expandBut = document.createElement('button');
  expandBut.className = 'todo-buttons';
  expandBut.id = 'expand-todo-but';
  expandBut.textContent = 'expand';
  buttonBox.appendChild(expandBut);

  const dueDateBut = document.createElement('button');
  dueDateBut.className = 'todo-interactive-buttons';
  dueDateBut.id = 'duedate-todo-but';
  dueDateBut.textContent = `Due-date: ${td.getDueDate()}`
  buttonBox.appendChild(dueDateBut);

  const priorityBut = document.createElement('button');
  priorityBut.className = 'todo-interactive-buttons';
  priorityBut.id = 'priority-todo-but';
  priorityBut.textContent =  `Priority: ${td.getPriority()}`
  buttonBox.appendChild(priorityBut);





  newToDo.appendChild(buttonBox);

  const descriptionBox = document.createElement('div');
  descriptionBox.className = 'todo-description-box';
  newToDo.appendChild(descriptionBox);

  return newToDo;
};

function projectDom (projName, projDesc, projId, addToDoFunc, pckry, removePrjFnc) {
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

  const deleteProjButton = document.createElement('button');
  deleteProjButton.className = 'project-buttons';
  deleteProjButton.textContent = 'Delete This Project';
  projButtonBar.appendChild(deleteProjButton);

  newProj.appendChild(projButtonBar);

  // adding callback function for the add toDo button click
  addToDoButton.addEventListener('click', () => {
    // add the todo to the todo logic list
    const newToDo = addToDoFunc(projId);

    // add toDo to DOM
    const newToDoDom = toDoDom(newToDo);

    // append to toDoHolder
    toDoHolder.appendChild(newToDoDom);

    // relaying out the packery layout
    pckry.layout();

  });

  // adding callback function for remove project button
  deleteProjButton.addEventListener('click', () => {
    removePrjFnc(projId); // remove this project and associated todos from the object list
    newProj.remove(); // remove form dom
    pckry.layout();

  })

  newProj.appendChild(toDoHolder);


  return newProj;
};


export { projectDom, toDoDom };

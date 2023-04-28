import './style.css';

// dom elements ===========================

function toDoDom (hostProj,tdName, tdId) {
  const newToDo = document.createElement('div');
  newToDo.className = 'todo';
  newToDo.id = tdId;
  newToDo.textContent = tdName;

  const host = document.querySelector(`#${hostProj}`);
  host.appendChild(newToDo);
};

function projectDom (projName, projDesc, projId) {
  const newProj = document.createElement('div');
  newProj.className = 'project h-150';
  newProj.id = projId;
  
  const projHeader = document.createElement('div');
  projHeader.className = 'project-header';
  projHeader.textContent = projName;
  newProj.appendChild(projHeader);

  const projDescription = document.createElement('div');
  projDescription.className = 'project-description';
  projDescription.textContent = projDesc;
  newProj.appendChild(projDescription);

  return newProj;
};


export { projectDom, toDoDom };

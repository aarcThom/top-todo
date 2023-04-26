import './style.css';

// the page layout elements ================================
const canvas = document.querySelector('#canvas');

// dom elements ===========================
function projectDomFactory (projName, projDesc) {
  const newProj = document.createElement('div');
  newProj.className = 'project-collapsed';

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
 

// rendering the projects ================================================================================
function renderProjects (groupByProj, projects, toDos) {
  canvas.innerHTML=''; // clear the canvas

  projects.forEach( prj => {
    const newP = projectDomFactory(prj.getId(), prj.getDescription());
    canvas.appendChild(newP);
  });
};









// eslint-disable-next-line import/prefer-default-export
export { renderProjects };

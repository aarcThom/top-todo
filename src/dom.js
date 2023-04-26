import './style.css';

// the page layout elements ================================
const canvas = document.querySelector('#canvas');

// dom elements ===========================
function projectDomFactory () {
  const newProj = document.createElement('div');
  newProj.className = 'project';
  newProj.innerHTML = 'NEW PROJECT';
  return newProj;
};
 

// rendering the projects ================================================================================
function renderProjects (groupByProj, projects, toDos) {
  canvas.innerHTML=''; // clear the canvas

  projects.forEach( _ => {
    const newP = projectDomFactory();
    canvas.appendChild(newP);
  });
};









// eslint-disable-next-line import/prefer-default-export
export { renderProjects };

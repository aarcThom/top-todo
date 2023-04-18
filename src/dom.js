// project factory function ==================================================================================
const ProjFactDom = (project) => {
  // inheriting properties from the logic side project object
  const {title, description, toDoArr} = project.getValues();
  const {id} = project;

  const barRender = document.createElement("div");
  barRender.className = 'sidebar-project';
  barRender.innerHTML = `<div class = 'sidebar-title'>${title}</div>`;

  return { title, description, toDoArr, id, barRender }

};

export { ProjFactDom };

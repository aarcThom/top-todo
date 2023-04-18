import './style.css';

import { ProjectsFactory, ToDoFactory } from "./application";
import { ProjFactDom } from './dom';


// the page layout elements
const sideBar = document.querySelector('#side-bar');
const canvas = document.querySelector('#canvas');

// the mediator module
const page =(() => {

  const addProject = () => {
    const newProj = ProjectsFactory();
    const newDomProj = ProjFactDom(newProj);
    sideBar.appendChild(newDomProj.barRender);
  };

  return { addProject }
})();


// the add project button
const addProjBut = document.querySelector('#add-project-but');
addProjBut.addEventListener('click', () => {
  page.addProject();
})



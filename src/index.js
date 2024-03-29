import './style.css';
import Packery from 'packery';
import Draggabilly from 'draggabilly';
import { toDoList } from "./application";
import { projectDom } from './dom';


// the packery initializing
const pckry = new Packery( '#canvas', {
  itemSelector: '.project',
  gutter: 20,
});

// initial Draggabilly binding
pckry.getItemElements().forEach(element => {
  const draggie = new Draggabilly(element, {
    handle: '.project-handle'
  });
  pckry.bindDraggabillyEvents(draggie);
});


// the toDo list data
const page = toDoList;

// the page layout elements
const canvas = document.querySelector('#canvas');

// the add project button
const addProjBut = document.querySelector('#add-project-but');
addProjBut.addEventListener('click', () => {

  const newProj = page.addProject(); // add project to logicList
  const newProjDom = projectDom(newProj, page.addToDo, pckry, page.removeProject, page.removeToDo); // add to DOM
    
  canvas.appendChild(newProjDom); // add as child node of canvas
  
  // append the item to the packery instance
  pckry.appended( newProjDom );

  // bind the dragabilly event to packery
  const newDrag = new Draggabilly(newProjDom, {
    handle: '.project-handle'
  });
  pckry.bindDraggabillyEvents(newDrag);

})

// the group mode button
const groupModeBut = document.querySelector('#group-mode-but');
groupModeBut.addEventListener('click', () => {
  page.getProjects().forEach(prj => console.log(prj.getTitle()));
})




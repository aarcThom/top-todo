import './style.css';
import Packery from 'packery';
import Draggabilly from 'draggabilly';
import { toDoList } from "./application";
import { renderProjects } from './dom';


// the packery initializing
const pckry = new Packery( '#canvas', {
  itemSelector: '.project-collapsed',
  gutter: 20,
});

// initial Draggabilly binding
pckry.getItemElements().forEach(element => {
  const draggie = new Draggabilly(element);
  pckry.bindDraggabillyEvents(draggie);
});


// the toDo list data
const page = toDoList;
const pgProjects = page.getProjects();
const pgToDos = page.getToDos();
let groupMode = page.getGroupByProject();

// the page layout elements
const canvas = document.querySelector('#canvas');

// the add toDo button that I pass through to the dom
function newToDo (hostPrj) {
  return page.addToDo(hostPrj);
};

// the add project button
const addProjBut = document.querySelector('#add-project-but');
addProjBut.addEventListener('click', () => {

  // you can't clear the DOM, just add 1 new item
  const newObj = document.createElement('div');
  newObj.className = 'project-collapsed';
  canvas.appendChild(newObj);
  
  // append the item to the packery instance
  pckry.appended( newObj );

  // bind the dragabilly event to packery
  const newDrag = new Draggabilly(newObj);
  pckry.bindDraggabillyEvents(newDrag);
})

// the group mode button
const groupModeBut = document.querySelector('#group-mode-but');
groupModeBut.addEventListener('click', () => {
  page.toggleGroupByProject();
  groupMode = page.getGroupByProject();
  renderProjects(groupMode, pgProjects, pgToDos, newToDo);
})




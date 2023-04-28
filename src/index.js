import './style.css';
import Packery from 'packery';
import { toDoList } from "./application";
import { renderProjects } from './dom';
import { doc } from 'prettier';


// the packery libary
const pckry = new Packery( '#canvas', {
  itemSelector: '.project-collapsed',
  gutter: 20,
  percentPosition: true,
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
  const newObj = document.createElement('div');
  newObj.className = 'project-collapsed';
  canvas.appendChild(newObj);
  pckry.appended( newObj );
})

// the group mode button
const groupModeBut = document.querySelector('#group-mode-but');
groupModeBut.addEventListener('click', () => {
  page.toggleGroupByProject();
  groupMode = page.getGroupByProject();
  renderProjects(groupMode, pgProjects, pgToDos, newToDo);
})




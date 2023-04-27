import './style.css';
import { toDoList } from "./application";
import { renderProjects } from './dom';

const Packery = require('packery');

// the packery libary
const packeryCanvas = document.querySelector('#canvas');
const pckry = new Packery( packeryCanvas, {
  itemSelector: '.project-collapsed',
  gutter: 20
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
  page.addProject();
  console.log(page.getProjects());
  renderProjects(groupMode, pgProjects, pgToDos, newToDo);
})

// the group mode button
const groupModeBut = document.querySelector('#group-mode-but');
groupModeBut.addEventListener('click', () => {
  page.toggleGroupByProject();
  groupMode = page.getGroupByProject();
  renderProjects(groupMode, pgProjects, pgToDos, newToDo);
})




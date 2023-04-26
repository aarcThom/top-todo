import './style.css';
import { toDoList } from "./application";
import { renderProjects } from './dom';


// the toDo list data
const page = toDoList;
const pgProjects = page.getProjects();
const pgToDos = page.getToDos();
const groupMode = page.getGroupByProject();

// the page layout elements
const canvas = document.querySelector('#canvas');
canvas.innerHTML = 'hellllllllllllllllllllllo';


page.addProject();
page.addProject();
page.addProject();


const newToDo1 = page.addToDo(pgProjects[0]);
newToDo1.setTitle('banana');
newToDo1.setDueDate('01-02-03');
newToDo1.setPriority(9);
const newToDo2 = page.addToDo(pgProjects[0]);
newToDo2.setDueDate('99-02-03');
newToDo2.setPriority(1);
newToDo2.setTitle('apple');
const newToDo3 = page.addToDo(pgProjects[0]);
newToDo3.setDueDate('99-99-99');
newToDo3.setPriority(2);
newToDo3.setTitle('tomato');
const newToDo4 = page.addToDo(pgProjects[0]);
newToDo4.setDueDate('07-02-03');
newToDo4.setPriority(6);
newToDo4.setTitle('watermelon');



page.setSortMode(3);

page.sortToDos();

pgToDos.forEach(obj => console.log(obj.getTitle()));


// the add project button
const addProjBut = document.querySelector('#add-project-but');
addProjBut.addEventListener('click', () => {
  page.addProject();
  console.log(page.getProjects());
  renderProjects(groupMode, pgProjects, pgToDos);
})



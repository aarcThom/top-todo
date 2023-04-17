import './style.css';

import { canvasModule } from "./application";

const canvas = canvasModule;

canvas.addProject();

canvas.projectArr.forEach(obj => obj.addTodo());
canvas.projectArr.forEach(obj => console.log(obj.getValues()));
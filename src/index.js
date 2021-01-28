// Need to import date FNS

class ToDo {
  constructor(title, description, dueDate, priority) {
    (this.title = title),
    (this.description = description),
    (this.dueDate = dueDate),
    (this.priority = priority),
    (this.completion = false);
  }

  set updateTitle(title) {
    this.title = title;
  }

  set updateDescription(description) {
    this.description = description;
  }

  set updateDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  set updatePriority(priority) {
    this.priority = priority;
  }
}

// import { createTodo } from './createTodo';
// import {updateProjects} from './addProjects';

// DOM elements

// Navbar
const hamburger = document.querySelector('#hamburger');
const plusSign = document.querySelector('#plussign');
// Sidebar
const sidebar = document.querySelector('.sidebar');
const projectName = document.querySelector('#projectname');
const addProject = document.querySelector('#addproject');
const projectForm = document.querySelector('#projectform');
const chooseProjects = document.querySelector('#projects');
const selectPriority = document.querySelector('#select-priority');
const allToDo = document.querySelector('#alltodo');
// Add ToDo Modal
const addTodo = document.querySelector('#addtodo');
const toDoTitle = document.querySelector('#todotitle');
const toDoDescription = document.querySelector('#tododescription');
const toDoDate = document.querySelector('#tododate');
const toDoPriority = document.querySelector('#todopriority');
const toDoForm = document.querySelector('#todoform');
const closeForm = document.querySelector('#closeform');
const projectChoice = document.querySelector('#projectchoice');
// To Do Container
const lists = document.querySelector('#lists');

// Array for all projects

// let myProjects = [["Default", []]];

// Old array before local storage was implemented

// Local storage implementation

let loadAllProjects = true;
let loadCurrentProject = false;
let loadProjectPriority = false;

if (!localStorage.getItem('savedProjects')) {
  const savedProjects = JSON.stringify([['Default', []]]);

  localStorage.setItem('savedProjects', savedProjects);
}

const myProjects = JSON.parse(localStorage.savedProjects);

const localSave = () => {
  localStorage.setItem('savedProjects', JSON.stringify(myProjects));
};

// Updates the list of Project containers for todo items

const updateProjects = () => {
  projectChoice.textContent = '';
  chooseProjects.textContent = '';
  for (let i = 0; i < myProjects.length; i++) {
    const project = document.createElement('option');
    project.setAttribute('value', i);
    project.textContent = `${myProjects[i][0]}`;
    projectChoice.append(project);
  }
  for (let i = 0; i < myProjects.length; i++) {
    const project = document.createElement('option');
    project.setAttribute('value', i);
    project.textContent = `${myProjects[i][0]}`;
    chooseProjects.append(project);
  }
};

updateProjects();

// Function creates individual todo items

const createTodo = (projectIndex, arrayIndex) => {
  const todo = document.createElement('div');
  todo.setAttribute('class', 'tododiv');

  todo.innerHTML = `<h3 class="todo-title" data-index="${arrayIndex}">${myProjects[projectIndex][1][arrayIndex].title}</h3>
  <p class="todo-description" data-index="${arrayIndex}">${myProjects[projectIndex][1][arrayIndex].description}</p>
  <p class="todo-duedate" data-input="update" index="${arrayIndex}">${myProjects[projectIndex][1][arrayIndex].dueDate}</p>
  <p class="todo-priority" data-index="${arrayIndex}">Priority: ${myProjects[projectIndex][1][arrayIndex].priority}</p>
  <button data-input="delete" data-project=${projectIndex} data-index="${arrayIndex}">Delete</button> 
  <br>
  <button data-input="edit" data-project=${projectIndex} data-index="${arrayIndex}">Edit</button>
  <input data-project=${projectIndex} type="text" class="updatetitle" placeholder="Update title" data-index="${arrayIndex}">
  <input data-project=${projectIndex}  type="text" class="updatedescription" placeholder="Update Description" data-index="${arrayIndex}">
  <input data-project=${projectIndex} type="date" class="updateduedate" data-index="${arrayIndex}">
  <select data-project=${projectIndex}  class="updatepriority" data-index="${arrayIndex}">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
  </select>

  <button data-input="submit" data-project=${projectIndex} data-index="${arrayIndex}">submit</button>`;
  lists.appendChild(todo);
};

// Updates the ToDo container with ToDos from selected projects

const loadAllToDos = () => {
  lists.innerHTML = '';

  for (let i = 0; i < myProjects.length; i++) {
    for (let j = 0; j < myProjects[i][1].length; j++) {
      createTodo(i, j);
    }
  }
}

loadAllToDos();

const updateTodoList = () => {
  const projectIndex = chooseProjects.value;

  lists.innerHTML = '';

  for (let i = 0; i < myProjects[projectIndex][1].length; i++) {
    createTodo(projectIndex, i);
  }
};

const updateByPriority = () => {
  const projectPriority = selectPriority.value;
  lists.innerHTML = '';

  for (let i = 0; i < myProjects.length; i++) {
    for (let j = 0; myProjects[i][1].length; j++) {
      if(myProjects[i][1][j].priority === projectPriority) {
        createTodo(i, j);
      }
    }
  }
}


const pageLoader = () => {
  if(loadAllProjects === true){
    loadAllToDos();
  } else if(loadCurrentProject === true){
    updateTodoList();
  } else if(loadProjectPriority === true){
    updateByPriority();
  }
}

addTodo.addEventListener('click', (e) => {
  e.preventDefault();
  const projectIndex = projectChoice.value;
  const newtodo = new ToDo(
    toDoTitle.value,
    toDoDescription.value,
    toDoDate.value,
    toDoPriority.value,
  );

  myProjects[projectIndex][1].push(newtodo);
  toDoForm.reset();
  pageLoader();
  document.querySelector('.modal').classList.toggle('modal-active');
  localSave();
});

addProject.addEventListener('click', (e) => {
  e.preventDefault();
  myProjects.push([projectName.value, []]);
  projectForm.reset();
  updateProjects();
  localSave();
});

chooseProjects.addEventListener('change', () => {
  loadAllProjects = false;
  loadCurrentProject = true;
  loadProjectPriority = true;
  pageLoader();
});

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-hidden');
  lists.classList.toggle('todomargin');
  lists.classList.toggle('todo-adjust');
});

plusSign.addEventListener('click', () => {
  document.querySelector('.modal').classList.toggle('modal-active');
});

closeForm.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.modal').classList.toggle('modal-active');
});

// delete and edit todo items

lists.addEventListener('click', (e) => {
  const projectIndex = e.target.dataset.project;
  const todoIndex = e.target.dataset.index;
  const todoParent = e.target.parentElement;

  if (e.target.dataset.input === 'delete') {
    myProjects[projectIndex][1].splice(todoIndex, 1);
    pageLoader();
    localSave();
  } else if (e.target.dataset.input === 'submit') {
    myProjects[projectIndex][1][
      todoIndex
    ].updateTitle = todoParent.querySelector('.updatetitle').value;
    myProjects[projectIndex][1][
      todoIndex
    ].updateDescription = todoParent.querySelector('.updatedescription').value;
    myProjects[projectIndex][1][
      todoIndex
    ].updateDueDate = todoParent.querySelector('.updateduedate').value;
    myProjects[projectIndex][1][
      todoIndex
    ].updatePriority = todoParent.querySelector('.updatepriority').value;
    pageLoader();
    localSave();
  }
});


allToDo.addEventListener('click', () => {
  loadAllProjects = true;
  loadCurrentProject = false;
  loadProjectPriority = false;
  pageLoader();
});

selectPriority.addEventListener('change', () => {
  loadAllProjects = false;
  loadCurrentProject = false;
  loadProjectPriority = true;
  pageLoader();
});

// Need to import date FNS
 import { format, compareAsc } from 'date-fns'

class ToDo {
  constructor(title, description, dueDate, priority) {
    (this.title = title),
    (this.description = description),
//    (this.dueDate = dueDate),
    (this.dueDate = format(new Date(dueDate), 'Do MMM yy')),
    (this.priority = priority),
    (this.completion = false);
  }

  set updateDate(dueDate){
    this.dueDate = format(new Date(dueDate), 'Do MMM yy');
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
const sidebarProject = document.querySelector("#loadproject")
const allToDo = document.querySelector('#alltodo');
const todaySidebar = document.querySelector("#todaystodo")
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
const todoContainer = document.querySelector(".todocontainer");
const lists = document.querySelector('#lists');
const todoHeader = document.querySelector("#todoheader");
// Array for all projects

// let myProjects = [["Default", []]];

// Old array before local storage was implemented

// Local storage implementation

if (!localStorage.getItem('savedProjects')) {
  const savedProjects = JSON.stringify([['Default', []]]);

  localStorage.setItem('savedProjects', savedProjects);
}

const myProjects = JSON.parse(localStorage.savedProjects);

const localSave = () => {
  localStorage.setItem('savedProjects', JSON.stringify(myProjects));
};

// Updates the list of Project containers for todo items on both sidebar and modal

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
    project.setAttribute("class", "sidebar-project-choice");
    project.innerHTML = `${myProjects[i][0]} <p data-project="${i}"`;
    chooseProjects.append(project);
  }
};

updateProjects();

// Function creates individual todo items

const createTodo = (projectIndex, arrayIndex) => {
  const todo = document.createElement('div');
  todo.setAttribute('class', 'tododiv');

  todo.innerHTML = `<h3 class="todo-title" data-index="${arrayIndex}">${myProjects[projectIndex][1][arrayIndex].title}</h3>
  <br><hr><br>
  <p class="todo-description" data-index="${arrayIndex}"><span class="bold">Description: </span>${myProjects[projectIndex][1][arrayIndex].description}</p>
  <p class="todo-duedate" data-input="update" index="${arrayIndex}"><span class="bold">Due: </span>${myProjects[projectIndex][1][arrayIndex].dueDate}</p>
  <p class="todo-priority" data-index="${arrayIndex}"><span class="bold">Priority: </span> ${myProjects[projectIndex][1][arrayIndex].priority}</p>
  <button data-input="delete" data-project=${projectIndex} data-index="${arrayIndex}">Delete</button> 
  <br>
  <button data-input="edit" data-project=${projectIndex} data-index="${arrayIndex}">Edit</button>
  <input data-project=${projectIndex} type="text" class="updatetitle" placeholder="Update title" data-index="${arrayIndex}">
  <input data-project=${projectIndex}  type="text" class="updatedescription" placeholder="Update Description" data-index="${arrayIndex}">
  <input data-project=${projectIndex} type="date" class="updateduedate" data-index="${arrayIndex}">
  <select data-project=${projectIndex}  class="updatepriority" data-index="${arrayIndex}">
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
  </select>

  <button data-input="submit" data-project=${projectIndex} data-index="${arrayIndex}">submit</button>`;
  lists.appendChild(todo);
};

// Updates the ToDo container with ToDos from all projects

const loadAllToDos = () => {
  lists.innerHTML = '';

  for (let i = 0; i < myProjects.length; i++) {
    for (let j = 0; j < myProjects[i][1].length; j++) {
      createTodo(i, j);
    }
  }
}

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
    for (let j = 0; j < myProjects[i][1].length; j++) {
      if(myProjects[i][1][j].priority === projectPriority) {
        createTodo(i, j);
      }
    }
  }
}

const updateToday = () => {
  lists.innerHTML = '';

  for (let i = 0; i < myProjects.length; i++) {
    for (let j = 0; j < myProjects[i][1].length; j++) {
      if(myProjects[i][1][j].dueDate === format(new Date(), 'Do MMM yy')) {
        createTodo(i, j);
      }
    }
  }
}

const allProjectHeader = () => {
  todoHeader.textContent = "All things todo..."
}

const currentProjectHeader = () => {
  let index = chooseProjects.value;
  todoHeader.innerHTML = `${myProjects[index][0]} <i data-project=${index} 
  data-input="delete"class="material-icons">delete_forever</i>`;
}

/*const currentPriorityHeader = () => {
  console.log("GameSTOONKS");
} */

let loadAllProjects = true;
let loadCurrentProject = false;
let loadProjectPriority = false;
let loadProjectDate = false;


const pageLoader = () => {
  if(loadAllProjects === true){
    loadAllToDos();
    allProjectHeader();
  } else if(loadCurrentProject === true){
    updateTodoList();
    currentProjectHeader();
  } else if(loadProjectPriority === true){
    updateByPriority();
 //   currentPriorityHeader();
  } else if(loadProjectDate === true){
    updateToday()
  }
}

pageLoader();

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
  loadProjectDate = false;
  pageLoader();
});

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-hidden');
  todoContainer.classList.toggle('todomargin');
  todoContainer.classList.toggle('todo-adjust');
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
    myProjects[projectIndex][1][todoIndex].title = todoParent.querySelector('.updatetitle').value;
    myProjects[projectIndex][1][todoIndex].description = todoParent.querySelector('.updatedescription').value;
    myProjects[projectIndex][1][todoIndex].updateDate = todoParent.querySelector('.updateduedate').value;
    myProjects[projectIndex][1][todoIndex].priority = todoParent.querySelector('.updatepriority').value;
    pageLoader()
    localSave();
  }
});

// loads up all todo items in all projects

allToDo.addEventListener('click', () => {
  loadAllProjects = true;
  loadCurrentProject = false;
  loadProjectPriority = false;
  loadProjectDate = false;
  pageLoader();
});

// allows user to sort through todo items by priority

selectPriority.addEventListener('change', () => {
  loadAllProjects = false;
  loadCurrentProject = false;
  loadProjectPriority = true;
  loadProjectDate = false;
  pageLoader();
});

// deletes projects and takes user to the all projects screen

todoHeader.addEventListener("click", (e) => {
  if(e.target.dataset.input === "delete"){
    if(e.target.dataset.project === "0"){
      alert("Cannot delete default project")
   } else {
      myProjects.splice(e.target.dataset.project, 1)
      localSave();
      updateProjects();
      loadAllProjects = true;
      loadCurrentProject = false;
      loadProjectPriority = false;
      loadProjectDate = false;
      pageLoader();

    }
  }
})

todaySidebar.addEventListener("click", () => {
      loadAllProjects = false;
      loadCurrentProject = false;
      loadProjectPriority = false;
      loadProjectDate = true;
      pageLoader();
});
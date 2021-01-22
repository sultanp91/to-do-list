//import {ToDo} from './toDoClass';
//import {updateProjects} from './addProjects';

class ToDo {
    constructor(title, description, dueDate, priority){
        this.title = title,
        this.description =  description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.completion = false;
    }

set updateTitle(title){
        this.title = title;     
}

set updateDescription(description){
        this.description = description;
}

set updateDueDate(dueDate){
        this.dueDate = dueDate;
}

set updatePriority(priority){
        this.priority = priority;
}

}

const hamburger = document.querySelector("#hamburger");
const sidebar = document.querySelector(".sidebar");
const addTodo = document.querySelector("#addtodo");
const toDoTitle = document.querySelector("#todotitle");
const toDoDescription = document.querySelector("#tododescription")
const toDoDate = document.querySelector("#tododate")
const toDoPriority = document.querySelector("#todopriority")
const toDoForm =  document.querySelector("#todoform")

const projectName = document.querySelector("#projectname")
const addProject = document.querySelector("#addproject");
const projectForm = document.querySelector("#projectform")

const projectChoice = document.querySelector("#projectchoice");
const chooseProjects = document.querySelector("#projects")

const lists = document.querySelector("#lists");

let myProjects = [["Default", []]];

const updateProjects = () => {
    projectChoice.textContent = "";
    chooseProjects.textContent = "";
    for(let i = 0; i < myProjects.length; i++){
        let project = document.createElement("option");
        project.setAttribute("value", i);
        project.textContent = `${myProjects[i][0]}`;
        projectChoice.append(project);
    }
    for(let i = 0; i < myProjects.length; i++){
        let project = document.createElement("option");
        project.setAttribute("value", i);
        project.textContent = `${myProjects[i][0]}`;
        chooseProjects.append(project);
    }

}

const updateTodoList = () => {

    let projectIndex = chooseProjects.value
    lists.textContent = ""
    for(let i = 0; i < myProjects[projectIndex][1].length; i++){
        let todo = document.createElement("tr");
        todo.innerHTML = 
        `<td data-index="${i}">${myProjects[projectIndex][1][i].title}</td>
        <td data-index="${i}">${myProjects[projectIndex][1][i].description}</td>
        <td data-index="${i}">${myProjects[projectIndex][1][i].dueDate}</td>
        <td data-index="${i}">${myProjects[projectIndex][1][i].priority}</td>
        <td data-index="${i}">${myProjects[projectIndex][1][i].completion}</td>
        `
        lists.append(todo);
    }
}

addTodo.addEventListener("click", (e) => {

    e.preventDefault();
    let projectIndex = projectChoice.value;
    let newtodo = new ToDo(toDoTitle.value, toDoDescription.value, toDoDate.value, toDoPriority.value);

    myProjects[projectIndex][1].push(newtodo);
    toDoForm.reset();
    console.log(myProjects);
    updateTodoList();
})


addProject.addEventListener("click", (e) => {
    e.preventDefault();
    myProjects.push([projectName.value, []]);
    projectForm.reset();
    console.log(myProjects);
    updateProjects();
})

chooseProjects.addEventListener("change", updateTodoList);

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-hidden");
})
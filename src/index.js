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

//DOM elements

const hamburger = document.querySelector("#hamburger");
const sidebar = document.querySelector(".sidebar");
const plusSign = document.querySelector("#plussign")
const addTodo = document.querySelector("#addtodo");
const toDoTitle = document.querySelector("#todotitle");
const toDoDescription = document.querySelector("#tododescription")
const toDoDate = document.querySelector("#tododate")
const toDoPriority = document.querySelector("#todopriority")
const toDoForm =  document.querySelector("#todoform")
const closeForm = document.querySelector("#closeform")

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

    
    let projectIndex = chooseProjects.value;

    lists.innerHTML = ""

    for(let i = 0; i < myProjects[projectIndex][1].length; i++){
        let todo = document.createElement("div");
        todo.setAttribute("class", "tododiv")

        todo.innerHTML = 
        `<h3 class="todo-title" data-index="${i}">${myProjects[projectIndex][1][i].title}</h3>
        <p class="todo-description" data-index="${i}">${myProjects[projectIndex][1][i].description}</p>
        <p class="todo-duedate" data-input="update" index="${i}">${myProjects[projectIndex][1][i].dueDate}</p>
        <p class="todo-priority" data-index="${i}">Priority: ${myProjects[projectIndex][1][i].priority}</p>
        <button data-input="delete" data-index="${i}">Delete</button> 
        <br>
        <button data-input="edit" data-index="${i}">Edit</button>
        <input id=${i} name="updatetitle" type="text" class="updatetitle" placeholder="Update title" data-index="${i}">
        <input name="updatedescription" type="text" class="updatedescription" placeholder="Update Description" data-index="${i}">
        <input name="updateduedate" type="date" class="updateduedate" data-index="${i}">
        <select name="updatepriority" class="updatepriority" data-index="${i}">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

        <button data-input="submit" data-index="${i}">submit</button>
        `
        lists.appendChild(todo);

        
    }
}

addTodo.addEventListener("click", (e) => {

    e.preventDefault();
    let projectIndex = projectChoice.value;
    let newtodo = new ToDo(toDoTitle.value, toDoDescription.value, toDoDate.value, toDoPriority.value);

    myProjects[projectIndex][1].push(newtodo);
    toDoForm.reset();
    updateTodoList();
    document.querySelector(".modal").classList.toggle("modal-active");

})


addProject.addEventListener("click", (e) => {
    e.preventDefault();
    myProjects.push([projectName.value, []]);
    projectForm.reset();
    updateProjects();
})

chooseProjects.addEventListener("change", updateTodoList);

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-hidden");
    lists.classList.toggle("todomargin");
    lists.classList.toggle("todo-adjust");
})

plusSign.addEventListener("click", () => {
    document.querySelector(".modal").classList.toggle("modal-active");
})


closeForm.addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector(".modal").classList.toggle("modal-active");
})



lists.addEventListener("click", (e) => {

    let projectIndex = chooseProjects.value;
    let todoIndex = e.target.dataset.index;
    let todoParent = e.target.parentElement;

    if(e.target.dataset.input === "delete"){
        myProjects[projectIndex][1].splice(todoIndex, 1)
        updateTodoList();
    } else if(e.target.dataset.input === "submit"){
        
        myProjects[0][1][todoIndex].updateTitle = todoParent.querySelector(".updatetitle").value;
        myProjects[0][1][todoIndex].updateDescription = todoParent.querySelector(".updatedescription").value;
        myProjects[0][1][todoIndex].updateDueDate = todoParent.querySelector(".updateduedate").value;
        myProjects[0][1][todoIndex].updatePriority = todoParent.querySelector(".updatepriority").value;
        updateTodoList();
    }
    
})



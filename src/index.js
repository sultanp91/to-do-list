import {ToDo} from './toDoClass';
//import {updateProjects} from './addProjects';

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

let myProjects = [["Default", []]];

const updateProjects = () => {
    projectChoice.textContent = "";

    for(let i = 0; i < myProjects.length; i++){
        let project = document.createElement("option");
        project.setAttribute("value", i);
        project.textContent = `${myProjects[i][0]}`;
        projectChoice.append(project);
    }
}


addTodo.addEventListener("click", (e) => {
    e.preventDefault();
    let projectIndex = projectChoice.value;
    let newtodo = new ToDo(toDoTitle.value, toDoDescription.value, toDoDate.value, toDoPriority.value);

    myProjects[projectIndex][1].push(newtodo);
    toDoForm.reset();
    console.log(myProjects);
})


addProject.addEventListener("click", (e) => {
    e.preventDefault();
    myProjects.push([projectName.value, []]);
    projectForm.reset();
    console.log(myProjects);
    updateProjects();
})

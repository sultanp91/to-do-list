import {ToDo} from './toDoClass';

const addTodo = document.querySelector("#addtodo");
const toDoTitle = document.querySelector("#todotitle");
const toDoDescription = document.querySelector("#tododescription")
const toDoDate = document.querySelector("#tododate")
const toDoPriority = document.querySelector("#todopriority")
const toDoForm =  document.querySelector("#todoform")

const projectName = document.querySelector("#projectname")
const addProject = document.querySelector("#addproject")
const projectChoice = document.querySelector("#projectchoice");

let mylist = [[]];
let projectNames = ["Default"];






addTodo.addEventListener("click", (e) => {
    e.preventDefault();
    let projectIndex = projectChoice.value;
    let newtodo = new ToDo(toDoTitle.value, toDoDescription.value, toDoDate.value, toDoPriority.value);

    mylist[projectIndex].push(newtodo);
    toDoForm.reset();
    console.log(mylist);
})
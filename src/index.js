import {ToDo} from './toDoClass';

const addTodo = document.querySelector("#addtodo");
const toDoTitle = document.querySelector("#todotitle");
const toDoDescription = document.querySelector("#tododescription")
const toDoDate = document.querySelector("#tododate")
const toDoPriority = document.querySelector("#todopriority")
const toDoForm =  document.querySelector("#todoform")

let mylist = [];

addTodo.addEventListener("click", (e) => {
    e.preventDefault();

    let newtodo = new ToDo(toDoTitle.value, toDoDescription.value, toDoDate.value, toDoPriority.value);

    mylist.push(newtodo);

    console.log(mylist);
})
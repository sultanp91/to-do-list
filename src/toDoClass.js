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


export {ToDo};
class Todo{
    constructor(title,description,dueDate,priority,completed){
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
        this.id = crypto.randomUUID();
    }
}

//Variables


//Event Listeners
export {Todo};
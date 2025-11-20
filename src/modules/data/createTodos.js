class Todo{
    constructor(title,description,dueDate,priority,completed,project){
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
        this.id = crypto.randomUUID();
        this.project = project.toLowerCase();
    }
}

//Variables


//Event Listeners
export {Todo};
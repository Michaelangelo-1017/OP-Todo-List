class Project{
    constructor(title){
        this.title = title;
        this.tasks = [];
        this.id = crypto.randomUUID();
    }
    addTask(task){
        this.tasks.push(task);
    }
}

export default Project;
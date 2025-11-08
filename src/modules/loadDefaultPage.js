function loadDefaultPage(){
    (function loadSideBar(){
    document.querySelector('body').innerHTML += `<div id="sidebar">
        <h1 id="title"><span></span>To-do List</h1>
        <div class="task-buttons">
            <button type="button" id="new-task-btn"><span>+</span> New Task</button>
            <button id="all-btn" type="button">All</button>
            <button type="button" id="completed-btn">Completed</button>
            <button type="button" id="to-do-btn">To Do</button>
        </div>
        <hr>
        <h2 id="projects-title">Projects</h2>
        <div class="projects-buttons">
            <button type="button" id="new-project-btn"><span>+</span> New</button>
        </div>
    </div>`
})();

    (function loadContentBar(){
        document.querySelector('body').innerHTML += `
        <div id="content">
            <div id="priority-section">
                <h2 id="priority-title">Priority</h2>
                <div class="priority-buttons">
                    <button type="button" id="all-priority-btn" class="selected">All</button>
                    <button id="low-priority-btn" type="button">Low</button>
                    <button type="button" id="medium-priority-btn">Medium</button>
                    <button type="button" id="high-priority-btn">High</button>
                </div>
            </div>
            <div id="tasks-container"></div>
        </div>`
    })();

    (function addDefaultProject(){
        document.querySelector(".projects-buttons").innerHTML += `<div class='project-buttons'>
            <button id='default-project-btn'>Default</button>
            <div class="trash-cont">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="trash-can-svg"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg>
            </div>
            
        </div>`
    })();

    (function loadDefaultTasks(){
        const defaultTasks = [
            {
                title: "Coding Session",
                priority: "high",
                description: "Work on a project or follow tutorials to learn about a concept in full stack development.",
                dueDate: "2025-09-16",
                completed: false
            },
            {
                title: "Morning Mantra",
                priority: "medium",
                description: "Say your 8 powerful words for the day in the morning after brushing your teeth.",
                dueDate: "Today",
                completed: true
            },
            {
                title: "Play football",
                priority: "low",
                description: "Go and play football with your friends.",
                dueDate: "2025-11-08",
                completed: false
            }
        ];
        const taskCont = document.getElementById("tasks-container");
        defaultTasks.forEach((task)=>{
            const taskDiv = document.createElement("div");
            taskDiv.setAttribute("class","task-card");
            const taskLists = document.createElement("div");
            taskLists.setAttribute("class","task-lists");
            const taskTitle = document.createElement("h3");
            taskTitle.innerText = task.title;
            const taskPriority = document.createElement("p");
            taskPriority.innerText = `Priority : ${task.priority[0].toUpperCase() + task.priority.slice(1)}`;
            taskPriority.setAttribute("class","priority-text")
            const taskDescription = document.createElement("p");
            taskDescription.innerText = task.description;
            const taskDate = document.createElement("p");
            taskDate.innerText = task.dueDate;
            const completedDiv = document.createElement("div");
            completedDiv.id = "completed-cont";
            const taskComplete = document.createElement("p");
            taskComplete.innerText = "Completed?"
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type","checkbox");
            checkbox.id = "complete-check"
            checkbox.setAttribute("isChecked",`${task.completed}`);
            completedDiv.append(taskComplete,checkbox);
            taskLists.append(taskTitle,taskPriority,taskDescription,taskDate,completedDiv);
            const deleteTaskDiv = document.createElement("div");
            deleteTaskDiv.setAttribute("class","delete-task-div");
            deleteTaskDiv.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="delete-svg"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg>`;
            taskDiv.append(taskLists,deleteTaskDiv);
            taskCont.appendChild(taskDiv);
        })
    })();
}

export default loadDefaultPage;
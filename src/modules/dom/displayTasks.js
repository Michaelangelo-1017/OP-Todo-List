import capitaliser from "../utilities/capitaliser";

function displayTasks(tasksArr){
    const taskCont = document.getElementById("tasks-container");
    taskCont.innerHTML = '';
    tasksArr.forEach((task)=>{
        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class","task-card");
        taskDiv.id = task.id;
        switch(task.priority){
            case 'low': taskDiv.classList.add('low'); break;
            case 'medium': taskDiv.classList.add('medium'); break;
            case 'high': taskDiv.classList.add('high'); break;
            default: console.log('The priority does not match');
        }
        const taskLists = document.createElement("div");
        taskLists.setAttribute("class","task-lists");
        const taskTitle = document.createElement("h3");
        taskTitle.innerText = capitaliser(task.title);
        const taskPriority = document.createElement("p");
        taskPriority.innerText = `Priority : ${task.priority[0].toUpperCase() + task.priority.slice(1)}`;
        const taskDescription = document.createElement("p");
        taskDescription.innerText = `Desc : ${task.description}`;
        const taskDate = document.createElement("p");
        taskDate.innerText = `Due : ${task.dueDate}`;
        const completedDiv = document.createElement("div");
        completedDiv.id = "completed-cont";
        const taskComplete = document.createElement("p");
        taskComplete.innerText = "Completed?"
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute('class','completed-checkbox')
        checkbox.id = `${task.id}-complete-check`
        //checkbox.setAttribute("isChecked",`${task.completed}`);
        checkbox.checked = task.completed;
        task.completed ? taskDiv.classList.add('completed-task') : taskDiv.classList.remove('completed-task');
        completedDiv.append(taskComplete,checkbox);
        const taskProject = document.createElement("div");
        taskProject.id = `taskProjectCont`
        taskProject.innerHTML = `<span class='task-project-span'>Project:</span><p>${task.project[0].toUpperCase() + task.project.slice(1)}</p>`
        taskLists.append(taskTitle,taskPriority,taskDescription,taskDate,completedDiv,taskProject);
        const deleteTaskDiv = document.createElement("div");
        deleteTaskDiv.setAttribute("class","delete-task-div");
        deleteTaskDiv.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="delete-svg"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg>`;
        deleteTaskDiv.id = `delete-${task.id}`;
        taskDiv.append(taskLists,deleteTaskDiv);
        taskCont.appendChild(taskDiv);
    })
    return tasksArr;
}



export default displayTasks;

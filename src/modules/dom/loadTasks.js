function loadTasks(tasksArr){
    const taskCont = document.getElementById("tasks-container");
    tasksArr.forEach((task)=>{
        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class","task-card");
        const taskLists = document.createElement("div");
        taskLists.setAttribute("class","task-lists");
        const taskTitle = document.createElement("h3");
        taskTitle.innerText = task.title;
        const taskPriority = document.createElement("p");
        taskPriority.innerText = `Priority : ${task.priority[0].toUpperCase() + task.priority.slice(1)}`;
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
    return tasksArr;
}



export default loadTasks;

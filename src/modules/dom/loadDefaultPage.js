import { addToStorage } from "../data/storage";
import loadTasks from "./loadTasks";

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

    const defaultTasks = loadTasks([
        {
            id: "task-1",
            title: "Coding Session",
            priority: "high",
            description: "Work on a project or follow tutorials to learn about a concept in full stack development.",
            dueDate: "2025-09-16",
            completed: false
        },
        {
            id: "task-2",
            title: "Morning Mantra",
            priority: "medium",
            description: "Say your 8 powerful words for the day in the morning after brushing your teeth.",
            dueDate: "Today",
            completed: true
        },
        {
            id: "task-3",
            title: "Play football",
            priority: "low",
            description: "Go and play football with your friends.",
            dueDate: "2025-11-08",
            completed: false
        }
    ])

    const allTasksArr = addToStorage(defaultTasks);

    (function addPopup(){
        const modal = document.createElement("div");
        modal.id = "modal";
        modal.innerHTML = `
            <div class="popup-container">
                <h1>Create New Task</h1>
                <form id="popup-form" action="#">
                    <label for="modal-task-title">Title</label>
                    <input type="text" id="modal-task-title" name="modal-title" required placeholder="e.g Morning Mantra">
                    <label for="modal-task-description">Description</label>
                    <input type="text" id="modal-task-description" name="modal-description" required placeholder="How will you accomplish the task?">
                    <label for="modal-task-date">Due Date</label>
                    <input type="date" id="modal-task-date" name="modal-date" required placeholder="dd/mm/yyyy">
                    <label for="modal-task-priority">Priority</label>
                    <select name="priority" id="priority-select">
                        <option>Select Priority...</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </form>
                <button type="submit" id="create-task-btn" form="popup-form">Create Task</button>
            </div>
        `
        document.getElementById("content").appendChild(modal);
    })()
    return allTasksArr;
}

export default loadDefaultPage;
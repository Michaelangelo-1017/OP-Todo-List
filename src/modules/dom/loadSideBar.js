function loadSideBar(){
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
} 

export default loadSideBar;
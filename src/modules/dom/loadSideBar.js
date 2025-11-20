function loadSideBar(){
    let selectedTaskFilter = true;
    document.querySelector('body').innerHTML += `<div id="sidebar">
        <h2 id="task-menu-title">Task Menu</h2>
        <div class="task-buttons">
            <button type="button" id="new-task-btn"><span>+</span> New Task</button>
            <button id="all-btn" type="button" class='selected-button task-button'>All</button>
            <button type="button" id="completed-btn" class='task-button'>Completed</button>
            <button type="button" id="to-do-btn" class='task-button'>To Do</button>
        </div>
        <hr>
        <h2 id="projects-title">Projects Menu</h2>
        <div class="projects-buttons">
            <button type="button" id="new-project-btn"><span>+</span> New</button>
        </div>
    </div>`;
}

export default loadSideBar;
function loadContentBar(username){
    document.querySelector('body').innerHTML += `
    <div id="content">
        <h1 id="title"><span>${username}</span>'s Todo List</h1>
        <nav>
            <div class="ham-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <div id="priority-section">
            <h2 id="priority-title">Priority</h2>
            <div class="priority-buttons">
                <button type="button" id="all-priority-btn" class="priority-btn selected-button">All</button>
                <button type="button" id="low-priority-btn" class="priority-btn">Low</button>
                <button type="button" id="medium-priority-btn" class="priority-btn">Medium</button>
                <button type="button" id="high-priority-btn" class="priority-btn">High</button>
            </div>
        </div>
        <div id="tasks-container"></div>
    </div>`
}

export default loadContentBar;
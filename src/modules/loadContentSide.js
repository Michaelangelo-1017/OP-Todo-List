function loadContentBar(){
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
} 

export default loadContentBar;
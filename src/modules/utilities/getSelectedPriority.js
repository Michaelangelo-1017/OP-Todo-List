function getSelectedPriority(){
    const priorityButtons = document.querySelectorAll('.priority-btn');
    let priority;
    priorityButtons.forEach(priorityBtn => {
        if(priorityBtn.classList.contains('selected-button')){
            priority = priorityBtn.id.slice(0,-13);
        }
    });
    return priority;
}

export default getSelectedPriority;
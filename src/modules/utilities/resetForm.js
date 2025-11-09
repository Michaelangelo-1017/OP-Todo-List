function resetForm(){
    document.getElementById("modal-task-title").value = "";
    document.getElementById("modal-task-description").value = "";
    document.getElementById("modal-task-date").value = "";
    document.getElementById("priority-select").value = "Select Priority...";
}

export default resetForm;
function updateTasks(tasksArr){
    localStorage.setItem('tasksData',JSON.stringify(tasksArr));
}

export default updateTasks;
export function getProjectsData(){
    return JSON.parse(localStorage.getItem('projectsData'));
}

export function getTasksData(){
    return JSON.parse(localStorage.getItem('tasksData'));
}


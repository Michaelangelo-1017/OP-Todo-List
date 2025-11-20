import updateProjects from "../dom/updateProjects";
import updateTasks from "../dom/updateTasks";

function addTaskDataToStorage(tasksArr){
    const tasksDataArr = JSON.parse(localStorage.getItem("tasksData")) || [];
    tasksArr.forEach(task => {
        if(!tasksDataArr.some((obj)=> obj.id === task.id)){
            tasksDataArr.push(task);
        } 
    })
    updateTasks(tasksDataArr);
    return tasksDataArr;
}

function addProjectDataToStorage(projectsArr){
    const projectsDataArr = JSON.parse(localStorage.getItem("projectsData")) || [];
    projectsArr.forEach(project => {
        if(!projectsDataArr.some((obj)=> obj.id === project.id)){
            projectsDataArr.push(project);
        }
    })
    updateProjects(projectsDataArr);
    return projectsDataArr;
}

export {addTaskDataToStorage, addProjectDataToStorage};

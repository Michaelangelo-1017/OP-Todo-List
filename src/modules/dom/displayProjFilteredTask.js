import { getProjectsData, getTasksData } from "../utilities/getData";
import displayCompFilteredTasks from "./displayCompFilteredTasks";
import displayFilteredTasks from "./displayFilteredTasks";

function displayProjFilteredTasks(){
    const tasksDataArr = getTasksData() || [];
    let buttonId;
    const allProjectsBtns = document.querySelectorAll('.project-button');
    allProjectsBtns.forEach(btn => {
        if(btn.classList.contains('selected-button')){
            buttonId = btn.id.slice(0,-15)
        }
    })
    console.log(buttonId);
    if(!buttonId){
        return
    }
    const titleFilterData = tasksDataArr.filter(task => task.project.toLowerCase() === buttonId.toLowerCase());
    console.log(titleFilterData)
    const filteredTasksData = displayFilteredTasks(titleFilterData);
    console.log(filteredTasksData);
    displayCompFilteredTasks(filteredTasksData);
}

export default displayProjFilteredTasks;
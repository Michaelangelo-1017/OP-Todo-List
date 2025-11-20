import getSelectedPriority from "../utilities/getSelectedPriority";
import displayTasks from "./displayTasks";
function displayFilteredTasks(tasksDataArr){
    const prioritySelected = getSelectedPriority();
    const filteredTaskToBeDisplayed = tasksDataArr.filter(task => task.priority === prioritySelected);
    if(prioritySelected === 'all'){
        displayTasks(tasksDataArr);
        return tasksDataArr;
    }
    else{
        displayTasks(filteredTaskToBeDisplayed);
        return filteredTaskToBeDisplayed;
    }
}

export default displayFilteredTasks;
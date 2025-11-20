import getSelectedCompletion from "../utilities/getSelectedCompletion";
import displayTasks from "./displayTasks";

function displayCompFilteredTasks(filteredTasksData){
    const completedBtnId = getSelectedCompletion();
    let finalTasksData;
    if(completedBtnId === 'completed-btn'){
        finalTasksData = finalTasksData = filteredTasksData.filter(task=> task.completed)
    }
    else if(completedBtnId === 'to-do-btn'){
        finalTasksData = filteredTasksData.filter(task=> !task.completed)
    }
    else{
        finalTasksData = filteredTasksData;
    }
    displayTasks(finalTasksData);
}

export default displayCompFilteredTasks;
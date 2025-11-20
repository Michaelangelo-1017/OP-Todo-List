import updateTasks from "../dom/updateTasks";
import { getTasksData } from "../utilities/getData";

function toggleTaskCompletion(taskId){
    const tasksData = getTasksData();
    tasksData.forEach(task => {
        if(task.id === taskId){
            task.completed = !task.completed
        }
    });
    updateTasks(tasksData);
}

export default toggleTaskCompletion;
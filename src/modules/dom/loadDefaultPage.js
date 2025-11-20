import Project from "../data/createProjects";
import { addProjectDataToStorage, addTaskDataToStorage } from "../data/storage";
import addTaskPopup from "./loadAddTaskPopup";
import displayTasks from "./displayTasks";
import loadContentBar from "./loadContentSide";
import addProjectToDOM from "./loadProjects";
import loadSideBar from "./loadSideBar";
import addProjectPopup from "./loadAddProjectPopup";
import capitaliser from "../utilities/capitaliser";

//READDDDDDDDDDD THISSSSSSSSSSSSSSSSSSSSSSSSSSSS: YOU NEED TO WORK ON MAKING THE COMPLETED CHECK INPUT RESULT IN CHANGING THE COMPLETED PROPERTY FOR ITS RELATED TASK TO TRUE WHEN CLICKED AND FALSE WHEN UNCHECKED
function loadDefaultPage(username){
    loadSideBar();
    loadContentBar(username);
    addProjectToDOM('Default');
    const defProject = new Project('Default');
    const allProjectsArr = [defProject];
    console.log(allProjectsArr)
    const defaultTasks = displayTasks([
        {
            id: "task-1",
            title: "Coding Session",
            priority: "high",
            description: "Work on a project or follow tutorials to learn about a concept in full stack development.",
            dueDate: "2025-09-16",
            completed: false,
            project: "default"
        },
        {
            id: "task-2",
            title: "Morning Mantra",
            priority: "medium",
            description: "Say your 8 powerful words for the day in the morning after brushing your teeth.",
            dueDate: "Today",
            completed: false,
            project: "default"
        },
        {
            id: "task-3",
            title: "Play football",
            priority: "low",
            description: "Go and play football with your friends.",
            dueDate: "2025-11-08",
            completed: false,
            project: "default"
        }
    ])
    const allTasksArr = addTaskDataToStorage(defaultTasks);
    allTasksArr.forEach(task => {
        defProject.addTask(task);
    });
    addProjectDataToStorage([defProject]);
    addTaskPopup();
    addProjectPopup();
    return {allTasksArr,allProjectsArr};
}

export default loadDefaultPage;
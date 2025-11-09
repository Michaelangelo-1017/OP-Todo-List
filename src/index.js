import loadDefaultPage from './modules/dom/loadDefaultPage';
import loadDefaultTasks from './modules/dom/loadTasks';
import {addToStorage} from './modules/data/storage';
import {initEventListeners} from './modules/dom/events';
import "./styles/styles.css";
//Variables
/*document.addEventListener("DOMContentLoaded", ()=>{loadSideBar()});
document.addEventListener("DOMContentLoaded", ()=>{loadContentBar()});
document.addEventListener("DOMContentLoaded", ()=>{addDefaultProject()});*/
let allTasksArr;

export const tasksReady = new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", () => {
        localStorage.clear();
        allTasksArr = loadDefaultPage();
        initEventListeners();
        resolve(allTasksArr);
    });
});

export function getTasksArr(){
    return allTasksArr;
};




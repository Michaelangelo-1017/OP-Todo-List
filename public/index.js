import loadDefaultPage from '../src/modules/dom/loadDefaultPage';
import loadDefaultTasks from '../src/modules/dom/displayTasks';
import {addToStorage} from '../src/modules/data/storage';
import {initEventListeners} from '../src/modules/dom/allEventListeners';
import "../src/styles/styles.css";
import capitaliser from '../src/modules/utilities/capitaliser';
//Variables
/*document.addEventListener("DOMContentLoaded", ()=>{loadSideBar()});
document.addEventListener("DOMContentLoaded", ()=>{loadContentBar()});
document.addEventListener("DOMContentLoaded", ()=>{addDefaultProject()});*/
let allTasksArr;
let allProjectsArr;

export const tasksReady = new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", () => {
        let userName = localStorage.getItem('username');
        while(userName === null){
            let name = prompt("Enter your name");
            while(name.trim() === ''){
                name = prompt("Enter your name");
            }
            localStorage.setItem('username',name);
            userName = localStorage.getItem('username');
        }
        console.log('Webpage refreshed');
        localStorage.clear();
        ({allTasksArr,allProjectsArr} = loadDefaultPage(capitaliser(userName)));
        initEventListeners();
        console.log(allProjectsArr);
        console.log(allTasksArr);
        resolve(allTasksArr);
        resolve(allProjectsArr);
        document.getElementById('default-project-button').classList.add('selected-button');
    });
});

export function getTasksArr(){
    return allTasksArr;
};

export function getProjectsArr(){
    return allProjectsArr;
};




import loadSideBar from './modules/loadSideBar';
import loadContentBar from './modules/loadContentSide';
import addDefaultProject from './modules/loadDefaultProject';
import loadDefaultTasks from './modules/loadDefaultTasks';
import loadDefaultPage from './modules/loadDefaultPage';
import "./styles/styles.css";
//Variables

/*document.addEventListener("DOMContentLoaded", ()=>{loadSideBar()});
document.addEventListener("DOMContentLoaded", ()=>{loadContentBar()});
document.addEventListener("DOMContentLoaded", ()=>{addDefaultProject()});
document.addEventListener("DOMContentLoaded", ()=>{loadDefaultTasks()});*/

document.addEventListener("DOMContentLoaded",()=>{
    loadDefaultPage();
})
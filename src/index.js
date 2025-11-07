import loadSideBar from './loadSideBar';
import loadContentBar from './loadContentSide';
import addDefaultProject from './loadDefaultProject';
import "./styles.css";
//Variables

document.addEventListener("DOMContentLoaded", ()=>{loadSideBar()});
document.addEventListener("DOMContentLoaded", ()=>{loadContentBar()});
document.addEventListener("DOMContentLoaded", ()=>{addDefaultProject()});
import Project from '../data/createProjects';
import capitaliser from '../utilities/capitaliser';

function addProjectToDOM(projectTitle){
    const projectButtons = document.querySelector(".projects-buttons");
    const newProjectBtn = document.createElement('div');
    newProjectBtn.id = `${projectTitle.toLowerCase()}-cont`;
    newProjectBtn.setAttribute('class','project-buttons');
    newProjectBtn.innerHTML += `
        <button id='${projectTitle.toLowerCase()}-project-button' class='project-button'>${projectTitle}</button>
        <div class="trash-cont" id='${projectTitle.toLowerCase()}-trash'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="trash-can-svg"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg>
        </div>`;
    projectButtons.appendChild(newProjectBtn);
}

export default addProjectToDOM;
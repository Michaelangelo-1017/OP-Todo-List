import { getProjectsData } from "../utilities/getData";

function updateTaskPopup(){
    const projectsData = getProjectsData();
    const optionsMapArr = projectsData.map(project => `<option value='${project.title}'>${project.title}</option>`);
    const projectSelect = document.getElementById('project-select')
    projectSelect.innerHTML = `
    <option>Select Project...</option>
    ${optionsMapArr.join('')}`
}

export default updateTaskPopup;
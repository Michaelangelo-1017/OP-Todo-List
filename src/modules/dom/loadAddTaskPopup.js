import { getProjectsData } from "../utilities/getData";

function addTaskPopup(){
    const projectsData = getProjectsData();
    const modal = document.createElement("div");
    modal.id = "modal";
    const optionsMapArr = projectsData.map(project => `<option value='${project.title}'>${project.title}</option>`);
    const popupCont = document.createElement("div");
    popupCont.className = "popup-container";
    const h1 = document.createElement("h1");
    h1.textContent = "Create New Task";
    const form = document.createElement("form");
    form.id = "popup-form";
    form.action = "#";
    const labelTitle = document.createElement("label");
    labelTitle.htmlFor = "modal-task-title";
    labelTitle.textContent = "Title";
    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.id = "modal-task-title";
    inputTitle.name = "modal-title";
    inputTitle.required = true;
    inputTitle.placeholder = "e.g Morning Mantra";
    const labelDesc = document.createElement("label");
    labelDesc.htmlFor = "modal-task-description";
    labelDesc.textContent = "Description";
    const inputDesc = document.createElement("input");
    inputDesc.type = "text";
    inputDesc.id = "modal-task-description";
    inputDesc.name = "modal-description";
    inputDesc.required = true;
    inputDesc.placeholder = "How will you accomplish the task?";
    const labelDate = document.createElement("label");
    labelDate.htmlFor = "modal-task-date";
    labelDate.textContent = "Due Date";
    const today = new Date().toISOString().split("T")[0];
    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "modal-task-date";
    inputDate.name = "modal-date";
    inputDate.required = true;
    inputDate.placeholder = "dd/mm/yyyy";
    inputDate.setAttribute('min',today);
    const labelPriority = document.createElement("label");
    labelPriority.htmlFor = "priority-select";
    labelPriority.textContent = "Priority";
    const prioritySelect = document.createElement("select");
    prioritySelect.name = "priority";
    prioritySelect.id = "priority-select";
    prioritySelect.required = true;
    ["Select Priority...", "low", "medium", "high"].forEach((value) => {
    const option = document.createElement("option");
    if (value === "Select Priority...") {
        option.textContent = value;
    } else {
        option.value = value;
        option.textContent = value[0].toUpperCase() + value.slice(1);
    }
    prioritySelect.appendChild(option);
    });
    const labelProject = document.createElement("label");
    labelProject.htmlFor = "project-select";
    labelProject.textContent = "Project";
    const projectSelect = document.createElement("select");
    projectSelect.name = "project";
    projectSelect.id = "project-select";
    projectSelect.required = true;
    projectSelect.innerHTML = `
    <option>Select Project...</option>
    ${optionsMapArr.join('')}`
    form.append(labelTitle, inputTitle,labelDesc, inputDesc,labelDate, inputDate,labelPriority, prioritySelect,labelProject, projectSelect);
    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel-btn";
    cancelBtn.textContent = "X";
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.id = "create-task-btn";
    submitBtn.setAttribute('form',"popup-form");
    submitBtn.textContent = "Create Task";
    popupCont.append(h1, form, cancelBtn, submitBtn);
    modal.appendChild(popupCont);
    document.getElementById("content").appendChild(modal);
}

export default addTaskPopup;
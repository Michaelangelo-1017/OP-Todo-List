import { getProjectsArr, getTasksArr } from '../../../public/index';
import {addProjectDataToStorage, addTaskDataToStorage} from '../data/storage';
import {Todo} from '../data/createTodos';
import resetForm from '../utilities/resetForm';
import displayTasks from './displayTasks';
import updateTasks from './updateTasks';
import addProjectToDOM from './loadProjects';
import Project from '../data/createProjects';
import addTaskPopup from './loadAddTaskPopup';
import updateTaskPopup from './updateTaskPopup';
import { getProjectsData, getTasksData } from '../utilities/getData';
import updateProjects from './updateProjects';
import capitaliser from '../utilities/capitaliser';
import getSelectedPriority from '../utilities/getSelectedPriority';
import displayFilteredTasks from './displayFilteredTasks';
import toggleTaskCompletion from '../data/toggleTaskCompletion';
import getSelectedCompletion from '../utilities/getSelectedCompletion';
import displayCompFilteredTasks from './displayCompFilteredTasks';
import displayProjFilteredTasks from './displayProjFilteredTask';

export function initEventListeners(){
    const contentContainer = document.getElementById('content');
    const newTaskBtn = document.getElementById("new-task-btn");
    const createTaskBtn = document.getElementById("create-task-btn");
    const modal = document.getElementById("modal");
    const form = document.getElementById("popup-form");
    const projectForm = document.getElementById("project-popup-form");
    const modalTitle = document.getElementById("modal-task-title");
    const modalDescription = document.getElementById("modal-task-description");
    const modalDueDate = document.getElementById("modal-task-date");
    const modalPriority = document.getElementById("priority-select");
    const modalProject = document.getElementById('project-select');
    const cancelTaskBtn = document.getElementById('cancel-btn');
    const taskContainer = document.getElementById("tasks-container");
    const newProjectBtn = document.getElementById('new-project-btn');
    const projectModal = document.getElementById('project-modal');
    const cancelProjectBtn = document.getElementById('project-cancel-btn');
    const createProjectBtn = document.getElementById("create-project-btn");
    const modalProjectTitle = document.getElementById("modal-project-title");
    const divProjectButtons = document.querySelector('.projects-buttons');
    const allPriorityBtn = document.getElementById('all-priority-btn');
    const lowPriorityBtn = document.getElementById('low-priority-btn');
    const mediumPriorityBtn = document.getElementById('medium-priority-btn');
    const highPriorityBtn = document.getElementById('high-priority-btn');
    const allTasksBtn = document.getElementById('all-btn');
    const completedTasksBtn = document.getElementById('completed-btn');
    const toDoTasksBtn = document.getElementById('to-do-btn');
    const hamMenu = document.querySelector(".ham-menu");
    const sidebar = document.querySelector("#sidebar");
    const priorityButtons = document.querySelector(".priority-buttons");

    newTaskBtn.addEventListener("click",()=>{
        modal.style.display = "flex";
    })

    newProjectBtn.addEventListener("click",()=>{
        projectModal.style.display = "flex";
    })

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
    });
    projectForm.addEventListener("submit",(e)=>{
        e.preventDefault();
    });

    createTaskBtn.addEventListener("click",()=>{
        console.log('Create Task btn clicked');
        modalPriority.setCustomValidity('');
        modalProject.setCustomValidity('');
        if(form.checkValidity() && modalPriority.value !== "Select Priority..." && modalProject.value !== "Select Project..."){
            const task = new Todo(modalTitle.value,modalDescription.value,modalDueDate.value,modalPriority.value,false,modalProject.value);
            const tasksData = getTasksData();
            tasksData.push(task);
            addTaskDataToStorage(tasksData);
            const filteredFromFunction = displayFilteredTasks(tasksData);
            displayCompFilteredTasks(filteredFromFunction);
            
            displayProjFilteredTasks();
            resetForm();
            modal.style.display = "none";
        }
        else{
            console.log(modalPriority.value);
            console.log(modalProject.value);
            if(modalPriority.value === "Select Priority..."){
                modalPriority.setCustomValidity('You have to choose a priority!');
                form.reportValidity();
            }
            else if(modalProject.value === "Select Project..."){
                const projectsData = getProjectsData();
                if(!projectsData.length){
                    modalProject.setCustomValidity('You have to create a project first!');
                    form.reportValidity();
                }
                else{
                    modalProject.setCustomValidity('You have to choose a project!');
                    form.reportValidity();
                }
            }
        }
    })

    createProjectBtn.addEventListener("click",()=>{
        const projectsData = getProjectsData();
        modalProjectTitle.setCustomValidity('');
        if(projectForm.checkValidity() && !projectsData.some(project=>project.title.toLowerCase() === modalProjectTitle.value.toLowerCase())){
            addProjectToDOM(modalProjectTitle.value);
            const project = new Project(modalProjectTitle.value);
            const projectsData = getProjectsData();
            projectsData.push(project);
            addProjectDataToStorage(projectsData);
            updateTaskPopup();
            resetForm();
            projectModal.style.display = "none";
        }
        else{
            
            if(projectsData.some(project=>project.title.toLowerCase() === modalProjectTitle.value.toLowerCase())){
                modalProjectTitle.setCustomValidity('You cannot have the same project title!');
                projectForm.reportValidity();
            }
        }
    })

    cancelTaskBtn.addEventListener('click',()=>{
        resetForm();
        modal.style.display = "none";
    })

    taskContainer.addEventListener('click',(e)=>{
        const deleteTaskBtn = e.target.closest('.delete-task-div');
        if(deleteTaskBtn){
            const tasksData = getTasksData();
            const taskIndex = tasksData.findIndex(task => task.id === deleteTaskBtn.id.slice(7));
            tasksData.splice(taskIndex,1);
            displayFilteredTasks(tasksData);
            updateTasks(tasksData);
            displayProjFilteredTasks();
        }
    })

    cancelProjectBtn.addEventListener('click',()=>{
        resetForm();
        projectModal.style.display = "none";
    })

    divProjectButtons.addEventListener('click',(e)=>{
        const projectTrashBtn = e.target.closest('.trash-cont');
        if(projectTrashBtn){
            const projectName = projectTrashBtn.id.slice(0,projectTrashBtn.id.length-6);
            const projectBtn = document.getElementById(`${projectName}-cont`);
            divProjectButtons.removeChild(projectBtn);
            const currentStoredTasks = JSON.parse(localStorage.getItem('tasksData'));
            const tasksLeft = currentStoredTasks.filter((task)=> task.project !== projectName);
            const projectsData = getProjectsData();
            const projectIndex = projectsData.findIndex(project => project.title === capitaliser(projectName));
            projectsData.splice(projectIndex,1);
            updateTasks(tasksLeft);
            displayFilteredTasks(tasksLeft);
            updateProjects(projectsData);
            updateTaskPopup();
            displayProjFilteredTasks();
        }
    })
    lowPriorityBtn.addEventListener('click',()=>{
        const tasksData = getTasksData();
        allPriorityBtn.classList.remove('selected-button');
        mediumPriorityBtn.classList.remove('selected-button');
        highPriorityBtn.classList.remove('selected-button');
        lowPriorityBtn.classList.add('selected-button');
        const lowPriorityTasksData = tasksData.filter(task=>task.priority === 'low');
        displayCompFilteredTasks(lowPriorityTasksData);
        displayProjFilteredTasks();
    })
    mediumPriorityBtn.addEventListener('click',()=>{
        const tasksData = getTasksData();
        allPriorityBtn.classList.remove('selected-button');
        lowPriorityBtn.classList.remove('selected-button');
        highPriorityBtn.classList.remove('selected-button');
        mediumPriorityBtn.classList.add('selected-button');
        const mediumPriorityTasksData = tasksData.filter(task=>task.priority === 'medium');
        displayCompFilteredTasks(mediumPriorityTasksData);
        displayProjFilteredTasks();
    })
    highPriorityBtn.addEventListener('click',()=>{
        const tasksData = getTasksData();
        allPriorityBtn.classList.remove('selected-button');
        mediumPriorityBtn.classList.remove('selected-button');
        lowPriorityBtn.classList.remove('selected-button');
        highPriorityBtn.classList.add('selected-button');
        const highPriorityTasksData = tasksData.filter(task=>task.priority === 'high');
        displayCompFilteredTasks(highPriorityTasksData);
        displayProjFilteredTasks();
    })
    allPriorityBtn.addEventListener('click',()=>{
        const tasksData = getTasksData();
        lowPriorityBtn.classList.remove('selected-button');
        mediumPriorityBtn.classList.remove('selected-button');
        highPriorityBtn.classList.remove('selected-button');
        allPriorityBtn.classList.add('selected-button');
        displayTasks(tasksData);
        displayProjFilteredTasks();
    })
    allTasksBtn.addEventListener('click',()=>{
        const tasksData = getTasksData();
        completedTasksBtn.classList.remove('selected-button');
        toDoTasksBtn.classList.remove('selected-button');
        allTasksBtn.classList.add('selected-button');
        displayFilteredTasks(tasksData);
        const allProjectsBtns = document.querySelectorAll('.project-button');
        allProjectsBtns.forEach(btn => btn.classList.remove('selected-button'));
    })
    completedTasksBtn.addEventListener('click',()=>{
        const tasksData = getTasksData();
        completedTasksBtn.classList.add('selected-button');
        toDoTasksBtn.classList.remove('selected-button');
        allTasksBtn.classList.remove('selected-button');
        const completedTasks = tasksData.filter(task=> task.completed);
        const filteredFromFunction = displayFilteredTasks(completedTasks);
        displayCompFilteredTasks(filteredFromFunction);
        displayProjFilteredTasks();
    })
    toDoTasksBtn.addEventListener('click',()=>{
        const tasksData = getTasksData();
        completedTasksBtn.classList.remove('selected-button');
        toDoTasksBtn.classList.add('selected-button');
        allTasksBtn.classList.remove('selected-button');
        const incompletedTasks = tasksData.filter(task=> !task.completed);
        const filteredFromFunction = displayFilteredTasks(incompletedTasks);
        displayCompFilteredTasks(filteredFromFunction);
        displayProjFilteredTasks();
    })
    
    taskContainer.addEventListener('click',(e)=>{
        const completedCheckbox = e.target.closest('.completed-checkbox');
        if(completedCheckbox){
            console.log('checkbox toggled')
            const checkboxId = completedCheckbox.id.slice(0,-15);
            toggleTaskCompletion(checkboxId);
            const taskCard = document.getElementById(`${checkboxId}`);
            taskCard.classList.toggle('completed-task');
            const completedBtnId = getSelectedCompletion();
            if(completedBtnId !== 'all-btn'){
                taskContainer.removeChild(taskCard);
            }
        } 
    })

    divProjectButtons.addEventListener('click',(e)=>{
        const projectButton = e.target.closest('.project-button');
        if(projectButton){
            const buttonId = projectButton.id.slice(0,-15);
            const allProjectsBtns = document.querySelectorAll('.project-button');
            allProjectsBtns.forEach(btn => btn.classList.remove('selected-button'));
            projectButton.classList.add('selected-button');
            displayProjFilteredTasks();
        }
    })

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        sidebar.classList.toggle("active");
    });
}

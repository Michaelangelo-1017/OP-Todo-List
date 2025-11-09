import { getTasksArr } from '../../index';
import {addToStorage} from '../data/storage';
import {Todo} from '../data/todos';
import resetForm from '../utilities/resetForm';


export function initEventListeners(){
    const newTaskBtn = document.getElementById("new-task-btn");
    const createTaskBtn = document.getElementById("create-task-btn");
    const modal = document.getElementById("modal");
    const form = document.getElementById("popup-form");
    const modalTitle = document.getElementById("modal-task-title");
    const modalDescription = document.getElementById("modal-task-description");
    const modalDueDate = document.getElementById("modal-task-date");
    const modalPriority = document.getElementById("priority-select");
    let allTasksArray = getTasksArr();


    newTaskBtn.addEventListener("click",()=>{
        modal.style.display = "flex";
    })

    form.addEventListener("submit",(e)=>{e.preventDefault()})

    createTaskBtn.addEventListener("click",()=>{
        if(form.checkValidity() && modalPriority.value !== "Select Priority..."){
            console.log("This was ran")
            const task = new Todo(modalTitle.value,modalDescription.value,modalDueDate.value,modalPriority.value,false);
            allTasksArray.push(task);
            addToStorage(allTasksArray);
            resetForm();
            modal.style.display = "none";
        }
    })
}

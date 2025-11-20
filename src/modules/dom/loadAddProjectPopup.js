function addProjectPopup(){
    const modal = document.createElement("div");
    modal.id = "project-modal";
    const popupCont = document.createElement('div');
    popupCont.setAttribute('class','popup-container');
    const projectPopupH1 = document.createElement('h1');
    projectPopupH1.innerText = 'Create New Project';
    const popupForm = document.createElement('form');
    popupForm.id = "project-popup-form";
    popupForm.action = '#';
    const popupFormLabel = document.createElement('label');
    popupFormLabel.innerText = 'Project Title';
    popupFormLabel.htmlFor = "modal-project-title";
    const popupFormInput = document.createElement('input');
    popupFormInput.type = 'text';
    popupFormInput.id = "modal-project-title";
    popupFormInput.name = 'modal-project-title'
    popupFormInput.required = true;
    popupFormInput.placeholder = "e.g Software Development";
    popupForm.append(popupFormLabel,popupFormInput);
    const xButton = document.createElement('button');
    xButton.id = 'project-cancel-btn';
    xButton.innerText = 'X'
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = "create-project-btn";
    submitButton.setAttribute('form',"project-popup-form");
    submitButton.innerText = 'Create Project';
    popupCont.append(projectPopupH1,popupForm,xButton,submitButton);
    modal.appendChild(popupCont);
    document.getElementById("content").appendChild(modal);
}


export default addProjectPopup;
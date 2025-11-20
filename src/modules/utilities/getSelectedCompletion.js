function getSelectedCompletion(){
    const completionBtns = document.querySelectorAll('.task-button');
    let completedBtnId;
    completionBtns.forEach((sideTaskBtn)=>{
        if(sideTaskBtn.classList.contains('selected-button')){
            completedBtnId = sideTaskBtn.id;
        }
    })
    return completedBtnId;
}

export default getSelectedCompletion;
function addToStorage(tasksArr){
    const tasksDataArr = JSON.parse(localStorage.getItem("tasksData")) || [];
    tasksArr.forEach(task => {
        tasksDataArr.some((obj)=> obj.id === task.id) ? console.log("It is in here") : tasksDataArr.push(task);
    })
    localStorage.setItem("tasksData",JSON.stringify(tasksDataArr));
    return tasksDataArr;
}

export {addToStorage};

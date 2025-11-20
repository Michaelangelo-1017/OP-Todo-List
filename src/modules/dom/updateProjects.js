function updateProjects(projectsArr){
    localStorage.setItem('projectsData',JSON.stringify(projectsArr));
}

export default updateProjects;
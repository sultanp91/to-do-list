const updateProjects = () => {
    projectChoice.textContent = "";

    for(let i = 0; i < myProjects.length; i++){
        let project = document.createElement("option");
        project.setAttribute("value", i);
        project.textContent = `${myProjects[i][0]}`;
        projectChoice.append(project);
    }
}

export {updateProjects};
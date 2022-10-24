import projects from "./projects.js";

const projectContainer = document.querySelector('.projects');

const projectsFiltered = projects.sort((a, b) => a.date - b.date)

projectsFiltered.forEach(project => {
    projectContainer.innerHTML += `
        <div class="project-card">
            <div class="cover">
                <img src="./images/projects/${ project.imgUrl }" alt="${ project.name }">
            </div>

            <div class="info">
                <h2 class="name"> ${ project.name } </h2>
                <div class = "category">
                    <h4> ${ project.category } </h4>
                </div>
                <div class="date">
                    <h4> ${project.date} </h4>
                </div>
            </div>

            <div class="view-button">
                <a href=" ${project.url} " target="_blank" title = "View Project"><i class="fa-solid fa-arrow-up-right-from-square"></i> View</a>
            </div>
        </div>
    
    `
})
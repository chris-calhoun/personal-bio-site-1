import axios from 'axios';
import apiKeys from '../apiKeys.json';

// import sorting from '../../../assets/img/sorting-hat-screenshot.png';
// import dino from '../../../assets/img/dino.png';
// import pinterest from '../../../assets/img/Pinterest.png';
// import tamagotchi from '../../../assets/img/tamagotchi.png';
// import joke from '../../../assets/img/joke-generator.png';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projectData = response.data;
      const projects = [];

      if (projectData) {
        Object.keys(projectData).forEach((projectId) => {
          projects.push(projectData[projectId]);
        });
      }
      resolve(projects);
    })
    .catch((error) => reject(error));
});

const createProjectCards = (projectObj) => {
  $('#projects-container').append(` 
    <div class="card project" style="width:400px">
      <img class="card-img-top" src="${projectObj.screenshot}" alt="Image of ${projectObj.title} project.">
      <div class="card-body">
        <h4 class="card-title">${projectObj.title}</h4>
        <p class="card-text">Description: ${projectObj.description}</p>
        <p class="card-text">Technologies used: ${projectObj.technologiesUsed}</p>
        <a href="${projectObj.url}">Deployed Site</a> <br>
        <a href="${projectObj.githubUrl}">Github</a>
      </div>
    </div>`);
};

export default { createProjectCards, getProjects };

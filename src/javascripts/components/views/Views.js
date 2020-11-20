import Projects from '../../helpers/data/projectData';
import profile from '../../../assets/img/profile-pic-circular.png';

const addHomePage = () => {
  $('#main').html(`
  <div class = "home-container">
    <div class="profile-pic">
      <img
        src=${profile}
        alt="profile picture of chris calhoun"/>
    </div>
    <div class = "intro">
      <p>Hi, I'm Chris,</br>an aspiring <br/>Software Developer </br>from Nashville, </br>Tennessee.
    </div>
  </div>
  `);
};

const addAboutMePage = () => {
  $('#main').html(`
  <div class = about-container>
    <p>I enjoy solving challenging problems.</p>
    <p>In my free time I enjoy playing chess, ultimate frisbee, and climbing.</p>
    <p>I graduated from the University of Tennessee Knoxville with a degree in mechanical engineering.</p>
    <p>I am currently participating in Nashville Software School's Web Developer Bootcamp.</p>
  </div>
  `);
};

const addExperiencePage = () => {
  $('#main').html(`

  <h2>Experience</h2>
  `);
};

const addProjectsPage = () => {
  $('#main').html(`
  <div id="projects-container"></div>
  `);
  Projects.getProjects().then((response) => {
    if (response.length) {
      response.forEach((projectObj) => {
        Projects.createProjectCards(projectObj);
      });
    } else {
      $('#projects-container').append('<h2>Uh oh, there are no projects</h2>');
    }
  });
};

const addContactPage = () => {
  $('#main').html(`
  <div class="contact-container">
    <h2>Email: ctcalhoun2@gmail.com</p>
  </div>
  `);
};

export default {
  addHomePage,
  addAboutMePage,
  addExperiencePage,
  addProjectsPage,
  addContactPage,
};

const addHomePage = () => {
  $('#main').html(`
  <div class="profile-pic">
    <img
      src="src/images/profile-pic-circular.png"
      alt="profile picture of chris calhoun"/>
  </div>`);
};

const addAboutMePage = () => {
  $('#main').html(`
  <h2>About Me</h2>
  `);
};

const addExperiencePage = () => {
  $('#main').html(`
  <h2>Experience</h2>
  `);
};

const addProjectsPage = () => {
  $('#main').html(`
  <h2>Projects</h2>
  `);
};

const addContactPage = () => {
  $('#main').html(`
  <h2>Contact</h2>
  `);
};

export default {
  addHomePage,
  addAboutMePage,
  addExperiencePage,
  addProjectsPage,
  addContactPage,
};

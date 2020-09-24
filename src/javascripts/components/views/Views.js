const addHomePage = () => {
  $('#main').html(`
  <div class = "home-container">
    <div class="profile-pic">
      <img
        src="src/images/profile-pic-circular.png"
        alt="profile picture of chris calhoun"/>
    </div>
    <div class = "intro">
      <p>Hi, I'm Chris.<br/>An aspiring <br/>Software Developer </br>from Nashville, </br>Tennessee.
    </div>
  </div>
  `);
};

const addAboutMePage = () => {
  $('#main').html(`
  <div class = about-container>
    <h2>About Me</h2>
    <p>I enjoy solving challenging problems.</p>
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

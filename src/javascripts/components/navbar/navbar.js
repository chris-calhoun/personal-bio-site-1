const addNavbar = () => {
  $('#nav').html(`
    <nav>
      <a class="nav-name" href="#" id = "home-link">Chris Calhoun</a>
      <a class="nav-item" href="#" id = "about-link">About Me</a>
      <a class="nav-item" href="#" id = "experience-link">Experience</a>
      <a class="nav-item" href="#" id = "projects-link">Projects</a>
      <a class="nav-item" href="#" id = "contact-link">Contact</a>
    </nav>
        `);
};

export default { addNavbar };

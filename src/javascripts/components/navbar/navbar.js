const addNavbar = () => {
  $('#nav').html(`
    <nav>
      <a class="nav-name" href="#">Chris Calhoun</a>
      <a class="nav-item" href="#">About Me</a>
      <a class="nav-item" href="#">Experience</a>
      <a class="nav-item" href="#">Projects</a>
      <a class="nav-item" href="#">Contact</a>
    </nav>
        `);
};

export default { addNavbar };

const getProjects = () => {
  const projects = [
    {
      title: 'Sorting Hat',
      screenshot: '/src/images/sorting-hat-screenshot.png',
      description:
        'Used event listeners, callback functions, and Bootstrap to simulate the Sorting Hat.',
      technologiesUsed:
        'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: true,
      url: 'https://sorting-hat-cc.netlify.app/',
      githubUrl: 'https://github.com/chris-calhoun/Sorting-hat',
    },
    {
      title: 'Dino Kennel',
      screenshot: '/src/images/dino.png',
      description:
        'This project showcases all the vanilla JS I have learned in NSS up to this point. It is designed to be a record keeping application for a dinosaur kennel.',
      technologiesUsed:
        'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: false,
      url: 'https://dino-kennel-cc.netlify.app/',
      githubUrl: 'https://github.com/chris-calhoun/dino-kennel',
    },
    {
      title: 'Pinterest',
      screenshot: '/src/images/Pinterest.png',
      description:
        'The goal of this project was to recreate Pinterest. Once a user logs in, they are able to view, create, update, and delete boards. Within those boards, they are able to view, create, update, and delete associated pins.',
      technologiesUsed: 'Javascript ES6, Node.js ,jQuery',
      available: true,
      url: 'https://pinterest-aa40e.web.app/',
      githubUrl: 'https://github.com/chris-calhoun/pinterest',
    },
    {
      title: 'Tamagotchi',
      screenshot: '/src/images/tamagotchi.png',
      description:
        'This project required me to build a website that simulated a Tamagotchi pet from the 90s.',
      technologiesUsed:
        'HTML, CSS, Vanilla JavaScript, Version Control with Github, SCSS',
      available: true,
      url: 'https://tamagotchi-cc.netlify.app/',
      githubUrl: 'https://github.com/chris-calhoun/tamagotchi',
    },
    {
      title: 'Joke Generator',
      screenshot: '/src/images/joke-generator.png',
      description:
        'This was a short assessment to test my skills with API calls',
      technologiesUsed:
        'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: true,
      url: 'https://joke-generator-cc.netlify.app/',
      githubUrl: 'https://github.com/chris-calhoun/joke-generator',
    },
  ];

  return projects;
};

const createProjectCarts = (array) => {
  array.forEach((projectObj) => {
    $('#projects-container').append(` 
    <div class="card project" style="width:400px">
      <img class="card-img-top" src="${projectObj.screenshot}" alt="mage of ${projectObj.title} project.">
      <div class="card-body">
        <h4 class="card-title">${projectObj.title}</h4>
        <p class="card-text">Description: ${projectObj.description}</p>
        <p class="card-text">Technologies used: ${projectObj.technologiesUsed}</p>
        <a href="${projectObj.url}">Deployed Site</a> <br>
        <a href="${projectObj.githubUrl}">Github</a>
      </div>
    </div>`);
  });
};

export default { createProjectCarts, getProjects };

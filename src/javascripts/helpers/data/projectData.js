const getProjects = () => {
  const projects = [
    {
      title: 'Sorting Hat',
      screenshot: 'src/images/sorting-hat-screenshot.png',
      description:
        'Used event listeners, callback functions, and Bootstrap to simulate the Sorting Hat.',
      technologiesUsed:
        'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: true,
      url: 'https://sorting-hat-cc.netlify.app/',
      githubUrl: 'https://github.com/chris-calhoun/Sorting-hat',
    },
    {
      title: 'Test Project',
      screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
      description: 'This is the best project',
      technologiesUsed:
        'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: false,
      url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
      githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    },
    {
      title: 'Cool Project',
      screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
      description: 'This is the best project',
      technologiesUsed:
        'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: true,
      url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
      githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    },
    {
      title: 'Cool Project',
      screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
      description: 'This is the best project',
      technologiesUsed:
        'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: true,
      url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
      githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    },
    {
      title: 'Cool Project',
      screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
      description: 'This is the best project',
      technologiesUsed:
        'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: true,
      url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
      githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
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
        <p class="card-text">Url: ${projectObj.url}</p>
        <p class="card-text">Url: ${projectObj.githubUrl}</p>
      </div>
    </div>`);
  });
};

export default { createProjectCarts, getProjects };

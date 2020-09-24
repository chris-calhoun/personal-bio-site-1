import Views from '../components/views/Views';

const viewHelper = (id) => {
  $('#main').html('');
  switch (id) {
    case 'home-link':
      return Views.addHomePage();
    case 'about-link':
      return Views.addAboutMePage();
    case 'experience-link':
      return Views.addExperiencePage();
    case 'projects-link':
      return Views.addProjectsPage();
    case 'contact-link':
      return Views.addContactPage();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'nav > a', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };

import Views from '../components/views/Views';
import View from '../components/views/Views';

const viewHelper = (id) => {
  $('#main').html('');
  switch (id) {
    case 'home-link':
      return Views.addHomePage();
    case 'home-link':
      return Views.addAboutMePage();
    case 'home-link':
      return Views.addExperiencePage();
    case 'home-link':
      return Views.addProjectsPage();
    case 'home-link':
      return Views.addContactPage();
  }
};

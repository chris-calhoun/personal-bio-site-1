import '../styles/main.scss';
import Views from './components/views/Views';
import Navbar from './components/navbar/navbar';

const init = () => {
  Navbar.addNavbar();
  Views.addHomePage();
};

init();

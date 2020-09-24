import '../styles/main.scss';
import Views from './helpers/viewHelper';
import Navbar from './components/navbar/navbar';

const init = () => {
  Navbar.addNavbar();
  Views.viewListener('home-link');
};

init();

import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import Views from './helpers/viewHelper';
import Navbar from './components/navbar/navbar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  Navbar.addNavbar();
  Views.viewListener('home-link');
};

init();

import React from 'react';
import {render} from 'react-dom';
import Modal from 'react-modal';
import App from './components/App';



  const app = <App />
  render( app, document.getElementById('app'));

  
  Modal.setAppElement('#app');
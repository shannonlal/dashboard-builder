import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

/*ReactDOM.render(
    <App />,
    document.getElementById('app')
  );*/

  const app = <App />
  render( app, document.getElementById('app'));

  
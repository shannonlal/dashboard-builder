import React from 'react';
import 'plotly.js';
import Plot from 'react-plotly.js';


import Dashboard from './Dashboard';
import BasicDashboard from '../../examples/basic-01';
import EditDashboard from '../../examples/edit-grid';
import LocalStorageLayout from '../../examples/localstore';
import './App.scss';

class App extends React.Component {
  render() {
    return (
        <div>

            <Dashboard /> 
            {/*<LocalStorageLayout />*/} 
      </div>
    );
  }
}

export default App;
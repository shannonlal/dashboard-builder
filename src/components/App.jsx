import React from 'react';
import 'plotly.js';
import Plot from 'react-plotly.js';


import Dashboard from './Dashboard';
import BasicDashboard from '../../examples/basic-01';
import EditDashboard from '../../examples/edit-grid';
import LocalStorageLayout from '../../examples/localstore';
import ImageGrid from '../../examples/image-grid'
import './App.scss';

class App extends React.Component {
  render() {
    return (
        <div>
            <ImageGrid />
            {/**<Dashboard /> **/}
            {/**<LocalStorageLayout /> */}
      </div>
    );
  }
}

export default App;
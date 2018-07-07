import React from 'react';
import 'plotly.js';
import Plot from 'react-plotly.js';


import Dashboard from './Dashboard';
import BasicDashboard from '../../examples/basic-01';
import EditDashboard from '../../examples/edit-grid';
import LocalStorageLayout from '../../examples/localstore';
import ImageGrid from '../../examples/image-grid'
import ResponsiveLocalStorageLayout from '../../examples/responsive-localstorage';
import './App.scss';
import {requestManager} from '../common';

const connection = {
    client: 'pg',
    user: 'masteruser',
    password: 'connecttoplotly',
    database: 'plotly_datasets',
    port: 5432,
    host: 'readonly-test-postgres.cwwxgcilxwxw.us-west-2.rds.amazonaws.com',
    sql:'SELECT * FROM alcohol_consumption_by_country_2010 LIMIT 10',
    params:[]
};

let requests = [];
requests.push({name:'test', connection});

requestManager( 'http://localhost:3000/', 3000, requests);
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
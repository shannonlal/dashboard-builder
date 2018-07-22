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





class App extends React.Component {

  constructor(){
    super();

    this.updateResults = this.updateResults.bind(this);
    this.setState({results:{}})
    let requestInterval = requestManager( 'http://localhost:3000/', 3000, requests, this.updateResults);
  }

  updateResults(results){
    this.setState( {results:results})
  }

  render() {
    console.log( 'Results from requests', this.state.results);
    return (
        <div>
            <ImageGrid columnNames={this.state.results.columnNames} rows={this.state.results.rows} />
            {/**<Dashboard /> **/}
            {/**<LocalStorageLayout /> */}
      </div>
    );
  }
}

export default App;
import React from 'react';
import 'plotly.js';
import Plot from 'react-plotly.js';


import Dashboard from './Dashboard';
import './App.scss';

class App extends React.Component {
  render() {
    return (
        <div>
            {/**<Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
            ></Plot> */}
            <Dashboard />
      </div>
    );
  }
}

export default App;
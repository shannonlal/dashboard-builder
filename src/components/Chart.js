import React from 'react';
import 'plotly.js';
import Plot from 'react-plotly.js';

class Chart extends React.Component {
  render() {
    return (
        <div>
            <Plot
                config= {{ displayModeBar: false }}
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
                layout={{width: 240, height: 300, title: 'A Fancy Plot'}}>
            </Plot> 
      </div>
    );
  }
}

export default Chart;
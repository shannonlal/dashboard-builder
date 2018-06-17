import React from 'react';
import 'plotly.js';
import Plot from 'react-plotly.js';
//import sizeMe from 'react-sizeme';
const INITIAL_SIZE = 300;

function Chart(props) {
    console.log( 'Chart Props', props);

    
    let height =  props.height;
    /*if( height === 0){
        height = INITIAL_SIZE;
    }*/
    let width = props.width;
    /*if( width === 0){
        width = INITIAL_SIZE;
    }*/
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
                layout={{width: width, height: height, title: 'A Fancy Plot'}}>
            </Plot> 
      </div>
    );

}

export default Chart;

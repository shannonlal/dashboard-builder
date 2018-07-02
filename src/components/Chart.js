import React from 'react';
import 'plotly.js';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types';
const INITIAL_SIZE = 50;


/**
 * TODO Remove
 *                 config= {{ displayModeBar: false }}
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
 */
/**
 * The core chart which can be added to the dashboard.  Note
 * this is a warpper around a plot.ly plot.  The key feature this 
 * handles is the ability to set the height and width based on the 
 * surrounding dashboard (React Grid Layout).  This Chart component 
 * will override the layout and set its own height and width
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */
function Chart(props) {

    let height =  props.height;
    if( typeof height === 'undefined' || height === 0  ){
        height = INITIAL_SIZE;
    }
    let width = props.width;
    if( typeof width === 'undefined' || width === 0){
        width = INITIAL_SIZE;
    }
    let layout = props.layout;
    layout.width = width;
    layout.height = height;
    return (
        <div>
            <Plot
                config={props.config}
                data={prop.data}
                layout={layout}>
            </Plot> 
      </div>
    );
}

Chart.propTypes = {
    //The label to be displayed on the dashboad
    config: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    layout: PropTypes.object.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};

export default Chart;

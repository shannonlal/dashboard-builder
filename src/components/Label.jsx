import React from 'react';
import PropTypes from 'prop-types';

/**
 * The core label which can be added to the dashboard.  Note
 * this component uses CSS Variables to set the style on the label
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */
function Label({label}){
    console.log( 'Check in latest', label);
    if( typeof label !=='undefined'){
        console.log( 'Returning label', label);
        return (<div className="label-style">{label}</div>)
    }
}

Label.propTypes = {
    //The label to be displayed on the dashboad
    label: PropTypes.string.isRequired
};
export default Label;
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
    if( typeof label !=='undefined'){
        return (<div className="label-style">{label}</div>)
    }
}

Label.propTypes = {
    //The label to be displayed on the dashboad
    label: PropTypes.string.isRequired
};
export default Label;
import React from 'react';
import PropTypes from 'prop-types';

/**
 * The core count which can be added to the dashboard.  This is 
 * designed for a single stat variable
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */
function Count({count}){
    return (<div className="count-style">{count}</div>)
}

Count.propTypes = {
    //The single stat to be displayed on the dashboad
    count: PropTypes.number.isRequired
};
export default Count;
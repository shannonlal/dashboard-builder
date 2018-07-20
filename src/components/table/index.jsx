import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';


/**
 * The following is the header component that will be render for the table
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */


function Table({width, height}){

    var columns = ['Name', 'State', 'Age', 'Note'];
    var rows = [
        [
        <span>Joe</span>,
        <span>PA</span>,
        <span>22</span>,
        <input type="text" />
        ],
        [
        <span>Jim</span>,
        <span>TX</span>,
        <span>55</span>,
        <input type="text" />
        ]
    ];

    let columnNames = ['alchol', 'location'];
    //https://css-tricks.com/fitting-text-to-a-container/
    return ( 
        <div>
            <Header columnNames={columnNames} width={width} height={height} />
        </div>
    )
}

Table.propTypes = {
    columnNames: PropTypes.array.isRequired
};
export default Table;
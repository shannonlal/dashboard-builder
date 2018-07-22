import React from 'react';
import PropTypes from 'prop-types';
import {getHeaderTextStyles,getColumnWidth} from './common';

/**
 * The following is the header component that will be render for the table
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */
function Row({columnNames,row, width}){

    let textSize = getHeaderTextStyles( width );
    const columnStyle={
        width: getColumnWidth(columnNames, width)
    }

    return (<thead>
                <tr>
                    {columnNames.map( (column,index) =>{
                        return (<td key={index} className={textSize} style={columnStyle}>{row[column]}</td>)
                    })}    
                </tr>
            </thead>
    )
}

Row.propTypes = {
    columnNames: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired
};
export default Row;
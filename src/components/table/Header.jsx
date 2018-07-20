import React from 'react';
import PropTypes from 'prop-types';
import {getHeaderTextStyles,getColumnWidth} from './common';

/**
 * The following is the header component that will be render for the table
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */
function Header({columnNames,width}){

    let textSize = getHeaderTextStyles( width );
    const columnStyle={
        width: getColumnWidth(columnNames, width)
    }

    return (<thead>
                <tr>
                    {columnNames.map( header =>{
                        return (<th className={textSize} style={columnStyle}>{header}</th>)
                    })}    
                </tr>
            </thead>
    )
}

Header.propTypes = {
    columnNames: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired
};
export default Header;
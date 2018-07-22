import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Row from './Row';
import {  Post } from 'react-axios';


/**
 * The following is the header component that will be render for the table
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */


function Table({width, height, columnNames, rows}){

    //https://css-tricks.com/fitting-text-to-a-container/
    const tableHeight = {
        height:(height - 50)
    };

    console.log( `Table Container Height ${height}`);
            /*<div className="headercontainer" > **/
    return ( 

            <div className="tablecontainer" style={tableHeight}>
                <table>
                    <Header columnNames={columnNames} width={width} height={height} />
                    {   
                        rows.map( (row,index) =>{
                            return(<Row key={index} columnNames={columnNames} row={row} width={width}/>)
                        })
                    }
                </table>

        </div>
    )
}

Table.propTypes = {
    columnNames: PropTypes.array.isRequired
};
export default Table;
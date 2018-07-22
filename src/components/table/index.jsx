import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Row from './Row';


/**
 * The following is the header component that will be render for the table
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */


function Table({width, height}){

    let columnNames = ['alchol', 'location'];
    let rows = [{'alchol':'12.1', 'location':'Canada'},{'alchol':'13.5', 'location':'US'},{'alchol':'14.1', 'location':'U.K'},{'alchol':'15.1', 'location':'AUS'},{'alchol':'13.1', 'location':'Japan'},{'alchol':'12.1', 'location':'China'}]

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
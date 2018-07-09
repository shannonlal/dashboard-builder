import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Table.scss';

/**
 * The core count which can be added to the dashboard.  This is 
 * designed for a single stat variable
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */

 /**
  * The following function will convert the list of column names
  * into the proper format for the Table column
  * @param {array} columnNames
  */
function createTableColumns(columnNames, width){

    let minWidth = parseInt(width/columnNames.length)
    return columnNames.map( col =>{
        return {
            id:col,
            Header:col,
            accessor:col,
            show:true,
            minWidth:minWidth,
            style:{
                background:"green"
            }
        };
    });
}
function Table({width, height}){

    let columnNames = ['alchol', 'location'];
    let rows = [{'alchol':'12.1', 'location':'Canada'},{'alchol':'13.5', 'location':'US'},{'alchol':'14.1', 'location':'U.K'}]
    let columns = createTableColumns( columnNames, width );
    console.log( 'columns', columns);
    console.log( 'rows', rows);
    return (<ReactTable
                columns={columns}
                data={rows}
                showPagination={false}
                showPageSizeOptions={false}
                className="-striped -highlight"
                min-width=""
                loading={false}
        />)
}

Table.propTypes = {
    columnNames: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
};
export default Table;
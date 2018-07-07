import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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
function createTableColumns(columnNames){
    return columnNames.map( col =>{
        return {
            id:col,
            Header:col,
            accessor:col
        };
    });
}
function Table({columnNames, rows}){

    let columns = createTableColumns( columnNames );
    return (<ReactTable
                data={rows}
                columns={columns}
        />)
}

Table.propTypes = {
    columnNames: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
};
export default Table;
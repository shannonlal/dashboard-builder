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

class Table extends React.Component{

    constructor(props){
        super(props);
        
        this.setState(
            {width:props.width, height:props.height, 
                columnNames:[], rows:[]});
    }

    render(){
        //https://css-tricks.com/fitting-text-to-a-container/
        const tableHeight = {
            height:(this.state.height - 50)
        };

        console.log( `Table Container Height ${height}`);
                /*<div className="headercontainer" > **/
        return ( 

                <div className="tablecontainer" style={tableHeight}>
                    <table>
                        <Header columnNames={this.state.columnNames} width={this.state.width} height={this.state.height} />
                        {   
                            this.state.rows.map( (row,index) =>{
                                return(<Row key={index} columnNames={this.state.columnNames} row={row} width={this.state.width}/>)
                            })
                        }
                    </table>

            </div>
        )
    }
}

Table.propTypes = {
    columnNames: PropTypes.array.isRequired
};
export default Table;
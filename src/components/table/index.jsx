import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Row from './Row';
import 'whatwg-fetch';
/**
 * The following is the header component that will be render for the table
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */

function loadData(){
    return fetch(`http://localhost:3000`,{
        method: 'POST',
        body: {},
        headers: {
          'Content-Type':'application/json'
        }
      }).then( (response) =>{
        return response.json();
      });
}

class Table extends React.Component{

    constructor(props){
        super(props);
        
        this.setState(
            {width:props.width, height:props.height, 
                columnNames:[], rows:[]});
    }

    componentWillMount(){
        /*loadData().then( rst =>{
            console.log(`Data received ${rst}`);
        }).catch( err =>{
            console.error(`Error ${err}`);
        });*/
    }



    render(){
        //https://css-tricks.com/fitting-text-to-a-container/
        const tableHeight = {
            height:(this.state.height - 50)
        };

        console.log( `Table Container Height ${this.state.height}`);
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
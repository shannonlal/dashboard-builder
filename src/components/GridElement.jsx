import React from 'react';
import PropTypes from 'prop-types';


class DashElement extends React.Component {

    createGrid(){
        return Object.assign({}, this.props.gridData);
    }
    render() {
        console.log( 'Grid Data', this.props.dataGrid);
        console.log( 'Grid Data', this.props.label);
      return (
        <div  data-grid={this.props.dataGrid}>a</div>
      )
    }
  }

  export default DashElement;
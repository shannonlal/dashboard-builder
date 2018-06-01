import React from 'react';
import PropTypes from 'prop-types';


class DashElement extends React.Component {

    createGrid(){
        return this.props.dataGrid;
    }
    render() {
        console.log( 'Grid Data', this.props.dataGrid);
      return (
          <div key={this.props.label} data-grid={this.createGrid()}>{this.props.label}</div>
      )
    }
  }

  DashElement.propTypes = {
    label: PropTypes.string,
    dataGrid: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
        w: PropTypes.number,
        h: PropTypes.number
    })
  };

  export default DashElement;
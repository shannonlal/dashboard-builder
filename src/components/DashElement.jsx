import React from 'react';
import PropTypes from 'prop-types';
import {IMAGES} from '../images/';
import Chart from './Chart';


class DashElement extends React.Component {

    createGrid(){
        return Object.assign({}, this.props.gridData);
    }
    getImage( index ){
      let img = IMAGES[index];
      if( !img ){
        return IMAGES[0];
      }
      return img;
    }
    render() {

      const removeStyle = {
        position: "absolute",
        right: "2px",
        top: 0,
        cursor: "pointer"
      };
      return (
        <div>
          <span className="text basic-grid-item">
              <img className="grid-image" src={this.getImage( this.props.imageIndex )} alt="Paris" />
            </span>
            <span
              className="remove"
              style={removeStyle}
              onClick={this.props.onRemoveItem.bind(this, this.props.index)}
            >
              x
          </span> 
          {/*<Chart /> */} 
        </div>
      )
    }
  }

  export default DashElement;
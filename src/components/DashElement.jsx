import React from 'react';
import PropTypes from 'prop-types';
import {IMAGES} from '../images/';
import Chart from './Chart';
import sizeMe from 'react-sizeme';
import SizeComponent from './SizeComponent';

  function DashElement ({imageIndex, index, onRemoveItem,size}){
    const height = size.height;
    const width = size.width;
    console.log( 'Dash Element size', size);


    const getImage = function( index ){
      let img = IMAGES[index];
      if( !img ){
        return IMAGES[0];
      }
      return img;
    }

    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };

    return (
      <div>
        <span className="text basic-grid-item">
            <Chart height={height} width={width} />
          </span>
          <span
            className="remove"
            style={removeStyle}
            onClick={onRemoveItem.bind(this, index)}
          >
            x
        </span> 
      </div>
    )
  }


  export default sizeMe({monitorHeight:true,monitorWidth: true})(DashElement);

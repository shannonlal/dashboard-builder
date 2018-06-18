import React from 'react';
import PropTypes from 'prop-types';
import {IMAGES} from '../images/';
import Chart from './Chart';
import sizeMe from 'react-sizeme';
import SizeComponent from './SizeComponent';
const INITIAL_SIZE = 50;
function DashElement ({imageIndex, index, onRemoveItem, divId}){

    let elem = document.getElementById(divId), height, width;

    if( elem ){
      width = elem.offsetWidth;
      height = elem.offsetHeight;
    }else{
      width = INITIAL_SIZE;
      height = INITIAL_SIZE;
    }
    console.log( `Dash Element width ${width}, height ${height} `);


    const getImage = function( index ){
      console.log( 'Getting images', index);
      let img = IMAGES[index];
      console.log( 'image', img);
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
      <div id="MainGrid">
        <span className="text basic-grid-item">
            {/*<img className="grid-image" src={getImage( imageIndex )} alt="Paris" /> */}
            <Chart height={height} width={width} />
          </span>
          <span
            className="remove"
            style={removeStyle}
            onClick={onRemoveItem.bind(this, index)}
          >
            x
        </span> 
        {/*<Chart /> */} 
      </div>
    )
  }


  export default sizeMe({monitorHeight:true,monitorWidth: true})(DashElement);

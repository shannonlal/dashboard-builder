import React from 'react';
import PropTypes from 'prop-types';
import {IMAGES} from '../images/';
import Chart from './Chart';
import sizeMe from 'react-sizeme';
import SizeComponent from './SizeComponent';
import Label from './Label';
import Count from './Count';
const INITIAL_SIZE = 50;
function DashElement ({imageIndex, index, onRemoveItem, divId, elementType, label}){

    let elem = document.getElementById(divId), height, width;

    if( elem ){
      width = elem.offsetWidth;
      height = elem.offsetHeight;
    }else{
      width = INITIAL_SIZE;
      height = INITIAL_SIZE;
    }
    //console.log( `Dash Element width ${width}, height ${height} `);


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

    const getElement= function( elementType, h, w, label ) {
      console.log( `Get Element ${elementType}`);
      if( elementType === 'LABEL'){
        console.log( `Got Label ${label}`);
        return (<Label label={label} />)
      }else if( elementType === 'COUNT'){
        return ( <Count />)
      }else{
        return (<Chart height={h} width={w} />)
      }
    }

    return (
      <div id="MainGrid">
        <span className="text basic-grid-item">
            {/*<img className="grid-image" src={getImage( imageIndex )} alt="Paris" /> */}
            {getElement( elementType, height, width, label)}
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

import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';
import sizeMe from 'react-sizeme';
import {ELEMENT_TYPES} from '../common';
import Label from './Label';
import Count from './Count';
const INITIAL_SIZE = 50;

const removeStyle = {
  position: "absolute",
  right: "2px",
  top: 0,
  cursor: "pointer"
};

/**
 * The core DashElement
 * TODO. Define shape for this element
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */
function DashElement ({index, onRemoveItem, divId, elementType, label, count}){
    let elem = document.getElementById(divId), height, width;

    if( elem ){
      width = elem.offsetWidth;
      height = elem.offsetHeight;
    }else{
      width = INITIAL_SIZE;
      height = INITIAL_SIZE;
    }

    const getElement= function( elementType, h, w, label ) {
      if( elementType === ELEMENT_TYPES.LABEL){
        return (<Label label={label} />)
      }else if( elementType === ELEMENT_TYPES.STAT){
        return ( <Count count={count}/>)
      }else{
        return (<Chart height={h} width={w} />)
      }
    }

    return (
      <div>
        <span className="text basic-grid-item">
            {getElement( elementType, height, width, label)}
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

  DashElement.propTypes = {
    index: PropTypes.number.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    divId: PropTypes.string.isRequired,
    elementType: PropTypes.string.isRequired,
    label: PropTypes.string,
    count: PropTypes.number
  };

  export default sizeMe({monitorHeight:true,monitorWidth: true})(DashElement);

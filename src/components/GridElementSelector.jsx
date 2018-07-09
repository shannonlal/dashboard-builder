import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';
import {ELEMENT_TYPES} from '../common';

const modalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

import chart from '../images/plotly-logo.png';
import title from '../images/title.png';
import count from '../images/count.png';
import table from '../images/table.png';

const IMAGE_LIST = [
  {image:chart, value:ELEMENT_TYPES.CHART},
  {image:title, value:ELEMENT_TYPES.LABEL},
  {image:count, value:ELEMENT_TYPES.STAT},
  {image:table, value:ELEMENT_TYPES.TABLE}
];

const SELECT_LABEL = 'Select Component to Add';  
class GridElementSelector extends React.Component {
  onPick(image) {
    let props = {};
    if( image.value === ELEMENT_TYPES.LABEL){
      props.label = `Test Label${parseInt(Math.random()*10)}`;
    }else if( image.value === ELEMENT_TYPES.STAT){
      props.count = parseInt(Math.random()*100);
    }
    this.props.addItem(image.value,image.value, props );
  }
  render() {
    return (
        <Modal
          isOpen={this.props.isOpen}
          onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.addItem}
          style={modalStyles}
          contentLabel="Element Selection"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>{SELECT_LABEL}</h2>
          <div>
            <ImagePicker 
              images={IMAGE_LIST.map((image, i) => ({src: image.image, value: image.value}))}
              onPick={this.onPick.bind(this)}
            />
          </div>
        </Modal>
    );
  }
}

GridElementSelector.propTypes = {
    afterOpenModal: PropTypes.func,
    closeModal: PropTypes.func,
    isOpen: PropTypes.bool
};

export default GridElementSelector;
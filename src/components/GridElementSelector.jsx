import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  //import images from local
import chart from '../images/plotly-logo.png';
import title from '../images/title.png';
import count from '../images/count.png';
import img4 from '../images/london.jpeg';
import img5 from '../images/mountains.jpeg';
import img6 from '../images/newyork.jpeg';
import img7 from '../images/paris.jpeg';
 
const imageList = [
  {image:chart, value:'CHART'},{image:title, value:'LABEL'},{image:count, value:'COUNT'}];

class GridElementSelector extends React.Component {
  onPick(image) {
    console.log( 'Image picked', image);
    this.props.addItem(image.value,image.value );
  }
  render() {
    //<button onClick={this.props.addItem}>close</button> -->
    return (
        <Modal
          isOpen={this.props.isOpen}
          onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.addItem}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          
          <div>
            <ImagePicker 
              images={imageList.map((image, i) => ({src: image.image, value: image.value}))}
              onPick={this.onPick.bind(this)}
            />
            {/*<button type="button" onClick={() => console.log(this.state.image)}>OK</button> */}
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
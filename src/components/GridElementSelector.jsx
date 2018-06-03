import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

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

class GridElementSelector extends React.Component {
  render() {
    return (
        <Modal
          isOpen={this.props.isOpen}
          onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.props.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
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
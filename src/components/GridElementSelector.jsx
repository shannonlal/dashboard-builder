import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
class GridElementSelector extends React.Component {
  render() {
    return (
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
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

};


export default GridElementSelector;
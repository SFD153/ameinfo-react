/**
 *
 * ImageBox
 *
 */

import React, { Fragment } from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import jsxToString from 'jsx-to-string';
import Parser from 'html-react-parser';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class ImageBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ open: true });
  }

  handleCloseModal() {
    this.setState({ open: false });
  }

  render() {
    const { children } = this.props;
    const { open } = this.state;
    const content = Parser(jsxToString(children));
    return (
      <Fragment>
        <button
          className="image-box"
          onClick={this.handleOpenModal}
          type="button"
        >
          {content}
        </button>
        <Modal
          classNames={{
            modal: 'media-modal',
            closeButton: 'media-modal-close-button',
            overlay: 'media-modal-overlay',
          }}
          open={open}
          onClose={this.handleCloseModal}
          center
        >
          {content}
        </Modal>
      </Fragment>
    );
  }
}

ImageBox.propTypes = {
  children: PropTypes.any,
};

export default ImageBox;

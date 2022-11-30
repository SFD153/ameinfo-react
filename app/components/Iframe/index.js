/**
 *
 * Iframe
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Iframe extends React.PureComponent {
  componentDidMount() {
    this.iframe.addEventListener('load', this.props.onLoad);
  }

  render() {
    return (
      <iframe
        title="iframe"
        ref={iframe => {
          this.iframe = iframe;
        }}
        {...this.props}
      />
    );
  }
}

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
};

export default Iframe;

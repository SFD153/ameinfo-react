/**
 *
 * ScrollToTop
 *
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class ScrollToTop extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object,
};

export default withRouter(ScrollToTop);

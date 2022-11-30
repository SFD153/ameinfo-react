/**
 *
 * RefreshAds
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class RefreshAds extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (window.googletag && window.googletag.destroySlots) {
        window.googletag.destroySlots();
      }
    }
  }

  render() {
    return null;
  }
}

RefreshAds.propTypes = {
  location: PropTypes.object,
};

export default withRouter(RefreshAds);

/**
 *
 * AdUnit
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class AdUnit extends React.PureComponent {
  componentDidMount() {
    // Render for next page
    this.displayAd();

    // Render when fully loaded
    window.addEventListener('load', this.displayAd.bind(this));
  }

  displayAd() {
    const { googletag } = window;
    const { id } = this.props;
    if (googletag) {
      googletag.cmd.push(() => {
        googletag.display(id);
      });
    }
  }

  render() {
    const { id } = this.props;
    return <div id={id} {...this.props} />;
  }
}

AdUnit.propTypes = {
  id: PropTypes.string,
};

export default AdUnit;

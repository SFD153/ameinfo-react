/**
 *
 * ReturnToTop
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable no-script-url, jsx-a11y/anchor-is-valid */
function ReturnToTop() {
  return (
    <Fragment>
      <a
        href="javascript:"
        id="return-to-top"
        style={{ display: 'inline' }}
        onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
      >
        <span className="fa fa-chevron-up" />
      </a>
    </Fragment>
  );
}

ReturnToTop.propTypes = {};

export default ReturnToTop;

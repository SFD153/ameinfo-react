/**
 *
 * Summary
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Summary(props) {
  const { children } = props;
  return <p className="black">{children}</p>;
}

Summary.propTypes = {
  children: PropTypes.any,
};

export default Summary;

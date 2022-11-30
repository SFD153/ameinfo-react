/**
 *
 * Heading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Heading(props) {
  const { source } = props;
  return (
    <h4 className="red_side med_txt">
      <img src={source} className="s_logo" alt="ameinfo heading" />
    </h4>
  );
}

Heading.propTypes = {
  source: PropTypes.string,
};

export default Heading;

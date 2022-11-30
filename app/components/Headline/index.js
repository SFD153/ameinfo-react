/**
 *
 * Headline
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Headline({ title }) {
  return (
    <div className="relate">
      <h4 className="red_side med_txt">{title}</h4>
    </div>
  );
}

Headline.propTypes = {
  title: PropTypes.string,
};

export default Headline;

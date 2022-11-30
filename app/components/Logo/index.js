/**
 *
 * Logo
 *
 */

import React from 'react';
import LogoAME from 'assets/images/logo.png';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Logo() {
  return <img src={LogoAME} className="img-fluid logo" alt="LogoAME" />;
}

Logo.propTypes = {};

export default Logo;

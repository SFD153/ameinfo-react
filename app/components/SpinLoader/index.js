/**
 *
 * SpinLoader
 *
 */

import React from 'react';
import { Col, Row } from 'reactstrap';
import { PulseLoader } from 'react-spinners';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SpinLoader() {
  return (
    <Row className="mt-5 mb-5 justify-content-center align-items-center">
      <Col md={12} style={{ textAlign: 'center' }}>
        <PulseLoader size={15} color="#9E9E9E" />
      </Col>
    </Row>
  );
}

SpinLoader.propTypes = {};

export default SpinLoader;

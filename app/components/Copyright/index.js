/**
 *
 * Copyright
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Copyright() {
  const year = new Date().getFullYear();
  return (
    <section className="copy">
      <Container>
        <Row>
          <Col md="6">
            <p>
              © {year}, <span>MEDQIAQUEST</span>. All rights reserved
            </p>
          </Col>

          <Col md="6">
            <ul className="list-inline contact_ul d-flex justify-content-end">
              <li className="list-inline-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/advertising">Advertising</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

Copyright.propTypes = {};

export default Copyright;

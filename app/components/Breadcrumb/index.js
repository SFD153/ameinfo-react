/**
 *
 * Breadcrumb
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Breadcrumb() {
  return (
    <section className="breadcrumb_sec">
      <Container>
        <Row>
          <Col lg="12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="post.html#">
                  <i className="fa fa-home" />
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="post.html#">Sectors</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="post.html#">Technology</Link>
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

Breadcrumb.propTypes = {};

export default Breadcrumb;

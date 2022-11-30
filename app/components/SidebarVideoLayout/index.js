/**
 *
 * SidebarVideoLayout
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import SidebarVideo from 'containers/SidebarVideo/Loadable';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SidebarVideoLayout({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <section className="leave_sec" id="live_sec">
          <Container fluid>
            <Row>
              <Col lg="12">
                <Container>
                  <Row>
                    <Col lg="9">
                      <Component {...matchProps} />
                    </Col>
                    <Col lg="3" className="side_media">
                      <SidebarVideo {...matchProps} />
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    />
  );
}

SidebarVideoLayout.propTypes = {};

export default SidebarVideoLayout;

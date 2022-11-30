/**
 *
 * NotFound
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Container, Col } from 'reactstrap';
import { Mobile, Desktop, Tablet } from 'components/Responsive';
import { withRouter, Link } from 'react-router-dom';
import error404 from 'assets/images/error404.png';
import error404Crop from 'assets/images/error404-crop.png';

/* eslint-disable react/prefer-stateless-function */
export class NotFound extends React.PureComponent {
  render() {
    return (
      <div className="wrapper fourofour">
        <div className="wrapper" rel="home">
          <Container>
            <Col sm="12" xs="12" md="8" lg="12" className="white-bg">
              <Col lg="12">
                <Desktop>
                  <div className="bg-image">
                    <img src={error404} alt="Error 404" />
                  </div>
                </Desktop>
                <Tablet>
                  <div className="bg-image">
                    <img src={error404Crop} alt="Error 404" />
                  </div>
                </Tablet>
                <Mobile>
                  <div className="bg-image">
                    <img src={error404Crop} alt="Error 404" />
                  </div>
                </Mobile>
                <div className="span6 content-text">
                  <br />
                  <p>
                    <span className="text2">Page not found</span>
                  </p>
                  <p className="text3">
                    We&apos;re sorry, the page you are looking for isn&apos;t
                    here.
                  </p>
                  <p className="text3">
                    The link may either be broken or no longer exists.
                  </p>
                  <br />
                  <p className="text3">
                    You can click on the search icon above or take a look at our{' '}
                    <Link to="/">Homepage</Link> for the latest reports.
                  </p>
                  <br />
                  <br />
                </div>
              </Col>
            </Col>
          </Container>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(NotFound);

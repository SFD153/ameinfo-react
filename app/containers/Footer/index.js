/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { get } from 'lodash';
import logo from 'assets/images/logo.png';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFooter from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectSettings } from '../AppSetting/selectors';

/* eslint-disable react/prefer-stateless-function */
export class Footer extends React.PureComponent {
  renderLink(type, link, title) {
    if (type === 'link') {
      return (
        <a href={link} target="_blank">
          {title}
        </a>
      );
    }

    if (type === 'page') {
      return <Link to={`/${link}`}>{title}</Link>;
    }

    if (type === 'category') {
      return <Link to={`/${link}`}>{title}</Link>;
    }

    return null;
  }

  render() {
    const { settings } = this.props;
    const menus = get(settings, 'menu_footer', []);

    return (
      <footer>
        <Container>
          <Row>
            <Col md="8" lg="6">
              <Link to="/">
                <img src={logo} className="img-fluid logo" alt="Logo" />
              </Link>
            </Col>
            <Col md="4" lg="6">
              <ul className="list-inline f_icon mt-4 d-flex justify-content-end">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/ameinfoeng/"
                    target="_blank"
                    className="facebook-icon"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/AMEInfonews"
                    target="_blank"
                    className="twitter-icon"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.youtube.com/channel/UCssc0yrzx-C3Q8zNzxT5Wxg"
                    target="_blank"
                    className="youtube-icon"
                  >
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/company/ame-info"
                    target="_blank"
                    className="linkedin-icon"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row className="site-links">
            {menus.map(menu => (
              <Col md="3" key={uniqid()}>
                <h4>{get(menu, 'title')}</h4>
                <ul className="list-unstyled sites">
                  {get(menu, 'children', []).map(children => {
                    const type = get(children, 'type');
                    const title = get(children, 'title');
                    let link = get(children, 'url');

                    if (type !== 'link') {
                      link = get(children, 'slug');
                    }

                    return (
                      <li key={uniqid()}>
                        {this.renderLink(type, link, title)}
                      </li>
                    );
                  })}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  settings: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  footer: makeSelectFooter(),
  settings: makeSelectSettings(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'footer', reducer });
const withSaga = injectSaga({ key: 'footer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Footer);

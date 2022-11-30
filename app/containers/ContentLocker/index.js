/**
 *
 * ContentLocker
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

import injectReducer from 'utils/injectReducer';
import makeSelectContentLocker from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class ContentLocker extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleMatchPassword = this.handleMatchPassword.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleMatchPassword() {
    const { password } = this.state;
    let isMatch = false;
    if (password === this.props.password) {
      isMatch = true;
    }

    this.props.onMatchPassword(isMatch);
  }

  render() {
    return (
      <Container className="content-locker">
        <Row>
          <Col md={12}>
            <h1>Protected: Password</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>
              This content is password protected. To view it please enter your
              password below:
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <InputGroup>
              <Input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={this.handleMatchPassword}>
                  Submit
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

ContentLocker.propTypes = {
  onMatchPassword: PropTypes.func,
  password: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  contentLocker: makeSelectContentLocker(),
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

const withReducer = injectReducer({ key: 'contentLocker', reducer });

export default compose(
  withReducer,
  withConnect,
)(ContentLocker);

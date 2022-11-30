/**
 *
 * TopHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { get, isEmpty } from 'lodash';
import uniqid from 'uniqid';
import Modal from 'react-responsive-modal';
import { getWeatherIcon } from 'utils/helpers';
import agent from 'utils/agent';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from 'reactstrap';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import AdUnit from 'components/AdUnit';
import { makeSelectSettings } from '../AppSetting/selectors';
import makeSelectTopHeader, { makeSelectWeather } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class TopHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstName: '',
      lastName: '',
      email: '',
      privacy: false,
      msg: null,
      error: null,
    };

    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  handleKeyDown() {
    this.onOpenModal();
  }

  handleChange(e) {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, email, privacy } = this.state;
    const data = {
      firstName,
      lastName,
      email,
      privacy,
    };

    let error = null;
    let msg = null;
    try {
      const response = await agent.post('/mail/subscribe').send(data);
      msg = response.body.message;
    } catch (e) {
      error = e;
    }

    this.setState({ msg, error });
  }

  render() {
    const {
      open,
      firstName,
      lastName,
      email,
      privacy,
      msg,
      error,
    } = this.state;

    const { weather, settings } = this.props;
    const menus = get(settings, 'menu_topbar', []);

    const tem = get(weather, 'main.temp', '0');
    const icon = get(weather, 'weather[0].icon', '');

    return (
      <section className="pre-header">
        <div className="top-banner">
          <AdUnit id="div-gpt-ad-7742036-13" />
        </div>

        <Container>
          <Row>
            <Col md="8">
              <ul className="list-inline temp">
                <li className="list-inline-item">
                  {!isEmpty(icon) && (
                    <img
                      src={getWeatherIcon(icon)}
                      alt="weather icon"
                      width="28px"
                      height="23px"
                    />
                  )}
                  {Math.round(tem)}
                  &nbsp;
                  <sup>°c</sup> Dubai
                </li>
                <li className="list-inline-item">
                  <ul className="list-inline">
                    {menus.map(menu => (
                      <li key={uniqid()} className="list-inline-item m-none">
                        <Link to={`/${get(menu, 'slug', 'no-page')}`}>
                          {get(menu, 'title')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </Col>

            <Col md="4">
              <ul className="list-inline d-flex justify-content-end">
                <li className="list-inline-item">
                  <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>NEWSLETTER</h2>
                    <h3>Join our World!</h3>
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="First Name"
                          value={firstName}
                          required
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Last Name"
                          value={lastName}
                          required
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          value={email}
                          required
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="privacy"
                            checked={privacy}
                            required
                            onChange={this.handleChange}
                          />
                          I have read the privacy policy, I am 16 years of age
                          or older and I authorize the processing of my personal
                          data for the purpose of receiving the newsletter.
                        </Label>
                        &nbsp;
                      </FormGroup>
                      <Button type="submit" color="primary">
                        SIGN UP
                      </Button>
                    </Form>
                    <br />
                    {!isEmpty(msg) && <Alert color="success">{msg}</Alert>}
                    {!isEmpty(error) && <Alert color="danger">{error}</Alert>}
                  </Modal>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/AMEInfonews" target="_blank">
                    <i className="fa fa-twitter m_icon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/ameinfoeng/"
                    target="_blank"
                  >
                    <i className="fa fa-facebook m_icon" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

TopHeader.propTypes = {
  settings: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  weather: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  topHeader: makeSelectTopHeader(),
  settings: makeSelectSettings(),
  weather: makeSelectWeather(),
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

const withReducer = injectReducer({ key: 'topHeader', reducer });
const withSaga = injectSaga({ key: 'topHeader', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TopHeader);

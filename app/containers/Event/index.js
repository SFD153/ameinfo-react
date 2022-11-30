/**
 *
 * Event
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Modal, ModalBody } from 'reactstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Iframe from 'components/Iframe';

import makeSelectEvent from './selectors';
import reducer from './reducer';
import saga from './saga';
import ReturnToTop from '../../components/ReturnToTop';

/* eslint-disable react/prefer-stateless-function, consistent-return, no-script-url */
export class Event extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      xaviar: false,
      khaled: false,
      emmanuel: false,
      ahmed: false,
    };

    this.innerIframe = null;
    this.handleIframeLoaded = this.handleIframeLoaded.bind(this);
    this.handleXaviarModalToggle = this.handleXaviarModalToggle.bind(this);
    this.handleKhaledModalToggle = this.handleKhaledModalToggle.bind(this);
    this.handleEmmanuelModalToggle = this.handleEmmanuelModalToggle.bind(this);
    this.handleAhmedModalToggle = this.handleAhmedModalToggle.bind(this);
  }

  componentDidMount() {
    document.getElementById('main_div').classList.add('no-margin-bm');
  }

  getInnerIframe(iframe) {
    return iframe.contentDocument
      ? iframe.contentDocument
      : iframe.contentWindow.document;
  }

  handleXaviarModalToggle() {
    this.hideMenu('xaviar');
    this.setState(prevState => ({
      xaviar: !prevState.xaviar,
    }));
  }

  handleKhaledModalToggle() {
    this.hideMenu('khaled');
    this.setState(prevState => ({
      khaled: !prevState.khaled,
    }));
  }

  handleEmmanuelModalToggle() {
    this.hideMenu('emmanuel');
    this.setState(prevState => ({
      emmanuel: !prevState.emmanuel,
    }));
  }

  handleAhmedModalToggle() {
    this.hideMenu('ahmed');
    this.setState(prevState => ({
      ahmed: !prevState.ahmed,
    }));
  }

  hideMenu(modalName) {
    const menu = document.getElementById('main_div');
    if (!this.state[modalName]) {
      menu.classList.remove('show-navigation');
    }
  }

  handleIframeLoaded() {
    if (this.innerIframe) {
      return false;
    }

    const iframe = document.getElementById('iframe');
    const innerIframe = this.getInnerIframe(iframe);
    this.innerIframe = innerIframe;

    // Set exactly height of iframe
    iframe.setAttribute('height', innerIframe.body.scrollHeight);

    // Add event for xaviar modal
    const xaviarModal = innerIframe.querySelector(
      'a[data-target="#largeModal"]',
    );
    xaviarModal.removeAttribute('data-target');
    xaviarModal.addEventListener('click', this.handleXaviarModalToggle);

    // Add event for khaled modal
    const khaledModal = innerIframe.querySelector(
      'a[data-target="#largeModal1"]',
    );
    khaledModal.removeAttribute('data-target');
    khaledModal.addEventListener('click', this.handleKhaledModalToggle);

    // Add event for emmanuel modal
    const emmanuelModal = innerIframe.querySelector(
      'a[data-target="#largeModal2"]',
    );
    emmanuelModal.removeAttribute('data-target');
    emmanuelModal.addEventListener('click', this.handleEmmanuelModalToggle);

    // Add event for ahmed modal
    const ahmedModal = innerIframe.querySelector(
      'a[data-target="#largeModal3"]',
    );
    ahmedModal.removeAttribute('data-target');
    ahmedModal.addEventListener('click', this.handleAhmedModalToggle);

    // Smooth scroll when click anchor
    this.smoothScollView('overview', innerIframe);
    this.smoothScollView('speakers', innerIframe);
    this.smoothScollView('agenda', innerIframe);
    this.smoothScollView('partners', innerIframe);
    this.smoothScollView('venue', innerIframe);
    this.smoothScollView('contact', innerIframe);
    this.smoothScollView('register', innerIframe);
  }

  smoothScollView(target, iframe) {
    const anchor = iframe.querySelector(`a[href="#${target}"]`);
    const section = iframe.querySelector(`#${target}`);
    anchor.setAttribute('href', 'javascript:void(0)');
    anchor.addEventListener('click', () => {
      section.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  }

  closeModal(iframe) {
    const innerIframe = this.getInnerIframe(document.getElementById(iframe));
    this[iframe] = innerIframe;

    // Close Xaviar Modal
    const button = innerIframe.querySelector('button');
    const state = iframe.replace('Iframe', '');
    button.addEventListener('click', () => {
      this.setState({ [state]: false });
    });
  }

  render() {
    const isDev = process.env.NODE_ENV === 'development';
    const BASE_URL = isDev ? 'localhost:3000' : 'ameinfo.cf';
    return (
      <section id="event">
        <Helmet>
          <title>Event</title>
          <meta name="description" content="Description of Event" />
        </Helmet>
        <section>
          <Iframe
            src={`http://${BASE_URL}/event-html/`}
            frameBorder="0"
            width="100%"
            height="5129px"
            className="fr-draggable"
            scrolling="no"
            id="iframe"
            onLoad={this.handleIframeLoaded}
          />
          <Modal
            isOpen={this.state.xaviar}
            toggle={this.handleXaviarModalToggle}
          >
            <ModalBody>
              <Iframe
                src={`http://${BASE_URL}/event-html/xavier.html`}
                frameBorder="0"
                width="100%"
                height="600px"
                scrolling="no"
                id="xaviarIframe"
                onLoad={() => this.closeModal('xaviarIframe')}
              />
            </ModalBody>
          </Modal>
          <Modal
            isOpen={this.state.khaled}
            toggle={this.handleKhaledModalToggle}
          >
            <ModalBody>
              <Iframe
                src={`http://${BASE_URL}/event-html/khaled.html`}
                frameBorder="0"
                width="100%"
                height="430px"
                scrolling="no"
                id="khaledIframe"
                onLoad={() => this.closeModal('khaledIframe')}
              />
            </ModalBody>
          </Modal>
          <Modal
            isOpen={this.state.emmanuel}
            toggle={this.handleEmmanuelModalToggle}
          >
            <ModalBody>
              <Iframe
                src={`http://${BASE_URL}/event-html/emmanuel.html`}
                frameBorder="0"
                width="100%"
                height="580px"
                scrolling="no"
                id="emmanuelIframe"
                onLoad={() => this.closeModal('emmanuelIframe')}
              />
            </ModalBody>
          </Modal>
          <Modal isOpen={this.state.ahmed} toggle={this.handleAhmedModalToggle}>
            <ModalBody>
              <Iframe
                src={`http://${BASE_URL}/event-html/ahmed.html`}
                frameBorder="0"
                width="100%"
                height="480px"
                scrolling="no"
                id="ahmedIframe"
                onLoad={() => this.closeModal('ahmedIframe')}
              />
            </ModalBody>
          </Modal>
          <ReturnToTop />
        </section>
      </section>
    );
  }
}

// Event.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  event: makeSelectEvent(),
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

const withReducer = injectReducer({ key: 'event', reducer });
const withSaga = injectSaga({ key: 'event', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Event);

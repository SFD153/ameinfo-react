/**
 *
 * TopBanner
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import cn from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import Waypoint from 'react-waypoint';
import IsScrolling from 'components/IsScrolling';
import AdUnit from 'components/AdUnit';
import IsGPT from 'components/IsGPT';
import { Default, Mobile } from 'components/Responsive';
import { first, last } from 'lodash';

import injectReducer from 'utils/injectReducer';
import { withRouter } from 'react-router-dom';
import makeSelectTopBanner from './selectors';
import {
  makeSelectAdRectangle,
  makeSelectAdRectangleMobile,
} from '../App/selectors';
import { makeSelectDropdownMenuHeight } from '../Menu/selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class TopBanner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: true,
      stick: false,
    };

    this.handleSlotRenderEnd = this.handleSlotRenderEnd.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.resetSticky = this.resetSticky.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.resetSticky();
    }
  }

  resetSticky() {
    this.setState({ isSticky: true });
  }

  handleSlotRenderEnd(event) {
    const { isSticky } = this.state;
    const { size, slot } = event;
    const targeting = first(slot.getTargeting('Pos'));
    if (first(size) === 970 && last(size) === 250) {
      if (targeting === 'Leaderboard') {
        if (isSticky) {
          this.setState({ isSticky: false });
        }
      }
    }
  }

  handleEnter() {
    this.setState({ stick: false });
  }

  handleLeave() {
    this.setState({ stick: true });
  }

  render() {
    const { stick, isSticky } = this.state;
    const { dropdownMenuHeight, isScrollingUp, isGPTLoaded } = this.props;

    const { googletag } = window;
    if (googletag && isGPTLoaded) {
      googletag
        .pubads()
        .addEventListener('slotRenderEnded', this.handleSlotRenderEnd);
    }

    const classNames = cn({
      'top-banner_sticky': isSticky,
      'top-banner_style': true,
      'top-banner_pin': isScrollingUp,
      'top-banner_un-pin': true,
      'top-banner_space': stick,
    });

    const styles = { textAlign: 'center' };
    if (dropdownMenuHeight > 0) {
      styles.top = `${dropdownMenuHeight + 53}px`;
    }

    return (
      <Fragment>
        <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave} />
        <section id="top_banner" className={classNames} style={styles}>
          <Container fluid>
            <Row>
              <Col md="12" className="pad0" id="top-banner">
                <Default>
                  {isGPTLoaded && <AdUnit id="div-gpt-ad-7742036-2" />}
                </Default>
                <Mobile>
                  {isGPTLoaded && <AdUnit id="div-gpt-ad-7742036-9" />}
                </Mobile>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

TopBanner.propTypes = {
  dropdownMenuHeight: PropTypes.number,
  isScrollingUp: PropTypes.bool,
  isGPTLoaded: PropTypes.bool,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  topBanner: makeSelectTopBanner(),
  adRectangle: makeSelectAdRectangle(),
  adRectangleMobile: makeSelectAdRectangleMobile(),
  dropdownMenuHeight: makeSelectDropdownMenuHeight(),
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

const withReducer = injectReducer({ key: 'topBanner', reducer });

export default compose(
  IsGPT,
  IsScrolling,
  withRouter,
  withReducer,
  withConnect,
)(TopBanner);

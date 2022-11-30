/**
 *
 * SidebarVideo
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import AdUnit from 'components/AdUnit';
import { FeaturedBannerLoader, SideAdLoader } from 'components/ContentLoader';
import IsGPT from 'components/IsGPT';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class SidebarVideo extends React.PureComponent {
  render() {
    const { isGPTLoaded } = this.props;
    return (
      <section className="side-bar side-bar-full-height">
        <Fragment>
          <FeaturedBannerLoader ready={isGPTLoaded}>
            <AdUnit id="div-gpt-ad-7742036-3" />
          </FeaturedBannerLoader>
          <SideAdLoader ready={isGPTLoaded}>
            <AdUnit
              className="side-banner mt-4 mb-5"
              id="div-gpt-ad-7742036-4"
            />
          </SideAdLoader>
        </Fragment>
      </section>
    );
  }
}

SidebarVideo.propTypes = {
  isGPTLoaded: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'sidebar', reducer });

export default compose(
  IsGPT,
  withReducer,
  withConnect,
)(SidebarVideo);

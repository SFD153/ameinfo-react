/**
 *
 * AppSetting
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAppSetting from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class AppSetting extends React.PureComponent {
  render() {
    return null;
  }
}

AppSetting.propTypes = {};

const mapStateToProps = createStructuredSelector({
  appSetting: makeSelectAppSetting(),
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

const withReducer = injectReducer({ key: 'appSetting', reducer });
const withSaga = injectSaga({ key: 'appSetting', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AppSetting);

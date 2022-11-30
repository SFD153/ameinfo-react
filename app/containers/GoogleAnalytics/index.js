/**
 *
 * GoogleAnalytics
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

/* eslint-disable react/prefer-stateless-function */
export class GoogleAnalytics extends React.PureComponent {
  componentDidMount() {
    const { pathname, search } = this.props.location;
    ReactGA.initialize('UA-136827935-1');
    ReactGA.pageview(pathname + search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const { pathname, search } = this.props.location;
      ReactGA.initialize('UA-136827935-1');
      ReactGA.pageview(pathname + search);
    }
  }

  render() {
    return null;
  }
}

GoogleAnalytics.propTypes = {
  location: PropTypes.object,
};

export default compose(withRouter)(GoogleAnalytics);

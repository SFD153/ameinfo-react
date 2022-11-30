/**
 *
 * InjectAds
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import agent from 'utils/agent';
import last from 'lodash/last';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import makeSelectInjectAds from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function, no-eval */
export class InjectAds extends React.PureComponent {
  async componentDidMount() {
    const { googletag } = window;
    if (googletag) {
      googletag.cmd.push(async () => {
        const route = this.getCurrentRoute();
        await this.executeAdScript(route);
      });
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const { googletag } = window;
      if (googletag) {
        googletag.cmd.push(async () => {
          const route = this.getCurrentRoute();
          await this.executeAdScript(route);
        });

        if (!this.isPost()) {
          googletag.pubads().refresh();
        }
      }
    }
  }

  getCurrentRoute() {
    const { pathname } = this.props.location;
    const tree = pathname.split('/').filter(item => !isEmpty(item));
    const count = tree.length;
    const exclude = ['tag', 'search', 'author'];

    let route;
    if (pathname === '/') {
      route = 'home';
    } else if (exclude.some(e => pathname.indexOf(e) > -1)) {
      route = 'home';
    } else if (tree.indexOf('video') > -1) {
      route = 'home';
    } else if (count === 3) {
      tree.splice(-1, 1);
      route = last(tree);
    } else if (tree.indexOf('lifestyle') > -1) {
      route = 'lifestyle';
    } else {
      route = last(tree);
    }

    return route;
  }

  isPost() {
    const { pathname } = this.props.location;
    const tree = pathname.split('/').filter(item => !isEmpty(item));
    const count = tree.length;

    let flag;
    if (pathname === '/') {
      flag = false;
    } else if (count === 3) {
      flag = true;
    } else if (tree.indexOf('lifestyle') > -1) {
      flag = count !== 1;
    } else {
      flag = false;
    }

    return flag;
  }

  async executeAdScript(route) {
    const response = await agent.get(`/ads/${route}`);
    const scripts = get(response.body, 'script');
    const { googletag } = window;

    // Script must not be empty
    if (googletag && scripts) {
      const dom = document.createElement('html');
      dom.innerHTML = scripts;
      dom.querySelectorAll('script').forEach(script => {
        if (script.innerHTML.indexOf('googletag.cmd.push') > -1) {
          eval(script.innerHTML);
          googletag.pubads().refresh();
        }
      });
    }
  }

  render() {
    return null;
  }
}

InjectAds.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  injectAds: makeSelectInjectAds(),
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

const withReducer = injectReducer({ key: 'injectAds', reducer });
const withSaga = injectSaga({ key: 'injectAds', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(InjectAds);

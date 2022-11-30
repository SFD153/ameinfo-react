/**
 *
 * IsGpt
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
const IsGPTHoc = TheComponent =>
  class IsGPT extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        load: false,
      };
    }

    componentWillMount() {
      // Let's destructure the cmd array out of GPT.
      const { googletag } = window;
      const { cmd } = googletag;

      if (cmd) {
        cmd.push(() => this.setState({ load: true }));
      }
    }

    render() {
      const { load } = this.state;
      return <TheComponent isGPTLoaded={load} />;
    }
  };

IsGPTHoc.propTypes = {};

export default IsGPTHoc;

/**
 *
 * ReadMore
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from './Button';

/* eslint-disable react/prefer-stateless-function */
class ReadMore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      full: null,
    };
  }

  componentDidMount() {
    const { text } = this.props;
    const words = text.split(' ');
    const LIMIT = 53;

    let full = text;
    if (words.length > LIMIT) {
      full = words.slice(0, LIMIT).join(' ');
    }

    this.setState({ full });
  }

  render() {
    const { full } = this.state;
    return (
      <p>
        {full} <Button>View more</Button>
      </p>
    );
  }
}

ReadMore.propTypes = {
  text: PropTypes.string,
};

export default ReadMore;

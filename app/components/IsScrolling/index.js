/**
 *
 * IsScrolling
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
const IsScrollingHoc = TheComponent =>
  class IsScrolling extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        direction: '',
      };

      this.previousScrollPosition = window.pageYOffset;
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      const { previousScrollPosition } = this;
      let direction;

      if (previousScrollPosition > currentScrollPosition) {
        direction = 'UP';
      } else {
        direction = 'DOWN';
      }

      if (this.state.direction !== direction) {
        this.setState({ direction });
      }

      this.previousScrollPosition = currentScrollPosition;
    };

    render() {
      return (
        <TheComponent
          {...this.props}
          isScrolling={this.state.direction !== ''}
          isScrollingUp={this.state.direction === 'UP'}
          isScrollingDown={this.state.direction === 'DOWN'}
        />
      );
    }
  };

IsScrollingHoc.propTypes = {};

export default IsScrollingHoc;

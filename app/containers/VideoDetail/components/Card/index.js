/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import thumbnail512x256 from 'assets/images/thumbnail-512x256.png';
import Wrapper from './Wrapper';
import Title from './Title';

function Card({ to, thumbnail, title }) {
  return (
    <Wrapper>
      <Link to={to} className="ball_box ball_box-fit full-image-block">
        <img
          src={thumbnail}
          className="img-fluid mx-auto d-block ball_img full-image"
          alt={title}
        />
        <div className="overlay box11" />
        <Title className="relative-item">{title}</Title>
      </Link>
    </Wrapper>
  );
}

Card.propTypes = {
  to: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  to: '',
  thumbnail: thumbnail512x256,
  title: '',
};

export default Card;

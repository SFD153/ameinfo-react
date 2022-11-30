/**
 *
 * VideoCard
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import video1 from 'assets/images/video1.png';
import ReadMore from 'components/ReadMore';
import Wrapper from './Wrapper';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function VideoCard({ to, thumbnail, title, description }) {
  return (
    <Wrapper>
      <Link to={to}>
        <Row>
          <Col lg="7">
            <img src={thumbnail} alt="video1" className="video-img img-fluid" />
          </Col>
          <Col lg="5">
            <p className="video-title">{title}</p>
            <ReadMore text={description} />
          </Col>
        </Row>
      </Link>
    </Wrapper>
  );
}

VideoCard.propTypes = {
  to: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

VideoCard.defaultProps = {
  to: '',
  thumbnail: video1,
  title: '',
  description: '',
};

export default VideoCard;

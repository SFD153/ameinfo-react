/**
 *
 * PostItem
 *
 */

import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getStorageLink } from 'utils/storage';
import { ci } from 'utils/cloudinary';
// import styled from 'styled-components';

function PostItem(props) {
  const { hashTag, hashTagLink, link, imageUrl, title, description } = props;

  return (
    <div className="row space10">
      <Col lg="4">
        <div className="post-thumb">
          <Link to={hashTagLink} className="post-category btn_blue">
            #{hashTag}
          </Link>
          <Link to={link}>
            <img
              className="img-fluid"
              src={ci(imageUrl, 290, 135)}
              alt={title}
            />
          </Link>
        </div>
      </Col>
      <Col lg="8">
        <div className="post-content">
          <h3 className="post-title md">
            <Link to={link}>{title}</Link>
          </h3>
          <p>{description}</p>
        </div>
      </Col>
    </div>
  );
}

PostItem.propTypes = {
  link: PropTypes.string,
  hashTag: PropTypes.string,
  hashTagLink: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};

PostItem.defaultProps = {
  imageUrl: getStorageLink('thumbnail-512x256.png'),
};

export default PostItem;

/**
 *
 * FeaturedPost
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ci } from 'utils/cloudinary';
// import styled from 'styled-components';
import { getStorageLink } from 'utils/storage';

function FeaturedPost(props) {
  const { link, imageUrl, title } = props;

  return (
    <Link to={link}>
      <div className="scale position-relative">
        <img
          src={ci(imageUrl, 346, 250)}
          className="img-fluid d-block tag_img pad0 m0"
          alt={title}
        />
        <div className="tag_txt">
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
}

FeaturedPost.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};

FeaturedPost.defaultProps = {
  imageUrl: getStorageLink('thumbnail-512x256.png'),
  title: PropTypes.string,
  link: PropTypes.string,
};

export default FeaturedPost;

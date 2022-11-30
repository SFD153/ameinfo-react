/**
 *
 * Box
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getStorageLink } from 'utils/storage';
import { ci } from 'utils/cloudinary';

// import styled from 'styled-components';

function Box(props) {
  const { link, title, imageUrl, tagSlug, tagName } = props;

  return (
    <div className="item post-content-box">
      <div className="post-thumb">
        <Link to={link}>
          <img className="img-fluid" src={ci(imageUrl, 450, 250)} alt={title} />
        </Link>
      </div>
      <div
        className="post-content"
        style={{
          WebkitBoxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.08)',
          boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.08',
        }}
      >
        <Link className="post-category btn_blue" to={tagSlug}>
          #{tagName}
        </Link>
        <h3 className="post-title md">
          <Link to={link}>{title}</Link>
        </h3>
      </div>
    </div>
  );
}

Box.propTypes = {
  link: PropTypes.string,
  imageUrl: PropTypes.string,
  tagName: PropTypes.string,
  tagSlug: PropTypes.string,
  title: PropTypes.string,
};

Box.defaultProps = {
  link: '',
  imageUrl: getStorageLink('thumbnail-512x256.png'),
  tagName: 'UNTAGGED',
  tagSlug: 'untagged',
  title: '',
};

export default Box;

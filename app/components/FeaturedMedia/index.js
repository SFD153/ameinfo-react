/**
 *
 * FeaturedMedia
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getStorageLink } from 'utils/storage';
import cn from 'classnames';
import { ci } from 'utils/cloudinary';

// import styled from 'styled-components';

function FeaturedMedia(props) {
  const { noTop, imageUrl, title, link } = props;
  return (
    <div
      className={cn({
        media: true,
        'mb-3': true,
        'no-top': noTop,
      })}
    >
      <Link to={link} className="scale media_flex">
        <img className="mr-3" src={ci(imageUrl, 85, 50)} alt={title} />
        <div className="media-body">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

FeaturedMedia.propTypes = {
  link: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  noTop: PropTypes.bool,
  // category: PropTypes.string,
};

FeaturedMedia.defaultProps = {
  noTop: false,
  title: '',
  link: '',
  imageUrl: getStorageLink('thumbnail-512x256.png'),
};

export default FeaturedMedia;

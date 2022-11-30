/**
 *
 * SubFeaturedMedia
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getStorageLink } from 'utils/storage';
import { ci } from 'utils/cloudinary';
// import styled from 'styled-components';

function SubFeaturedMedia(props) {
  const { link, imageUrl, title, category } = props;

  return (
    <div className="media bdr_btm">
      <Link to={link} className="scale media_flex">
        <img className="mr-3" src={ci(imageUrl, 85, 50)} alt={title} />
        <div className="media-body">
          <h5 className="mt-0">{category}</h5>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

SubFeaturedMedia.propTypes = {
  link: PropTypes.string,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
};

SubFeaturedMedia.defaultProps = {
  link: '',
  imageUrl: getStorageLink('thumbnail-512x256.png'),
  title: '',
  category: 'Uncategorized',
};

export default SubFeaturedMedia;

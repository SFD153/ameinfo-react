/**
 *
 * Item
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ci } from 'utils/cloudinary';
import { getStorageLink } from 'utils/storage';
// import styled from 'styled-components';

function Item(props) {
  const { format, link, imageUrl, category } = props;
  const isFormatIcon = format !== 'standard' && format !== 'quote';
  const { title } = props;

  return (
    <div className="item">
      <Link to={link} className="scale">
        <div className="scale_box">
          <img
            src={ci(imageUrl, 340, 240)}
            className="img-fluid mx-auto d-block"
            alt={title}
          />
          {isFormatIcon && (
            <div className="ts-video-icon">
              {format === 'video' ? (
                <i className="fa fa-play-circle-o " />
              ) : (
                <i className="fa fa-images " />
              )}
            </div>
          )}
        </div>
        <div className="wrapper">
          <button
            className="btn btn_blue mt-3"
            type="button"
            style={{ textAlign: 'center' }}
          >
            {category}
          </button>
        </div>
        <p className="small_txt mt-3">{title}</p>
      </Link>
    </div>
  );
}

Item.propTypes = {
  link: PropTypes.string,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  format: PropTypes.string,
};

Item.defaultProps = {
  link: '',
  imageUrl: getStorageLink('thumbnail-512x256.png'),
  category: 'Uncategorized',
  title: '',
  format: 'standard',
};

export default Item;

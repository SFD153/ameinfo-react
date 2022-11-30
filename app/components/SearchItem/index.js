/**
 *
 * Search Item
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ci } from 'utils/cloudinary';
import { getStorageLink } from 'utils/storage';
import Highlighter from 'react-highlight-words';
// import styled from 'styled-components';

function SearchItem(props) {
  const { link, imageUrl, category, keyword } = props;
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
        <p className="small_txt mt-3">
          <Highlighter
            searchWords={keyword.split(' ')}
            textToHighlight={title}
            autoEscape
          />
        </p>
      </Link>
    </div>
  );
}

SearchItem.propTypes = {
  link: PropTypes.string,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  keyword: PropTypes.string,
};

SearchItem.defaultProps = {
  link: '',
  imageUrl: getStorageLink('thumbnail-512x256.png'),
  category: 'Uncategorized',
  title: '',
  keyword: '',
};

export default SearchItem;

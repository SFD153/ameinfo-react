/**
 *
 * InspireItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getStorageLink } from 'utils/storage';
// import styled from 'styled-components';

function InspireItem(props) {
  return (
    <Link to={props.link}>
      <div
        className="overlay box1"
        style={{
          background: `url(${props.imageUrl})no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}
      >
        <button className="btn btn_blue" type="button">
          {props.category || 'uncategorized'}
        </button>
      </div>
      <h3 className="inspire-item">{props.title}</h3>
    </Link>
  );
}

InspireItem.propTypes = {
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};

InspireItem.defaultProps = {
  imageUrl: getStorageLink('thumbnail-512x256.png'),
};

export default InspireItem;

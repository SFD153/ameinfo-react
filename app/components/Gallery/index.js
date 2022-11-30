/**
 *
 * Gallery
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function Gallery(props) {
  return <ImageGallery {...props} />;
}

Gallery.propTypes = {};

export default Gallery;

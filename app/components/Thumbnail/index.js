/**
 *
 * Thumbnail
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import thumbnail512x256 from 'assets/images/thumbnail-512x256.png';
import thumbnail1024x512 from 'assets/images/thumbnail-1024x512.png';
import { isEmpty } from 'lodash';
import { ci } from '../../utils/cloudinary';

// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Thumbnail extends React.PureComponent {
  render() {
    const { mode, link, alt, caption, children } = this.props;

    const isFull = mode === 'full';
    const className = 'half_bdrbox half_bdrbox-overflow';

    let imageLink = link;

    if (isEmpty(imageLink)) {
      if (isFull) {
        imageLink = thumbnail1024x512;
      } else {
        imageLink = thumbnail512x256;
      }
    } else {
      imageLink = ci(imageLink);
    }

    return (
      <Row className={isFull ? className : null}>
        <Col lg={isFull ? 12 : 6}>
          <div>
            <img
              className="img-fluid mx-auto d-block pointer"
              src={imageLink}
              alt={alt}
            />
            <p className="thumbnail-caption">{caption}</p>
          </div>
        </Col>
        {!isFull ? <Col lg={6}>{children}</Col> : null}
      </Row>
    );
  }
}

Thumbnail.propTypes = {
  mode: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.any,
  caption: PropTypes.string,
};

Thumbnail.defaultProps = {
  mode: 'full',
  link: thumbnail512x256,
  alt: 'Thumbnail',
  caption: '',
};

export default Thumbnail;

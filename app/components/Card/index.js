/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { ci } from 'utils/cloudinary';

import cn from 'classnames';
import { Link } from 'react-router-dom';

function Card(props) {
  const { type, slug, title, description, cover } = props;

  const classNames = cn({
    'post-thumb': true,
    'post-square': type === 'square',
  });

  let src = ci(cover, 450, 300);
  if (type === 'square') {
    src = ci(cover, 340, 243);
  }

  const titleClassNames = cn({
    'post-title': true,
    md: type !== 'square',
  });

  return (
    <div>
      <div className={classNames}>
        <Link to={slug}>
          <img className="img-fluid" src={src} alt={title} />
        </Link>
      </div>
      <div className="post-content">
        <h3 className={titleClassNames}>
          <Link to={slug}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  type: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  cover: PropTypes.string,
};

Card.defaultProps = {
  type: 'rectangle',
  slug: '',
  title: '',
  description: '',
  cover: '',
};

export default Card;

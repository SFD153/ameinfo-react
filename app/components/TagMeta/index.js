/**
 *
 * TagMeta
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TagMeta(props) {
  const { source } = props;
  return source.map(item => (
    <Link
      key={uniqid()}
      to={`/tag/${item.slug}`}
      className="blu_box blu_box--video"
    >
      #{item.name}
    </Link>
  ));
}

TagMeta.propTypes = {
  source: PropTypes.array,
};

TagMeta.defaultProps = {
  source: [],
};

export default TagMeta;

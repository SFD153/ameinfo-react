/**
 *
 * CategoryPostList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { get } from 'lodash';
import TextItem from 'components/TextItem';

function CategoryPostList(props) {
  const { parent, data } = props;

  return data.map((text, position) => (
    <TextItem
      key={get(text, 'id')}
      thumbnail={position === 0}
      thumbnailUrl={get(text, 'thumbnail.link')}
      link={get(text, 'permalink')}
      title={get(text, 'title')}
      horizontal={position === parent.posts.length - 1}
    />
  ));
}

CategoryPostList.propTypes = {
  parent: PropTypes.object,
  data: PropTypes.array,
};

export default CategoryPostList;

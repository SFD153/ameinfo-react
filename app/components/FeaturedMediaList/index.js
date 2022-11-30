/**
 *
 * FeaturedMediaList
 *
 */

import React from 'react';
import { get, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FeaturedMediaLoader } from 'components/ContentLoader';
import FeaturedMedia from 'components/FeaturedMedia';

function FeaturedMediaList(props) {
  let ready = false;
  let { data } = props;

  if (isEmpty(data)) {
    data = [];
  } else {
    data = data.slice(0, 3);
    ready = true;
  }

  return (
    <FeaturedMediaLoader ready={ready} clone={3}>
      {data.map((item, index) => (
        <FeaturedMedia
          key={get(item, 'id')}
          link={get(item, 'permalink')}
          title={get(item, 'title')}
          imageUrl={get(item, 'thumbnail.link')}
          category={get(item, 'categories[0].name')}
          noTop={index === 0}
        />
      ))}
    </FeaturedMediaLoader>
  );
}

FeaturedMediaList.propTypes = {
  data: PropTypes.array,
};

export default FeaturedMediaList;

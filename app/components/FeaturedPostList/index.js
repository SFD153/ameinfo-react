/**
 *
 * FeaturedPostList
 *
 */

import React from 'react';
import { get, isEmpty } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FeaturedPostLoader } from 'components/ContentLoader';
import FeaturedPost from 'components/FeaturedPost';

function FeaturedPostList(props) {
  let ready = false;
  let { data } = props;

  if (isEmpty(data)) {
    data = [];
  } else {
    data = data.slice(0, 1);
    ready = true;
  }

  return (
    <FeaturedPostLoader ready={ready}>
      {data.map(item => (
        <FeaturedPost
          key={get(item, 'id')}
          title={get(item, 'title')}
          imageUrl={get(item, 'thumbnail.link')}
          category={get(item, 'categories[0].name')}
          date={moment(get(item, 'createdAt')).format('MMMM DD,YYYY')}
          link={get(item, 'permalink')}
        />
      ))}
    </FeaturedPostLoader>
  );
}

FeaturedPostList.propTypes = {
  data: PropTypes.array,
};

export default FeaturedPostList;

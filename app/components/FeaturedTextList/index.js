/**
 *
 * FeaturedTextList
 *
 */

import React from 'react';
import { get, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FeaturedTextLoader } from 'components/ContentLoader';
import TextItem from 'components/TextItem';

function FeaturedTextList(props) {
  let ready = false;
  let { data } = props;

  if (isEmpty(data)) {
    data = [];
  } else {
    data = data.slice(0, 5);
    ready = true;
  }

  return (
    <FeaturedTextLoader ready={ready} clone={5}>
      {data.map(item => (
        <TextItem
          key={get(item, 'id')}
          link={get(item, 'permalink')}
          title={get(item, 'title')}
          align
          tiny
        />
      ))}
    </FeaturedTextLoader>
  );
}

FeaturedTextList.propTypes = {
  data: PropTypes.array,
};

export default FeaturedTextList;

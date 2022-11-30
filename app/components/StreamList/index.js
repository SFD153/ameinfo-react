/**
 *
 * StreamList
 *
 */

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { get, isEmpty } from 'lodash';
import moment from 'moment';
// import styled from 'styled-components';

import PropTypes from 'prop-types';
import { StreamLoader } from 'components/ContentLoader';
import Item from 'components/Item';
import { WhatsonCarousel, MyCarousel } from 'components/OwlCarouselConfig';

function StreamList(props) {
  let ready = false;
  const { limit, column, mode } = props;
  let { data } = props;

  if (isEmpty(data)) {
    data = [];
  } else {
    ready = true;
  }

  let owlCarouselConfig = WhatsonCarousel;

  if (mode === 'full') {
    owlCarouselConfig = MyCarousel;
  }

  return (
    <StreamLoader
      className="mt-4"
      ready={ready}
      clone={limit}
      column={column}
      grid
    >
      <OwlCarousel
        className="owl-carousel mt-4"
        id="WhatsonCarousel"
        {...owlCarouselConfig}
      >
        {data.map(item => (
          <Item
            key={get(item, 'id')}
            link={get(item, 'permalink')}
            imageUrl={get(item, 'thumbnail.link')}
            category={get(item, 'categories[0].name')}
            title={get(item, 'title')}
            format={get(item, 'format')}
            date={moment(get(item, 'createdAt')).format('MMMM DD,YYYY')}
          />
        ))}
      </OwlCarousel>
    </StreamLoader>
  );
}

StreamList.propTypes = {
  data: PropTypes.array,
  limit: PropTypes.number,
  column: PropTypes.number,
  mode: PropTypes.string,
  parentCategory: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

StreamList.defaultProps = {
  data: [],
  limit: 3,
  column: 12,
  mode: 'full',
  parentCategory: [],
};

export default StreamList;

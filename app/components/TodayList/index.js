/**
 *
 * TodayList
 *
 */

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { get, isEmpty } from 'lodash';
import moment from 'moment';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { StreamLoader } from 'components/ContentLoader';
import Item from 'components/Item';
import { WhatsonCarousel } from 'components/OwlCarouselConfig';
import PropTypes from 'prop-types';

function TodayList(props) {
  let ready = false;
  let { data } = props;

  if (isEmpty(data)) {
    data = [];
  } else {
    ready = true;
  }

  return (
    <StreamLoader className="mt-4" ready={ready} clone={3} column={4} grid>
      <OwlCarousel
        className="owl-carousel mt-4"
        id="WhatsonCarousel"
        {...WhatsonCarousel}
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

TodayList.propTypes = {
  data: PropTypes.array,
  parentCategory: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default TodayList;

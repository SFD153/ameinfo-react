/**
 *
 * VideoCollection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Video from 'components/VideoCard';
import { get } from 'lodash';

// import styled from 'styled-components';

function VideoCollection({ items }) {
  return items.map(item => (
    <Video
      to={`/video/${get(item, 'slug')}`}
      title={get(item, 'name')}
      description={get(item, 'description')}
      thumbnail={get(item, 'thumbnail.link')}
    />
  ));
}

VideoCollection.propTypes = {
  items: PropTypes.array.isRequired,
};

export default VideoCollection;

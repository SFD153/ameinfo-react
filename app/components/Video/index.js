/**
 *
 * Video
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactLayer from 'react-player';
// import styled from 'styled-components';

function Video(props) {
  const { caption } = props;
  return (
    <div className="player-wrapper">
      <ReactLayer
        {...props}
        className="react-player"
        controls
        width="100%"
        height="100%"
      />
      <p className="thumbnail-caption">{caption}</p>
    </div>
  );
}

Video.propTypes = {
  src: PropTypes.string,
  caption: PropTypes.string,
};

export default Video;

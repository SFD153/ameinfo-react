/**
 *
 * Audio
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
// import styled from 'styled-components';

function Audio(props) {
  const params = {
    ...props,
    src: `//${process.env.VIDEO_STREAM_URL}/${props.src}`,
  };

  return <ReactAudioPlayer {...params} controls />;
}

Audio.propTypes = {
  src: PropTypes.string,
};

export default Audio;

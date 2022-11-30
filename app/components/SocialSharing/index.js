/**
 *
 * SocialSharing
 *
 */

import React, { Fragment } from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SocialSharing({ title }) {
  const url = window.location.href;
  return (
    <Fragment>
      <FacebookShareButton url={url} quote={title}>
        <i className="fa fa-facebook" />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <i className="fa fa-twitter" />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <i className="fa fa-linkedin" />
      </LinkedinShareButton>
      <EmailShareButton url={url} subject={title}>
        <i className="fa fa-envelope" />
      </EmailShareButton>
    </Fragment>
  );
}

SocialSharing.propTypes = {
  title: PropTypes.string,
};

SocialSharing.defaultProps = {
  title: '',
};

export default SocialSharing;

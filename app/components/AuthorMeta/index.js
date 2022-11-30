/**
 *
 * AuthorMeta
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import authorAvatar from 'assets/images/author.png';

function AuthorMeta(props) {
  const { avatar, name } = props;

  return (
    <div className="author">
      <img src={avatar} alt="author" />
      {name}
    </div>
  );
}

AuthorMeta.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};

AuthorMeta.defaultProps = {
  name: 'AMEInfo Staff',
  avatar: authorAvatar,
};

export default AuthorMeta;

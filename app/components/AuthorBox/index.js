/**
 *
 * AuthorBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import authorAvatar from 'assets/images/author.png';
import { isEmpty } from 'lodash';
import { ci } from 'utils/cloudinary';

function AuthorBox(props) {
  const { firstName, lastName, imageUrl, description } = props;

  let name = `${firstName} ${lastName}`;
  if (isEmpty(firstName) && isEmpty(lastName)) {
    name = 'AMEInfo Staff';
  }

  const fullName = name.trim();
  return (
    <div className="author-box mt-4">
      <div className="media">
        <img
          className="mr-3"
          src={isEmpty(imageUrl) ? authorAvatar : ci(imageUrl)}
          alt="Author"
        />
        <div className="media-body">
          <h5 className="mt-0 text-uppercase">{fullName}</h5>
          <p>
            {isEmpty(description)
              ? 'AMEinfo staff members report business news and views from across the Middle East and North Africa region, and analyse global events impacting the region today.'
              : description}
          </p>
        </div>
      </div>
    </div>
  );
}

AuthorBox.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};

AuthorBox.defaultProps = {
  firstName: 'AMEInfo',
  lastName: 'Staff',
  imageUrl: authorAvatar,
  description:
    'AMEinfo staff members report business news and views from across the Middle East and North Africa region, and analyse global events impacting the region today.',
};

export default AuthorBox;

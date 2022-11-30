/**
 *
 * AuthorList
 *
 */

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { get, isEmpty } from 'lodash';
import { Col } from 'reactstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import contributorImage from 'assets/images/contributor.png';
import { AuthorLoader } from 'components/ContentLoader';
import { AuthorCarousel } from 'components/OwlCarouselConfig';
import { ci } from 'utils/cloudinary';
import PropTypes from 'prop-types';

function AuthorList(props) {
  let ready = false;
  let { data } = props;

  if (isEmpty(data)) {
    data = [];
  } else {
    ready = true;
  }

  return (
    <AuthorLoader className="mt-4" ready={ready} clone={4} column={3} grid>
      <OwlCarousel
        className="contributor-circle owl-carousel mt-4"
        id="authorCarousel"
        {...AuthorCarousel}
      >
        {data.map(item => (
          <Link
            key={get(item, 'id')}
            to={`/author/${get(item, 'username')}`}
            className="scale"
          >
            <div className="scale_box">
              <Col md={12} xs={12}>
                <img
                  src={ci(get(item, 'avatar.link', contributorImage), 150, 150)}
                  className="img-fluid mx-auto d-block ame-author"
                  alt={get(item, 'username')}
                />
              </Col>
            </div>
            <div className="tifny5 text-uppercase">
              {get(item, 'firstName')} {get(item, 'lastName')}
            </div>
          </Link>
        ))}
      </OwlCarousel>
    </AuthorLoader>
  );
}

AuthorList.propTypes = {
  data: PropTypes.array,
};

export default AuthorList;

/**
 *
 * Staff
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import styled from 'styled-components';

function Staff(props) {
  return (
    <div className="item">
      <div href="#" className="scale">
        <div className="scale_box">
          <img
            src={props.imageUrl}
            className="img-fluid mx-auto d-block ame-author"
            alt={props.description}
          />
        </div>
        <Link to="index.html#" className="tifny5">
          AMEINFO STAFF
        </Link>
        <p className="small_txt">{props.description}</p>
      </div>
    </div>
  );
}

Staff.propTypes = {
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};

export default Staff;

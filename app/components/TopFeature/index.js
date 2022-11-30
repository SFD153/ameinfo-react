/**
 *
 * TopFeature
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function TopFeature(props) {
  return (
    <div>
      <button className="btn btn_blue mb-3 text-uppercase" type="button">
        {props.title}
      </button>
      <div>
        <p className="small_txt">
          <Link to={props.link}>{props.description}</Link>
        </p>
        <hr />
      </div>
    </div>
  );
}

TopFeature.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default TopFeature;

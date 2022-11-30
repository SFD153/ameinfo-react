/**
 *
 * ReleaseDateMeta
 *
 */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ReleaseDateMeta(props) {
  const { date } = props;
  return (
    <div>
      <i className="fa fa-clock-o" />
      &nbsp;
      {moment(date).format('MMMM DD, YYYY')}
    </div>
  );
}

ReleaseDateMeta.propTypes = {
  date: PropTypes.number,
};

ReleaseDateMeta.defaultProps = {
  date: 0,
};

export default ReleaseDateMeta;

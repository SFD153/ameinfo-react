/**
 *
 * Media
 *
 */

import React from 'react';
// import b1 from 'assets/images/b1.jpg';
import PropTypes from 'prop-types';
// import styled from 'styled-components';\
import TextItem from 'components/TextItem';

function Media({ title, contents }) {
  return (
    <div>
      <button className="btn btn_blue text-uppercase" type="button">
        {title}
      </button>
      {contents.map(item => (
        <TextItem key={item.id} link={item.link} title={item.text} indent />
      ))}
    </div>
  );
}

Media.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.array.isRequired,
};

export default Media;

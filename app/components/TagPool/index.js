/**
 *
 * TagPool
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const tag = [
  {
    id: 1,
    link: 'podt.html#',
    text: 'Tech',
  },
  {
    id: 2,
    link: 'podt.html#',
    text: 'Fashion',
  },
  {
    id: 3,
    link: 'podt.html#',
    text: 'Sports',
  },
  {
    id: 4,
    link: 'podt.html#',
    text: 'Football',
  },
  {
    id: 5,
    link: 'podt.html#',
    text: 'Styles',
  },
  {
    id: 6,
    link: 'podt.html#',
    text: 'Rech',
  },
  {
    id: 7,
    link: 'podt.html#',
    text: 'Lifestyle',
  },
  {
    id: 8,
    link: 'podt.html#',
    text: 'Technology',
  },
  {
    id: 9,
    link: 'podt.html#',
    text: 'Guide',
  },
  {
    id: 10,
    link: 'podt.html#',
    text: 'Food',
  },
  {
    id: 11,
    link: 'podt.html#',
    text: 'Animal',
  },
];

function TagPool() {
  return (
    <div className="half_bdrbox">
      <h4 className="blue_side med_txt"> Tags</h4>
      <ul className="list-inline tags_ul">
        {tag.map(item => (
          <li className="list-inline-item" key={item.id}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

TagPool.propTypes = {};

export default TagPool;

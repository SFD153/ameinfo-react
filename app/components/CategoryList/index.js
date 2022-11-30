/**
 *
 * CategoryList
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { get, isEmpty } from 'lodash';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import PropTypes from 'prop-types';
import { TextItemLoader } from 'components/ContentLoader';
import CategoryPostList from '../CategoryPostList';

function CategoryList(props) {
  let ready = false;
  let { data } = props;

  if (isEmpty(data)) {
    data = [];
  } else {
    data = data.slice(0, 6);
    ready = true;
  }

  return (
    <TextItemLoader className="space10" ready={ready} clone={3} column={4} grid>
      <Row className="space10">
        {data.map((item, index) => (
          <Col
            key={get(item, 'id')}
            md="4"
            className={index > 2 ? 'space50' : 'space0'}
          >
            <Link
              to={`/${get(item, 'parent.slug')}/${get(item, 'slug')}`}
              className="btn btn_blue text-uppercase"
            >
              {get(item, 'name')}
            </Link>
            <CategoryPostList parent={item} data={get(item, 'posts', [])} />
          </Col>
        ))}
      </Row>
    </TextItemLoader>
  );
}

CategoryList.propTypes = {
  data: PropTypes.array,
};

export default CategoryList;

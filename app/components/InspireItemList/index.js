/**
 *
 * InspireItemList
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';
import { get, isEmpty } from 'lodash';
// import styled from 'styled-components';

import { InspireItemLoader } from 'components/ContentLoader';
import PropTypes from 'prop-types';
import InspireItem from 'components/InspireItem';

function InspireItemList(props) {
  let ready = false;
  const { data } = props;

  if (!isEmpty(data)) {
    ready = true;
  }

  return (
    <InspireItemLoader ready={ready} clone={4} column={3} grid>
      <Row>
        {data.map((item, index) => (
          <Col
            key={get(item, 'id')}
            md={3}
            className={index > 3 ? 'space30' : 'space0'}
          >
            <InspireItem
              key={get(item, 'id')}
              link={`/sectors/${get(
                item,
                'categories[0].slug',
                'uncategorized',
              )}/${get(item, 'slug')}`}
              imageUrl={get(item, 'thumbnail.link')}
              category={get(item, 'categories[0].slug')}
              title={get(item, 'title')}
            />
          </Col>
        ))}
      </Row>
    </InspireItemLoader>
  );
}

InspireItemList.propTypes = {
  data: PropTypes.array,
};

export default InspireItemList;

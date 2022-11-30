/**
 *
 * TextItemList
 *
 */

import React from 'react';
import { get, isEmpty } from 'lodash';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { TopFeatureLoader } from 'components/ContentLoader';
import PropTypes from 'prop-types';
import TextItem from 'components/TextItem';

function TextItemList(props) {
  let ready = false;
  const { title, data } = props;

  if (!isEmpty(data)) {
    ready = true;
  }

  return (
    <TopFeatureLoader ready={ready}>
      <div className="btn btn_blue mb-3">{title}</div>
      {data.map((item, position) => (
        <TextItem
          key={get(item, 'id')}
          link={`/sectors/${get(item, 'categories[0].slug')}/${get(
            item,
            'slug',
          )}`}
          title={get(item, 'title')}
          horizontal={position === data.length - 1}
        />
      ))}
    </TopFeatureLoader>
  );
}

TextItemList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default TextItemList;

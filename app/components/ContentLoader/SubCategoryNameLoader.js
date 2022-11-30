import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const Loader = props => (
  <ContentLoader
    height={30}
    width={600}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="9.67" y="8" rx="4" ry="4" width="100" height="13" />
  </ContentLoader>
);

function SubCategoryNameLoader(props) {
  return (
    <React.Fragment>{props.ready ? props.children : <Loader />}</React.Fragment>
  );
}

SubCategoryNameLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
    PropTypes.bool,
  ]),
  ready: PropTypes.bool,
};

export default SubCategoryNameLoader;

import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const Loader = props => (
  <ContentLoader
    height={240}
    width={900}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="403.47" y="14" rx="4" ry="4" width="412.96" height="8.04" />
    <rect x="408" y="36" rx="4" ry="4" width="138" height="8.56" />
    <rect x="6" y="4" rx="5" ry="5" width="358.44" height="245.92" />
    <rect x="408.47" y="65" rx="4" ry="4" width="325.74" height="8.97" />
    <rect x="410" y="84.61" rx="4" ry="4" width="50" height="8" />
  </ContentLoader>
);

function MediaCategoryLoader(props) {
  return (
    <React.Fragment>{props.ready ? props.children : <Loader />}</React.Fragment>
  );
}

MediaCategoryLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
    PropTypes.bool,
  ]),
  ready: PropTypes.bool,
};

export default MediaCategoryLoader;

import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const Loader = props => (
  <ContentLoader
    height={100}
    width={300}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="2.47" y="1" rx="4" ry="4" width="81" height="20.93" />
    <rect x="1" y="43" rx="4" ry="4" width="220" height="8.56" />
    <rect x="2" y="65.61" rx="4" ry="4" width="174" height="8" />
  </ContentLoader>
);

function TopFeatureLoader(props) {
  return (
    <React.Fragment>{props.ready ? props.children : <Loader />}</React.Fragment>
  );
}

TopFeatureLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
    PropTypes.bool,
  ]),
  ready: PropTypes.bool,
};

export default TopFeatureLoader;

import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const Loader = props => (
  <ContentLoader
    height={270}
    width={330}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="5.63" y="4" rx="5" ry="5" width="305.1" height="241.92" />
  </ContentLoader>
);

function FeaturedPostLoader(props) {
  return (
    <React.Fragment>{props.ready ? props.children : <Loader />}</React.Fragment>
  );
}

FeaturedPostLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
    PropTypes.bool,
  ]),
  ready: PropTypes.bool,
};

export default FeaturedPostLoader;

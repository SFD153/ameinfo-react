import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const Loader = props => (
  <ContentLoader
    height={45}
    width={900}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="23" rx="3" ry="3" width="130" height="10" />
    <rect x="144" y="22" rx="3" ry="3" width="90" height="10" />
    <rect x="2" y="3.61" rx="3" ry="3" width="442.2" height="10" />
    <rect x="248" y="21" rx="3" ry="3" width="60" height="10" />
  </ContentLoader>
);

function PostTitleLoader(props) {
  return (
    <React.Fragment>{props.ready ? props.children : <Loader />}</React.Fragment>
  );
}

PostTitleLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
    PropTypes.bool,
  ]),
  ready: PropTypes.bool,
};

export default PostTitleLoader;

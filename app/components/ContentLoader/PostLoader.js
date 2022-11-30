import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const Loader = props => (
  <ContentLoader
    height={860}
    width={600}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="54" rx="4" ry="4" width="117" height="6.4" />
    <rect x="0" y="8" rx="3" ry="3" width="350" height="6.4" />
    <rect x="0" y="23" rx="3" ry="3" width="380" height="6.4" />
    <rect x="0" y="39" rx="3" ry="3" width="201" height="6.4" />
    <rect x="3" y="132" rx="4" ry="4" width="397.61" height="254.89" />
    <rect x="3" y="462" rx="3" ry="3" width="350" height="6.4" />
    <rect x="0" y="484" rx="3" ry="3" width="380" height="6.4" />
    <rect x="1" y="503" rx="3" ry="3" width="201" height="6.4" />
    <rect x="13" y="525" rx="4" ry="4" width="117" height="6.4" />
    <rect x="-1" y="605" rx="3" ry="3" width="350" height="6.4" />
    <rect x="-3" y="629" rx="3" ry="3" width="380" height="6.4" />
    <rect x="-2" y="650" rx="3" ry="3" width="201" height="6.4" />
    <rect x="13" y="674" rx="4" ry="4" width="117" height="6.4" />
  </ContentLoader>
);

function PostLoader(props) {
  return (
    <React.Fragment>{props.ready ? props.children : <Loader />}</React.Fragment>
  );
}

PostLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
    PropTypes.bool,
  ]),
  ready: PropTypes.bool,
};

export default PostLoader;

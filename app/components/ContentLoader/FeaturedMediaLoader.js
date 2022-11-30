import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const Loader = props => (
  <ContentLoader
    height={100}
    width={300}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="140.45" y="18.61" rx="4" ry="4" width="83.23" height="8.14" />
    <rect x="139" y="42.27" rx="4" ry="4" width="92.41" height="9.9" />
    <rect x="7.63" y="4.38" rx="5" ry="5" width="120" height="64" />
  </ContentLoader>
);

function FeatureMediaLoader(props) {
  const { ready, children, clone, className, grid, column } = props;

  const items = [...new Array(clone)];

  let loader = items.map(() => <Loader />);

  if (grid) {
    loader = (
      <Row className={className}>
        {items.map(() => (
          <Col md={column}>
            <Loader />
          </Col>
        ))}
      </Row>
    );
  }

  return <React.Fragment>{ready ? children : loader}</React.Fragment>;
}

FeatureMediaLoader.propTypes = {
  children: PropTypes.any,
  ready: PropTypes.bool,
  clone: PropTypes.number,
  className: PropTypes.string,
  grid: PropTypes.bool,
  column: PropTypes.number,
};

FeatureMediaLoader.defaultProps = {
  ready: false,
  clone: 1,
  className: '',
  grid: false,
  column: 12,
};

export default FeatureMediaLoader;

import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const Loader = props => (
  <ContentLoader
    height={175}
    width={200}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="40" y="138.61" rx="4" ry="4" width="100" height="8.32" />
    <rect x="62" y="116.61" rx="4" ry="4" width="50" height="8.32" />
    <rect x="10.63" y="6.61" rx="5" ry="5" width="156" height="100" />
  </ContentLoader>
);

function StreamLoader(props) {
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

StreamLoader.propTypes = {
  children: PropTypes.any,
  ready: PropTypes.bool,
  clone: PropTypes.number,
  className: PropTypes.string,
  grid: PropTypes.bool,
  column: PropTypes.number,
};

StreamLoader.defaultProps = {
  ready: false,
  clone: 1,
  className: '',
  grid: false,
  column: 12,
};

export default StreamLoader;

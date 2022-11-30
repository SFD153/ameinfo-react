import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const Loader = props => (
  <ContentLoader
    height={250}
    width={250}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="5.63" y="4" rx="5" ry="5" width="256" height="216" />
  </ContentLoader>
);

function InspireItemLoader(props) {
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

InspireItemLoader.propTypes = {
  children: PropTypes.any,
  ready: PropTypes.bool,
  clone: PropTypes.number,
  className: PropTypes.string,
  grid: PropTypes.bool,
  column: PropTypes.number,
};

InspireItemLoader.defaultProps = {
  ready: false,
  clone: 1,
  className: '',
  grid: false,
  column: 12,
};

export default InspireItemLoader;

import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const Loader = props => (
  <ContentLoader
    height={290}
    width={800}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="256" y="15" rx="4" ry="4" width="199" height="10.79" />
    <rect x="259" y="42" rx="4" ry="4" width="50" height="8" />
    <rect x="0.63" y="1" rx="5" ry="5" width="241.2" height="268.6" />
  </ContentLoader>
);

function PostItemLoader(props) {
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

PostItemLoader.propTypes = {
  children: PropTypes.any,
  ready: PropTypes.bool,
  clone: PropTypes.number,
  className: PropTypes.string,
  grid: PropTypes.bool,
  column: PropTypes.number,
};

PostItemLoader.defaultProps = {
  ready: false,
  clone: 1,
  className: '',
  grid: false,
  column: 12,
};

export default PostItemLoader;

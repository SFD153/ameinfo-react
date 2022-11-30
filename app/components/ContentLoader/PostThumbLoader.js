import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const Loader = props => (
  <ContentLoader
    height={475}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="1.63" y="286.61" rx="4" ry="4" width="348" height="10.27" />
    <rect x="2.63" y="306" rx="4" ry="4" width="133.5" height="11.2" />
    <rect x="0.63" y="-1" rx="5" ry="5" width="388" height="272" />
  </ContentLoader>
);

function PostThumbLoader(props) {
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

PostThumbLoader.propTypes = {
  children: PropTypes.any,
  ready: PropTypes.bool,
  clone: PropTypes.number,
  className: PropTypes.string,
  grid: PropTypes.bool,
  column: PropTypes.number,
};

PostThumbLoader.defaultProps = {
  ready: false,
  clone: 1,
  className: '',
  grid: false,
  column: 12,
};

export default PostThumbLoader;

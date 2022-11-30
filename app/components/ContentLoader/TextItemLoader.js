import React, { Fragment } from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const TitleLoader = props => (
  <ContentLoader
    height={35}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="3.67" y="4" rx="4" ry="4" width="92" height="25.61" />
  </ContentLoader>
);

const TextLoader = props => (
  <ContentLoader
    height={80}
    width={200}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="20.61" rx="3" ry="3" width="85" height="6.72" />
    <rect x="1" y="3.61" rx="3" ry="3" width="201" height="7.62" />
    <rect x="1" y="36.61" rx="3" ry="3" width="201" height="7.62" />
    <rect x="1" y="55.61" rx="3" ry="3" width="85" height="6.72" />
  </ContentLoader>
);

function TextItemLoader(props) {
  const { ready, children, clone, className, grid, column } = props;

  const items = [...new Array(clone)];
  const spinner = (
    <Fragment>
      <TitleLoader />
      <TextLoader />
    </Fragment>
  );

  let loader = items.map(() => spinner);

  if (grid) {
    loader = (
      <Row className={className}>
        {items.map(() => (
          <Col md={column}>{spinner}</Col>
        ))}
      </Row>
    );
  }

  return <React.Fragment>{ready ? children : loader}</React.Fragment>;
}

TextItemLoader.propTypes = {
  children: PropTypes.any,
  ready: PropTypes.bool,
  clone: PropTypes.number,
  className: PropTypes.string,
  grid: PropTypes.bool,
  column: PropTypes.number,
};

TextItemLoader.defaultProps = {
  ready: false,
  clone: 1,
  className: '',
  grid: false,
  column: 12,
};

export default TextItemLoader;

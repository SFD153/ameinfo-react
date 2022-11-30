/**
 *
 * Page
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import NotFound from 'containers/NotFound';

import injectReducer from 'utils/injectReducer';
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';
import agent from 'utils/agent';
import { get, isEmpty, first } from 'lodash';

// import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import { PostLoader } from 'components/ContentLoader';
import makeSelectPage from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: {},
      ready: false,
      error: false,
    };
  }

  async componentDidMount() {
    await this.fetchPage();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      await this.fetchPage();
    }
  }

  async fetchPage() {
    this.setState({ ready: false });
    const { pageSlug } = this.props.match.params;
    const { pathname } = this.props.location;
    let page = {};
    let error = false;

    let slug = first(pathname.split('/').filter(path => path));
    if (pageSlug) {
      slug = pageSlug;
    }

    try {
      const response = await agent
        .get(`/pages/${slug}`)
        .query({ select: 'createdAt,content,title', populate: 'thumbnail' });
      page = response.body;
    } catch (e) {
      this.props.history.push('/');
    }

    if (isEmpty(page)) {
      error = true;
    }

    // Set state
    this.setState({ page, error, ready: true });
    return null;
  }

  render() {
    const { page, error, ready } = this.state;

    if (error) {
      return <NotFound />;
    }

    return (
      <section className="content">
        <Helmet>
          <title>{get(page, 'title', 'page')}</title>
          <meta name="description" content={get(page, 'title', 'page')} />
        </Helmet>
        <section className="leave_sec" id="live_sec">
          <Container fluid>
            <Row>
              <Col lg="12">
                <section className="ame-page">
                  <Container>
                    <Row>
                      <Col lg="12">
                        <h1>{get(page, 'title')}</h1>
                        <Row className="space30">
                          <Col>
                            <PostLoader ready={ready}>
                              <div
                                className="half_bdrbox"
                                style={{ overflow: 'hidden' }}
                              >
                                <Row>
                                  <Col>
                                    <div>
                                      {!isEmpty(
                                        get(page, 'thumbnail.link'),
                                      ) && (
                                        <img
                                          src={get(page, 'thumbnail.link')}
                                          alt={get(page, 'title')}
                                          className="img-fluid mx-auto d-block"
                                        />
                                      )}
                                    </div>
                                  </Col>
                                </Row>
                                {!isEmpty(get(page, 'content')) && (
                                  <div className="content">
                                    {Parser(get(page, 'content'))}
                                  </div>
                                )}
                              </div>
                            </PostLoader>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    );
  }
}

Page.propTypes = {};

const mapStateToProps = createStructuredSelector({
  page: makeSelectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'page', reducer });

export default compose(
  withRouter,
  withReducer,
  withConnect,
)(Page);

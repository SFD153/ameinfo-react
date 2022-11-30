/**
 *
 * Search
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import Box from 'components/Box';
import SpinLoader from 'components/SpinLoader';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import agent from 'utils/agent';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { PostThumbLoader } from 'components/ContentLoader';
import { get } from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import { link } from 'utils/helpers';

import reducer from './reducer';
import { setPageType } from '../App/actions';
import { makeSelectParentCategory } from '../AppSetting/selectors';

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      slug: props.match.params.slug,
      ready: false,
      isFirstRequest: true,
    };

    this.fetchPostsBySearch = this.fetchPostsBySearch.bind(this);
    this.loadNextItems = this.loadNextItems.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const prevSlug = this.props.match.params.slug;
    const nextSlug = nextProps.match.params.slug;
    if (nextSlug !== prevSlug) {
      this.setState({ slug: nextSlug, isFirstRequest: true }, async () => {
        this.setState({ ready: false });
        await this.fetchPostsBySearch();
        this.setState({ ready: true });
      });
    }
  }

  async componentDidMount() {
    this.setState({ ready: false });
    await this.fetchPostsBySearch();
    this.setState({ ready: true });
  }

  async fetchPostsBySearch(page = '1') {
    const { isFirstRequest, posts, slug } = this.state;
    const params = {
      keywords: slug,
      page,
    };

    let listOfPost;
    let postMeta;
    try {
      const response = await agent.get('/search/posts').query(params);
      listOfPost = response.body.results;
      postMeta = response.body.meta;
    } catch (e) {
      listOfPost = [];
      postMeta = {};
    }

    // Set state
    this.setState({
      posts: isFirstRequest ? listOfPost : posts.concat(listOfPost),
      hasMoreItems: !!get(postMeta, 'nextPage'),
      isFirstRequest: false,
    });

    // Set page type
    this.props.setPageType('SubCategory');
  }

  async loadNextItems(page) {
    await this.fetchPostsBySearch(page);
  }

  render() {
    const { posts, ready, hasMoreItems } = this.state;
    const { parentCategory } = this.props;

    return (
      <section className="content">
        <Helmet>
          <title>Search</title>
          <meta name="description" content="Description of Search" />
        </Helmet>
        <section className="lifestyle sub-category post-list space20">
          <PostThumbLoader ready={ready} clone={10} column={6} grid>
            <InfiniteScroll
              pageStart={1}
              loadMore={this.loadNextItems}
              hasMore={hasMoreItems}
              loader={<SpinLoader />}
            >
              <Row>
                {posts.map(post => (
                  <Col lg="6" className="space20" key={get(post, 'id')}>
                    <PostThumbLoader ready={ready}>
                      <Box
                        link={link(
                          parentCategory,
                          get(post, 'categories[0]'),
                          get(post, 'slug'),
                        )}
                        imageUrl={get(post, 'thumbnail.link')}
                        tagName={get(post, 'tags[0].name')}
                        tagSlug={`/tag/${get(post, 'tags[0].slug')}`}
                        title={get(post, 'title')}
                      />
                    </PostThumbLoader>
                  </Col>
                ))}
              </Row>
            </InfiniteScroll>
          </PostThumbLoader>
        </section>
      </section>
    );
  }
}

Search.propTypes = {
  setPageType: PropTypes.func,
  parentCategory: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  parentCategory: makeSelectParentCategory(),
});

function mapDispatchToProps(dispatch) {
  return {
    setPageType: pageType => dispatch(setPageType(pageType)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'search', reducer });

export default compose(
  withReducer,
  withConnect,
)(Search);

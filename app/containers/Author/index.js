/**
 *
 * Author
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';
import Box from 'components/Box';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import agent from 'utils/agent';
import PropTypes from 'prop-types';

import { PostThumbLoader } from 'components/ContentLoader';
import uniqid from 'uniqid';
import InfiniteScroll from 'react-infinite-scroller';
import SpinLoader from 'components/SpinLoader';
import { link } from 'utils/helpers';
import { get } from 'lodash';

import { createStructuredSelector } from 'reselect';
import { setPageType } from '../App/actions';
import { makeSelectParentCategory } from '../AppSetting/selectors';

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export class Author extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      ready: false,
      isFirstRequest: true,
      authorParams: {
        sort: 'createdAt DESC',
        populate: 'categories,tags,thumbnail',
        where: {
          status: 'publish',
          scheduleDate: 0,
        },
      },
    };

    this.fetchPostsByAuthor = this.fetchPostsByAuthor.bind(this);
    this.loadNextItems = this.loadNextItems.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const prevSlug = this.props.match.params.slug;
    const nextSlug = nextProps.match.params.slug;
    if (nextSlug !== prevSlug) {
      this.setState({ isFirstRequest: true }, async () => {
        this.setState({ ready: false });
        await this.fetchPostsByAuthor();
        this.setState({ ready: true });
      });
    }
  }

  async componentDidMount() {
    this.setState({ ready: false });
    await this.fetchPostsByAuthor();
    this.setState({ ready: true });
  }

  async fetchPostsByAuthor(page = '1') {
    const { isFirstRequest, posts, authorParams } = this.state;
    const username = this.props.match.params.slug;
    let listOfPost;
    let postMeta;

    const params = {
      ...authorParams,
      page,
    };

    try {
      const response = await agent
        .get(`/users/${username}/posts`)
        .query(params);
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
    await this.fetchPostsByAuthor(page);
  }

  render() {
    const { posts, ready, hasMoreItems } = this.state;
    const { parentCategory } = this.props;
    const username = this.props.match.params.slug;

    return (
      <section className="content">
        <Helmet>
          <title>{username}</title>
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
                  <Col lg="6" className="space20" key={uniqid()}>
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

Author.propTypes = {
  setPageType: PropTypes.func,
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

export default compose(withConnect)(Author);

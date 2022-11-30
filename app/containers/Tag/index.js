/**
 *
 * Tag
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { PostThumbLoader } from 'components/ContentLoader';
import Box from 'components/Box';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import agent from 'utils/agent';
import InfiniteScroll from 'react-infinite-scroller';
import SpinLoader from 'components/SpinLoader';
import { get } from 'lodash';
import { link } from 'utils/helpers';

import { createStructuredSelector } from 'reselect';
import { setPageType } from '../App/actions';
import { makeSelectParentCategory } from '../AppSetting/selectors';

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export class Tag extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      slug: props.match.params.slug,
      ready: false,
      isFirstRequest: true,
      tagPostParams: {
        select: 'title,slug,summary',
        sort: 'createdAt DESC',
        populate: 'thumbnail,categories,tags',
        perPage: '20',
        where: {
          status: 'publish',
          scheduleDate: 0,
        },
      },
    };

    this.fetchPostsByTag = this.fetchPostsByTag.bind(this);
    this.loadNextItems = this.loadNextItems.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const prevSlug = this.props.match.params.slug;
    const nextSlug = nextProps.match.params.slug;
    if (nextSlug !== prevSlug) {
      this.setState({ slug: nextSlug, isFirstRequest: true }, async () => {
        this.setState({ ready: false });
        await this.fetchPostsByTag();
        this.setState({ ready: true });
      });
    }
  }

  async componentDidMount() {
    this.setState({ ready: false });
    await this.fetchPostsByTag();
    this.setState({ ready: true });
  }

  async fetchPostsByTag(page = '1') {
    const { isFirstRequest, posts, slug, tagPostParams } = this.state;
    let listOfPost;
    let postMeta;

    try {
      const params = { ...tagPostParams, page };
      const response = await agent.get(`/tags/${slug}/posts`).query(params);
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
    await this.fetchPostsByTag(page);
  }

  render() {
    const { posts, ready, hasMoreItems } = this.state;
    const { parentCategory } = this.props;

    return (
      <section className="content">
        <Helmet>
          <title>Tag</title>
          <meta name="description" content="Description of Tag" />
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
                {posts.map(item => (
                  <Col lg="6" className="space20" key={get(item, 'id')}>
                    <Box
                      link={link(
                        parentCategory,
                        get(item, 'categories[0]'),
                        get(item, 'slug'),
                      )}
                      imageUrl={get(item, 'thumbnail.link')}
                      tagName={get(item, 'tags[0].name')}
                      tagSlug={`/tag/${get(item, 'tags[0].slug')}`}
                      title={get(item, 'title')}
                    />
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

Tag.propTypes = {
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

export default compose(withConnect)(Tag);

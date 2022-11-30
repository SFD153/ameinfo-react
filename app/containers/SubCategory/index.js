/**
 *
 * SubCategory
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types';
import { compose } from 'redux';
import agent from 'utils/agent';
import moment from 'moment/moment';
import uniqid from 'uniqid';
import InfiniteScroll from 'react-infinite-scroller';
import cn from 'classnames';
import PostItem from 'components/PostItem';
import SpinLoader from 'components/SpinLoader';
import {
  SubCategoryNameLoader,
  PostThumbLoader,
  StreamLoader,
  PostItemLoader,
} from 'components/ContentLoader';
import { Mobile } from 'components/Responsive';
import AdUnit from 'components/AdUnit';

import { get, capitalize } from 'lodash';
import { createStructuredSelector } from 'reselect';
import { setPageType } from '../App/actions';
import { matchSubCategory } from '../../utils/helpers';
import Card from '../../components/Card';

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export class SubCategory extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hideMe: true,
      posts: [],
      isFirstRequest: true,
      ready: false,
      category: {},
      params: {
        select: 'title,slug,summary',
        sort: 'createdAt DESC',
        populate: 'thumbnail,tags',
        where: {
          status: 'publish',
          scheduleDate: 0,
        },
      },
    };

    this.fetchPosts = this.fetchPosts.bind(this);
    this.loadNextItems = this.loadNextItems.bind(this);
  }

  operation() {
    this.setState({ hideMe: false });
  }

  async componentDidMount() {
    await this.setState({ ready: false });
    await this.fetchPosts();
    await this.setState({ ready: true });
  }

  componentWillReceiveProps(nextProps) {
    const prevSlug = this.props.location.pathname;
    const nextSlug = nextProps.location.pathname;
    if (nextSlug !== prevSlug) {
      this.setState({ isFirstRequest: true }, async () => {
        await this.setState({ ready: false });
        await this.fetchPosts();
        await this.setState({ ready: true });
      });
    }
  }

  async fetchPosts(page = '1') {
    const { posts, params, isFirstRequest } = this.state;
    const match = matchSubCategory(this.props.location.pathname);
    const slug = match.params.subCategory;
    let listOfPost;
    let postMeta;
    let postCategory;

    try {
      const query = { ...params, page };
      const response = await agent
        .get(`/categories/${slug}/posts`)
        .query(query);
      listOfPost = response.body.results;
      postMeta = response.body.meta;
      postCategory = response.body.category;
    } catch (e) {
      listOfPost = [];
      postMeta = {};
    }

    // Set state
    this.setState({
      category: postCategory,
      posts: isFirstRequest ? listOfPost : posts.concat(listOfPost),
      hasMoreItems: !!get(postMeta, 'nextPage'),
      isFirstRequest: false,
    });

    // Set page type
    this.props.setPageType('SubCategory');
  }

  async loadNextItems(page) {
    await this.fetchPosts(page);
  }

  render() {
    const { category, posts, ready, hasMoreItems } = this.state;
    const subCategoryDescription = get(category, 'description', '');
    const subCategoryTitle = get(category, 'title', '');
    const subCategoryName = get(category, 'name', 'Uncategorized');
    const categorySlug = get(category, 'parent.slug', 'uncategorized');
    const subCategorySlug = get(category, 'slug', 'uncategorized');
    const excludeCategories = ['sectors', 'country'];
    const noIndex = excludeCategories.some(
      item => categorySlug.indexOf(item) > -1,
    );

    return (
      <section className="content">
        <Helmet>
          <title>{subCategoryTitle || capitalize(subCategoryName)}</title>
          <meta name="description" content={subCategoryDescription} />
          {noIndex && <meta name="robots" content="noindex, nofollow" />}
          <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHLN6QP'); `}</script>
          <script>
            {`  
      !function(a,b,c,d,e){var f=window.kochava=window.kochava||[];if(f.loaded)return void(window.console&&console.error&&console.error("Kochava snippet already included"));f.loaded=!0,f.methods=["page","identify","activity","conversion","init"],stub=function(a){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(a),f.push(b),f}};for(var g=0;g<f.methods.length;g++){var h=f.methods[g];f[h]=stub(h)}f.init((new Date).getTime(),a,e),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=("https:"===document.location.protocol?"https://":"http://")+"assets.kochava.com/kochava.js/"+b+"/kochava.min.js",d||(a.src=a.src+"?c="+Math.random());var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)}(),c&&f.page()
}("koame-info-uz3i","v2.1",true,true,false);
         `}
          </script>
        </Helmet>
        <section className="sub-category">
          <div className="content-wrapper">
            <div className="relate">
              <SubCategoryNameLoader ready={ready}>
                <h4 className="red_side med_txt">{subCategoryName}</h4>
              </SubCategoryNameLoader>
            </div>
            <div className="clearfix"> </div>
            <div className="sub-category-box" style={{ paddingTop: '0px' }}>
              <div className="clearfix"> </div>
              <Row>
                <Col lg="6" key={uniqid()}>
                  <PostThumbLoader ready={ready} grid>
                    {posts.slice(0, 1).map(post => (
                      <Card
                        slug={`/${categorySlug}/${subCategorySlug}/${get(
                          post,
                          'slug',
                        )}`}
                        title={get(post, 'title')}
                        cover={get(post, 'thumbnail.link')}
                        description={get(post, 'summary')}
                      />
                    ))}
                  </PostThumbLoader>
                </Col>
                <Col lg="6">
                  <StreamLoader ready={ready} clone={4} column={6} grid>
                    <Row>
                      {posts.slice(1, 5).map(post => (
                        <Col lg="6" key={uniqid()}>
                          <div
                            className={cn({
                              space20: post.index === 2,
                              space0: post.index !== 0,
                            })}
                          >
                            <Card
                              type="square"
                              slug={`/${categorySlug}/${subCategorySlug}/${get(
                                post,
                                'slug',
                              )}`}
                              title={get(post, 'title')}
                              cover={get(post, 'thumbnail.link')}
                            />
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </StreamLoader>
                </Col>
              </Row>
            </div>
          </div>
          <div className="post-list">
            <AdUnit id="div-gpt-ad-7742036-6" />
            <AdUnit id="div-gpt-ad-7742036-7" />
            <AdUnit id="div-gpt-ad-7742036-11" />
            <Mobile>
              <div className="slot-14">
                <AdUnit id="div-gpt-ad-7742036-14" />
              </div>
              <AdUnit id="div-gpt-ad-7742036-3" className="text-center mb-4" />
              {this.state.hideMe ? (
                <div className="bottom-ad">
                  <div className="close-div">
                    <button type="button" onClick={() => this.operation()}>
                      <i className="fa fa-window-close" aria-hidden="true" />
                    </button>
                  </div>

                  <AdUnit className="bottom-stick" id="div-gpt-ad-7742036-12" />
                </div>
              ) : null}
            </Mobile>
            <PostItemLoader ready={ready} clone={5} column={12} grid>
              <InfiniteScroll
                pageStart={1}
                loadMore={this.loadNextItems}
                hasMore={hasMoreItems}
                loader={<SpinLoader />}
              >
                {posts.slice(5).map(post => (
                  <PostItem
                    key={uniqid()}
                    title={get(post, 'title')}
                    description={get(post, 'summary')}
                    link={`/${categorySlug}/${subCategorySlug}/${get(
                      post,
                      'slug',
                    )}`}
                    hashTag={`${get(post, 'tags[0].name')}`}
                    hashTagLink={`/tag/${get(post, 'tags[0].slug')}`}
                    imageUrl={get(post, 'thumbnail.link')}
                    date={moment(get(post, 'createdAt')).format('MMMM DD,YYYY')}
                  />
                ))}
              </InfiniteScroll>
            </PostItemLoader>
          </div>
        </section>
      </section>
    );
  }
}

SubCategory.propTypes = {
  setPageType: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    setPageType: pageType => dispatch(setPageType(pageType)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SubCategory);

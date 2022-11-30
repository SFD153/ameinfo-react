/**
 *
 * SubCategoryLifestyle
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import agent from 'utils/agent';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroller';
import { PostThumbLoader } from 'components/ContentLoader';
import Box from 'components/Box';
import SpinLoader from 'components/SpinLoader';
import { get, capitalize } from 'lodash';
import { Mobile } from 'components/Responsive';
import AdUnit from 'components/AdUnit';

import { createStructuredSelector } from 'reselect';
import { setPageType } from '../App/actions';

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export class SubCategoryLifestyle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hideMe: true,
      posts: [],
      slug: 'lifestyle',
      ready: false,
      isFirstRequest: true,
      hasMoreItems: true,
      categoryPostParams: {
        select: 'title,slug,summary',
        sort: 'createdAt DESC',
        populate: 'thumbnail,tags',
        perPage: '11',
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
    this.setState({ ready: false });
    await this.fetchPosts();
    this.setState({ ready: true });
  }

  async fetchPosts(page = '1') {
    const { isFirstRequest, posts, slug, categoryPostParams } = this.state;
    let listOfPost;
    let postMeta;

    try {
      const params = { ...categoryPostParams, page };
      const response = await agent
        .get(`/categories/${slug}/posts`)
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
    this.props.setPageType('SubCategoryLifestyle');
  }

  async loadNextItems(page) {
    await this.fetchPosts(page);
  }

  renderItem(item, position) {
    if (position === 3) {
      return (
        <Col lg="6" className="space20" key={get(item, 'id')}>
          <Mobile>
            <AdUnit id="div-gpt-ad-7742036-14" />
            <AdUnit id="div-gpt-ad-7742036-3" className="text-center mb-4" />
            <AdUnit className="bottom-stick" id="div-gpt-ad-7742036-12" />
          </Mobile>
          <Box
            link={`/lifestyle/${get(item, 'slug')}`}
            imageUrl={get(item, 'thumbnail.link')}
            tagName={get(item, 'tags[0].name')}
            tagSlug={`/tag/${get(item, 'tags[0].slug')}`}
            title={get(item, 'title')}
          />
        </Col>
      );
    }

    return (
      <Col lg="6" className="space20" key={get(item, 'id')}>
        <Box
          link={`/lifestyle/${get(item, 'slug')}`}
          imageUrl={get(item, 'thumbnail.link')}
          tagName={get(item, 'tags[0].name')}
          tagSlug={`/tag/${get(item, 'tags[0].slug')}`}
          title={get(item, 'title')}
        />
      </Col>
    );
  }

  render() {
    const { posts, hasMoreItems, ready } = this.state;
    const categoryName = this.props.match.params.slug;

    return (
      <section className="content">
        <Helmet>
          <title>{capitalize(categoryName)}</title>
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
        <section className="lifestyle sub-category post-list space20">
          <PostThumbLoader ready={ready} clone={10} column={6} grid>
            <InfiniteScroll
              pageStart={1}
              loadMore={this.loadNextItems}
              hasMore={hasMoreItems}
              loader={<SpinLoader />}
            >
              <AdUnit id="div-gpt-ad-7742036-6" />
              <AdUnit id="div-gpt-ad-7742036-7" />
              <AdUnit id="div-gpt-ad-7742036-11" />
              <Mobile>
                {this.state.hideMe ? (
                  <div className="bottom-ad">
                    <div className="close-div">
                      <button type="button" onClick={() => this.operation()}>
                        <i className="fa fa-window-close" aria-hidden="true" />
                      </button>
                    </div>

                    <AdUnit
                      className="bottom-stick"
                      id="div-gpt-ad-7742036-12"
                    />
                  </div>
                ) : null}
              </Mobile>
              <Row>{posts.map(this.renderItem)}</Row>
            </InfiniteScroll>
          </PostThumbLoader>
        </section>
      </section>
    );
  }
}

SubCategoryLifestyle.propTypes = {
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

export default compose(withConnect)(SubCategoryLifestyle);

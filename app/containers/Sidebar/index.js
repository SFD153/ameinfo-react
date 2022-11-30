/**
 *
 * Sidebar
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import SubFeaturedMedia from 'components/SubFeaturedMedia/Loadable';
import TextItem from 'components/TextItem/Loadable';
import AdUnit from 'components/AdUnit';
import agent from 'utils/agent';
import { Link } from 'react-router-dom';
import { link } from 'utils/helpers';
import {
  FeaturedBannerLoader,
  TextItemLoader,
  FeaturedMediaLoader,
  SideAdLoader,
} from 'components/ContentLoader';

import injectReducer from 'utils/injectReducer';
import { get, isEmpty, isEqual } from 'lodash';
import uniqid from 'uniqid';
import isImmutable from 'is-immutable';
import makeSelectSidebar, { makeSelectPostId } from './selectors';
import reducer from './reducer';
import { makeSelectPageType } from '../App/selectors';
import {
  makeSelectParentCategory,
  makeSelectSettings,
} from '../AppSetting/selectors';

/* eslint-disable react/prefer-stateless-function */
export class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      posts: [],
      categories: [],
      postParams: {
        select: 'title,slug',
        populate: 'thumbnail,categories',
        sort: 'createdAt DESC',
        perPage: '3',
        where: {
          status: 'publish',
          scheduleDate: 0,
        },
      },
      categoryParams: {
        select: 'title,slug',
        sort: 'createdAt DESC',
        populate: 'thumbnail,categories',
        perPage: '5',
        where: {
          status: 'publish',
          scheduleDate: 0,
        },
      },
    };
  }

  async componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.settings, this.props.settings)) {
      await this.fetchAllItems();
    }
  }

  async componentDidMount() {
    if (!isImmutable(this.props.settings)) {
      await this.fetchAllItems();
    }
  }

  async fetchAllItems() {
    this.setState({ ready: false });
    const { postParams, categoryParams } = this.state;
    const { settings, postId } = this.props;
    const featuredSidebar = get(settings, 'featured_sidebar', {});
    const selectedFeaturedPosts = get(featuredSidebar, 'featuredPosts', []);
    const selectedFeaturedCategories = get(
      featuredSidebar,
      'featuredCategory',
      [],
    );

    let posts;
    try {
      // Check feature post is selected or not
      if (!isEmpty(selectedFeaturedPosts)) {
        postParams.where = { id: selectedFeaturedPosts };
      } else {
        postParams.where = {
          id: { '!=': postId },
          status: 'publish',
          scheduleDate: 0,
        };
      }

      const response = await agent.get('/posts').query(postParams);
      posts = response.body.results;
    } catch (e) {
      posts = [];
    }

    const categories = [];
    await Promise.all(
      selectedFeaturedCategories.map(async category => {
        const id = get(category, 'key', '');
        const response = await agent
          .get(`/categories/${id}/posts`)
          .query(categoryParams);
        const { results } = response.body;
        if (!isEmpty(results)) categories.push(response.body);
      }),
    );

    this.setState({
      categories,
      posts,
      ready: true,
    });
  }

  render() {
    const { posts, categories, ready } = this.state;
    const { pageType, parentCategory } = this.props;

    let space;
    switch (pageType) {
      case 'SubCategoryLifestyle':
        space = '40';
        break;
      case 'SubCategory':
        space = '60';
        break;
      case 'Post':
        space = '0';
        break;
      default:
        space = '0';
        break;
    }

    return (
      <section className={`side-bar side-bar-full-height space${space}`}>
        <Fragment>
          <FeaturedBannerLoader ready={ready}>
            <AdUnit id="div-gpt-ad-7742036-3" />
          </FeaturedBannerLoader>
          <div className="half_bdrbox mt-4">
            <FeaturedMediaLoader ready={ready} clone={3}>
              {posts.map(item => (
                <SubFeaturedMedia
                  key={uniqid()}
                  link={link(
                    parentCategory,
                    get(item, 'categories[0]'),
                    get(item, 'slug'),
                  )}
                  title={get(item, 'title')}
                  imageUrl={get(item, 'thumbnail.link')}
                  category={get(item, 'categories[0].name')}
                />
              ))}
            </FeaturedMediaLoader>
          </div>
          <TextItemLoader ready={ready}>
            {categories.map(item => (
              <div className="mt-4" key={uniqid()}>
                <Link
                  to={`/${get(item, 'category.parent.slug')}/${get(
                    item,
                    'category.slug',
                  )}`}
                >
                  <button className="btn btn_blue mb-3" type="button">
                    {get(item, 'category.name')}
                  </button>
                </Link>
                {item.results.map(post => (
                  <TextItem
                    key={uniqid()}
                    link={`/${get(item, 'category.parent.slug')}/${get(
                      item,
                      'category.slug',
                    )}/${get(post, 'slug')}`}
                    title={get(post, 'title')}
                  />
                ))}
              </div>
            ))}
          </TextItemLoader>
          <SideAdLoader ready={ready}>
            <AdUnit className="side-banner mb-5" id="div-gpt-ad-7742036-4" />
          </SideAdLoader>
        </Fragment>
      </section>
    );
  }
}

Sidebar.propTypes = {
  pageType: PropTypes.string,
  settings: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  postId: PropTypes.string,
  parentCategory: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  parentCategory: makeSelectParentCategory(),
  sidebar: makeSelectSidebar(),
  settings: makeSelectSettings(),
  pageType: makeSelectPageType(),
  postId: makeSelectPostId(),
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

const withReducer = injectReducer({ key: 'sidebar', reducer });

export default compose(
  withReducer,
  withConnect,
)(Sidebar);

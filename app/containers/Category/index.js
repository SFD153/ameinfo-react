/**
 *
 * Category
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import AdUnit from 'components/AdUnit';
import OwlCarousel from 'react-owl-carousel';
import AmeInfoTipsImage from 'assets/images/AMEinfo-tips.png';
import Item from 'components/Item';
import AmeInfoStreamImage from 'assets/images/ameinfo-stream.png';
import { MyCarousel, MyCarousel2 } from 'components/OwlCarouselConfig';
import agent from 'utils/agent';
import { Link } from 'react-router-dom';
import TextItem from 'components/TextItem';
import moment from 'moment/moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import uniqid from 'uniqid';
import { get, capitalize, shuffle } from 'lodash';
import {
  FeaturedBannerLoader,
  TextItemLoader,
  StreamLoader,
  SideAdLoader,
  MediaCategoryLoader,
} from 'components/ContentLoader';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import { matchCategory, link } from 'utils/helpers';
import { createStructuredSelector } from 'reselect';
import { makeSelectParentCategory } from '../AppSetting/selectors';
import { setAdRectangle } from '../App/actions';

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export class Category extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      ready: false,
      categories: [],
      categoryTitle: '',
      categoryDescription: '',
      postParams: {
        select: 'title,slug,thumbnail,createdAt,summary',
        sort: 'createdAt DESC',
        populate: 'thumbnail',
        where: {
          status: 'publish',
        },
      },
    };
  }

  async componentDidMount() {
    const { categoryParams, postParams } = this.state;

    let categories;
    try {
      const response = await agent
        .get('/categories/optimization')
        .query(categoryParams);
      categories = response.body;
    } catch (e) {
      categories = [];
    }

    let posts;
    try {
      const response = await agent.get('/posts').query(postParams);
      posts = response.body.results;
    } catch (e) {
      posts = [];
    }

    let categoryTitle = '';
    let categoryDescription = '';
    try {
      const match = matchCategory(this.props.location.pathname);
      const categorySlug = match.params.category;
      const response = await agent
        .get('/categories')
        .query({ where: { slug: categorySlug } });
      const cat = response.body.results[0];
      categoryTitle = cat.title;
      categoryDescription = cat.description;
    } catch (e) {
      categoryTitle = '';
      categoryDescription = '';
    }

    // Set state
    this.setState({
      posts,
      categories,
      ready: true,
      categoryTitle,
      categoryDescription,
    });
  }

  render() {
    const {
      categories,
      posts,
      ready,
      categoryTitle,
      categoryDescription,
    } = this.state;
    const { parentCategory } = this.props;
    const tip = shuffle(categories.slice(0, 8));
    const stream = shuffle(categories.slice(0, 8));
    const match = matchCategory(this.props.location.pathname);
    const categorySlug = match.params.category;
    const categoryName = categorySlug.split('-').join(' ');

    // console.log(this.state)

    return (
      <section className="content">
        <Helmet>
          <title>{categoryTitle || capitalize(categoryName)}</title>
          <meta name="description" content={categoryDescription} />
        </Helmet>
        <section className="ame-category">
          <section className="leave_sec" id="c_leave">
            <Container fluid>
              <Row>
                <Col md="12">
                  <section className="banner">
                    <Container>
                      <Row>
                        <Col md="12">
                          <Row className="space30">
                            <Col md="3" id="third">
                              <FeaturedBannerLoader ready={ready}>
                                <AdUnit id="div-gpt-ad-7742036-6" />
                                <AdUnit id="div-gpt-ad-7742036-7" />
                                <AdUnit id="div-gpt-ad-7742036-11" />
                                <AdUnit id="div-gpt-ad-1365507342620-3" />
                              </FeaturedBannerLoader>
                            </Col>
                            <Col md="9">
                              <MediaCategoryLoader ready={ready}>
                                {categories.slice(0, 1).map(category => (
                                  <div
                                    className="media color_div"
                                    key={uniqid()}
                                  >
                                    <div className="scale tab_box">
                                      <Row>
                                        <Col
                                          md="5"
                                          className="fix_div mr-5"
                                          id="first"
                                        >
                                          <Link
                                            to={link(
                                              parentCategory,
                                              category,
                                              get(category, 'posts[0].slug'),
                                            )}
                                          >
                                            <img
                                              src={get(
                                                category,
                                                'posts[0].thumbnail.link',
                                              )}
                                              alt={get(
                                                category,
                                                'posts[0].title',
                                              )}
                                            />
                                          </Link>
                                        </Col>
                                        <Col
                                          md="7"
                                          className="media-body"
                                          id="second"
                                        >
                                          <Link
                                            to={link(
                                              parentCategory,
                                              category,
                                              get(category, 'posts[0].slug'),
                                            )}
                                          >
                                            <h3 className="middle_txt">
                                              {get(category, 'posts[0].title')}
                                            </h3>

                                            <p>{get(posts[0], 'summary')}</p>
                                          </Link>
                                          <ul className="list-inline d-flex justify-content-end featured-social">
                                            <li className="list-inline-item">
                                              <TwitterShareButton
                                                url={window.location.href}
                                                title={get(posts[0], 'title')}
                                              >
                                                <i className="fa fa-twitter" />
                                              </TwitterShareButton>
                                            </li>
                                            <li className="list-inline-item">
                                              <FacebookShareButton
                                                url={window.location.href}
                                                quote={get(posts[0], 'title')}
                                              >
                                                <i className="fa fa-facebook" />
                                              </FacebookShareButton>
                                            </li>
                                            <li className="list-inline-item">
                                              <LinkedinShareButton
                                                url={window.location.href}
                                                title={get(posts[0], 'title')}
                                              >
                                                <i className="fa fa-linkedin" />
                                              </LinkedinShareButton>
                                            </li>
                                          </ul>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                ))}
                              </MediaCategoryLoader>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                  <section className="ame-mid">
                    <Container>
                      <Row>
                        <Col md="9">
                          <TextItemLoader
                            ready={ready}
                            clone={3}
                            column={4}
                            grid
                          >
                            <Row>
                              {categories.slice(0, 3).map((category, index) => (
                                <Col
                                  md="4"
                                  className={index > 2 ? 'space50' : 'spcae0'}
                                  key={uniqid()}
                                >
                                  <Link
                                    to={link(parentCategory, category)}
                                    className="btn btn_blue mb-3 text-uppercase"
                                  >
                                    {get(category, 'name')}
                                  </Link>
                                  {get(category, 'posts') &&
                                    category.posts
                                      .slice(0, 5)
                                      .map((item, position) => (
                                        <TextItem
                                          key={uniqid()}
                                          thumbnailUrl={
                                            position === 0
                                              ? get(item, 'thumbnail.link')
                                              : null
                                          }
                                          link={link(
                                            parentCategory,
                                            category,
                                            get(item, 'slug'),
                                          )}
                                          title={get(item, 'title')}
                                          horizontal={
                                            position ===
                                            category.posts.slice(0, 5).length -
                                              1
                                          }
                                          indent
                                        />
                                      ))}
                                </Col>
                              ))}
                            </Row>
                          </TextItemLoader>
                          <StreamLoader ready={ready} clone={4} column={3} grid>
                            <Row className="mt-4">
                              {categories.slice(0, 4).map(category => (
                                <Col md="3" key={uniqid()}>
                                  <div className="space30 d-block d-lg-none d-md-none" />
                                  <Link
                                    to={link(
                                      parentCategory,
                                      category,
                                      get(category, 'posts[0].slug'),
                                    )}
                                    className="scale"
                                  >
                                    <div className="scale_box">
                                      <img
                                        src={get(
                                          category,
                                          'posts[0].thumbnail.link',
                                        )}
                                        className="img-fluid mx-auto d-block downtown"
                                        alt={get(category, 'posts[0].title')}
                                      />
                                      <div className="ts-video-icon">
                                        <i className="fa fa-play-circle-o " />
                                      </div>
                                    </div>
                                    <div className="wrapper">
                                      <button
                                        className="btn btn_blue mt-3 mb-3"
                                        type="button"
                                      >
                                        {get(category, 'name')}
                                      </button>
                                    </div>
                                    <p className="small_txt mb-2">
                                      {get(category, 'posts[0].title')}
                                    </p>
                                  </Link>
                                </Col>
                              ))}
                            </Row>
                          </StreamLoader>
                        </Col>
                        <Col md="3">
                          <SideAdLoader ready={ready}>
                            <AdUnit
                              id="div-gpt-ad-1365507342620-4"
                              className="side-banner"
                            />
                          </SideAdLoader>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                  <section className="stream mt-5">
                    <Container>
                      <Row>
                        <Col md="12">
                          <h4 className="red_side med_txt">
                            <img
                              src={AmeInfoStreamImage}
                              className="s_logo"
                              alt="ame info stream"
                            />
                          </h4>
                          <StreamLoader
                            ready={ready}
                            className="mt-4"
                            clone={6}
                            column={2}
                            grid
                          >
                            <OwlCarousel
                              className="owl-carousel mt-4"
                              id="myCarousel"
                              {...MyCarousel}
                            >
                              {stream.map(item => (
                                <Item
                                  link={link(
                                    parentCategory,
                                    item,
                                    get(item, 'posts[0].slug'),
                                  )}
                                  imageUrl={get(
                                    item,
                                    'posts[0].thumbnail.link',
                                  )}
                                  category={get(item, 'name')}
                                  title={get(item, 'posts[0].title')}
                                  format={get(item, 'posts[0].format')}
                                  date={moment(
                                    get(item, 'posts[0].createdAt'),
                                  ).format('MMMM DD,YYYY')}
                                />
                              ))}
                            </OwlCarousel>
                          </StreamLoader>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                  <div className="space60"> </div>
                  <section className="tips space50">
                    <Container>
                      <Row>
                        <Col md="12">
                          <h4 className="red_side med_txt">
                            <img
                              src={AmeInfoTipsImage}
                              className="s_logo"
                              alt="red side"
                            />
                          </h4>
                          <StreamLoader
                            ready={ready}
                            className="mt-4"
                            clone={6}
                            column={2}
                            grid
                          >
                            <OwlCarousel
                              className="owl-carousel mt-4"
                              id="myCarousel2"
                              {...MyCarousel2}
                            >
                              {tip.map(item => (
                                <Item
                                  key={uniqid()}
                                  link={link(
                                    parentCategory,
                                    item,
                                    get(item, 'posts[0].slug'),
                                  )}
                                  imageUrl={get(
                                    item,
                                    'posts[0].thumbnail.link',
                                  )}
                                  category={get(item, 'name')}
                                  title={get(item, 'posts[0].title')}
                                  format={get(item, 'posts[0].format')}
                                  date={moment(
                                    get(item, 'posts[0].createdAt'),
                                  ).format('MMMM DD,YYYY')}
                                />
                              ))}
                            </OwlCarousel>
                          </StreamLoader>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                  <section className="bottom-content">
                    <Container>
                      <Row>
                        <Col md="9">
                          <TextItemLoader
                            ready={ready}
                            className="mt-4"
                            clone={3}
                            column={4}
                            grid
                          >
                            <Row className="first-bottom">
                              {categories.slice(0, 6).map((category, index) => (
                                <Col
                                  md="4"
                                  className={index > 2 ? 'space50' : 'spcae0'}
                                  key={uniqid()}
                                >
                                  <Link
                                    to={link(parentCategory, category)}
                                    className="btn btn_blue mb-3 text-uppercase"
                                  >
                                    {get(category, 'name')}
                                  </Link>
                                  {get(category, 'posts') &&
                                    category.posts
                                      .slice(0, 4)
                                      .map((item, position) => (
                                        <TextItem
                                          key={uniqid()}
                                          thumbnailUrl={
                                            position === 0 && index > 2
                                              ? get(item, 'thumbnail.link')
                                              : null
                                          }
                                          link={link(
                                            parentCategory,
                                            category,
                                            get(item, 'slug'),
                                          )}
                                          title={get(item, 'title')}
                                          horizontal={
                                            position ===
                                            category.posts.slice(0, 4).length -
                                              1
                                          }
                                        />
                                      ))}
                                </Col>
                              ))}
                            </Row>
                          </TextItemLoader>
                        </Col>
                        <Col md="3">
                          <SideAdLoader ready={ready}>
                            <AdUnit
                              id="div-gpt-ad-1365507342620-4"
                              className="side-banner"
                            />
                          </SideAdLoader>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
      </section>
    );
  }
}

Category.propTypes = {
  setAdRectangle: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  parentCategory: makeSelectParentCategory(),
});

function mapDispatchToProps(dispatch) {
  return {
    setAdRectangle: adRectangle => dispatch(setAdRectangle(adRectangle)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Category);

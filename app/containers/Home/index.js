/*
 * Home
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AmeInfoTodayImage from 'assets/images/ameinfo-today.png';
import AmeInfoEditorImage from 'assets/images/ame-editors-pick.png';
import AmeInfoTipImage from 'assets/images/AMEinfo-tips.png';
import AMEInfoIndustryImage from 'assets/images/ameindustries.png';
import AMEInfoContributorImage from 'assets/images/ame-contributors.png';
import Heading from 'components/Heading';
import { Default } from 'components/Responsive';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { FeaturedBannerLoader, SideAdLoader } from 'components/ContentLoader';

import { createStructuredSelector } from 'reselect';
import FeaturedPostList from 'components/FeaturedPostList';
import FeaturedTextList from 'components/FeaturedTextList';
import FeaturedMediaList from 'components/FeaturedMediaList';
import TodayList from 'components/TodayList';
import StreamList from 'components/StreamList';
import CategoryList from 'components/CategoryList';
import AuthorList from 'components/AuthorList';
import IsGPT from 'components/IsGPT';
import AdUnit from 'components/AdUnit';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectParentCategory } from '../AppSetting/selectors';
import {
  makeSelectHome,
  makeSelectEditors,
  makeSelectFeaturedMedias,
  makeSelectFeaturedPosts,
  makeSelectFeaturedTexts,
  makeSelectTips,
  makeSelectTodays,
  makeSelectUsers,
  makeSelectIndustries,
} from './selectors';
import saga from './saga';
import reducer from './reducer';

export class Home extends React.PureComponent {
  render() {
    const {
      parentCategory,
      users,
      featuredPosts,
      featuredTexts,
      featuredMedias,
      todays,
      editors,
      tips,
      industries,
      isGPTLoaded,
    } = this.props;

    return (
      <section className="content">
        <Helmet>
          <title>Business Real Estate News | Technology | Travel Guide</title>
          <meta
            name="description"
            content="Find the latest business, economic &amp; real estate news. Check AMEInfo for current information on Energy &amp; Power Updates. Also, explore our travel guide."
          />
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
        <section className="leave_sec">
          <Container fluid>
            <Row>
              <Col md="12">
                <section className="banner">
                  <Container>
                    <Row>
                      <Col md="12">
                        <Row className="space30">
                          <Col
                            lg="4"
                            md="6"
                            xs="12"
                            className="featured-article"
                            id="first"
                          >
                            <FeaturedPostList
                              parentCategory={parentCategory}
                              data={featuredPosts}
                            />
                          </Col>
                          <Col
                            lg={3}
                            md={4}
                            className="featured-text"
                            id="second"
                          >
                            <FeaturedTextList
                              parentCategory={parentCategory}
                              data={featuredTexts}
                            />
                          </Col>
                          <Col
                            lg={3}
                            md={3}
                            xs={24}
                            className="featured-media"
                            id="fourth"
                          >
                            <FeaturedMediaList
                              parentCategory={parentCategory}
                              data={featuredMedias}
                            />
                          </Col>
                          <Col
                            lg="4"
                            md="6"
                            xs="12"
                            className="featured-banner"
                            id="third"
                          >
                            <FeaturedBannerLoader ready={isGPTLoaded}>
                              <AdUnit id="div-gpt-ad-7742036-1" />
                              <AdUnit id="div-gpt-ad-7742036-3" />
                              <AdUnit id="div-gpt-ad-7742036-6" />
                              <AdUnit id="div-gpt-ad-7742036-11" />
                            </FeaturedBannerLoader>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </section>
                <section className="on" id="ame-before-mid">
                  <Container>
                    <Row>
                      <Col md="6" className="red_side-today">
                        <Heading source={AmeInfoTodayImage} />
                        <TodayList
                          parentCategory={parentCategory}
                          data={todays}
                        />
                      </Col>
                      <Col md="6" className="editorpicks">
                        <Heading source={AmeInfoEditorImage} />
                        <TodayList
                          parentCategory={parentCategory}
                          data={editors}
                        />
                      </Col>
                    </Row>
                  </Container>
                </section>
                <section
                  className="ame-mid red_side-industries tifny space50"
                  id="ame-mid"
                >
                  <Container>
                    <Row>
                      <Col md="9">
                        <Row>
                          <Col md={12}>
                            <Heading source={AMEInfoIndustryImage} />
                          </Col>
                        </Row>
                        <CategoryList
                          parentCategory={parentCategory}
                          data={industries}
                        />
                        <Row className="mt-4">
                          <Col md="4" className="mobile-banner-1">
                            <AdUnit id="div-gpt-ad-7742036-3" />
                            <AdUnit
                              className="bottom-stick"
                              id="div-gpt-ad-7742036-12"
                            />
                            <AdUnit id="div-gpt-ad-7742036-14" />
                          </Col>
                        </Row>
                        <Row className="mt-4">
                          <Col md="12">
                            <Heading source={AMEInfoContributorImage} />
                            <AuthorList data={users} />
                          </Col>
                        </Row>
                      </Col>
                      <Col md="3">
                        <SideAdLoader ready={isGPTLoaded}>
                          <AdUnit
                            id="div-gpt-ad-7742036-4"
                            className="side-banner"
                          />
                        </SideAdLoader>
                      </Col>
                    </Row>
                  </Container>
                </section>
                <br />
                <br />
                <Default>
                  <AdUnit id="div-gpt-ad-7742036-8" className="text-center" />
                  <AdUnit id="div-gpt-ad-7742036-5" />
                  <AdUnit id="div-gpt-ad-7742036-7" />
                </Default>
                <section className="tips red_side-stream mb-5">
                  <Container>
                    <Row>
                      <Col md="12">
                        <Heading source={AmeInfoTipImage} />
                        <StreamList
                          parentCategory={parentCategory}
                          data={tips}
                          column={2}
                          limit={6}
                        />
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

Home.propTypes = {
  users: PropTypes.array,
  tips: PropTypes.array,
  editors: PropTypes.array,
  todays: PropTypes.array,
  featuredMedias: PropTypes.array,
  featuredTexts: PropTypes.array,
  featuredPosts: PropTypes.array,
  industries: PropTypes.array,
  parentCategory: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isGPTLoaded: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  parentCategory: makeSelectParentCategory(),
  featuredPosts: makeSelectFeaturedPosts(),
  featuredTexts: makeSelectFeaturedTexts(),
  featuredMedias: makeSelectFeaturedMedias(),
  todays: makeSelectTodays(),
  editors: makeSelectEditors(),
  users: makeSelectUsers(),
  tips: makeSelectTips(),
  industries: makeSelectIndustries(),
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

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  IsGPT,
  withReducer,
  withSaga,
  withConnect,
)(Home);

/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import MobileMenu from 'containers/MobileMenu';
import TopHeader from 'containers/TopHeader';
import PreHeader from 'components/PreHeader';
import Menu from 'containers/Menu';
import Footer from 'containers/Footer';
import Copyright from 'components/Copyright';
import ScrollToTop from 'components/ScrollToTop/Loadable';
import RefreshAds from 'components/RefreshAds/Loadable';
import Home from 'containers/Home';
import Post from 'containers/Post';
import Page from 'containers/Page';
import Category from 'containers/Category';
import SubCategory from 'containers/SubCategory';
import SubCategoryLifestyle from 'containers/SubCategoryLifestyle';
import TopBanner from 'containers/TopBanner/Loadable';
import AppSetting from 'containers/AppSetting/Loadable';
import FullScreenSearch from 'containers/FullScreenSearch/Loadable';
import SidebarLayout from 'components/SidebarLayout';
import SidebarVideoLayout from 'components/SidebarVideoLayout';
import RedirectOldLinkToNewLink from 'components/RedirectOldLinkToNewLink';
import InjectAds from 'containers/InjectAds';
import GoogleAnalytics from 'containers/GoogleAnalytics';
import GoogleTagManager from 'containers/GoogleTagManager';
import VideoEvent from 'containers/VideoEvent';
import VideoEventDetail from 'containers/VideoEventDetail';
import VideoSeries from 'containers/VideoSeries';
import VideoList from 'containers/VideoList';
import VideoDetail from 'containers/VideoDetail';

import Tag from 'containers/Tag/Loadable';
import Author from 'containers/Author/Loadable';
import Search from 'containers/Search/Loadable';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export class App extends React.Component {
  render() {
    return (
      <section id="outer-container">
        <GoogleTagManager />
        <GoogleAnalytics />
        <AppSetting />
        <RefreshAds />
        <ScrollToTop />
        <MobileMenu />
        <InjectAds />
        <section id="page-wrap">
          <TopHeader />
          <PreHeader />
          <Menu />
          <FullScreenSearch />
          <TopBanner />
          <RedirectOldLinkToNewLink />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/event"
              component={() =>
                window.location.replace('https://event.ameinfo.com')
              }
            />
            <SidebarVideoLayout exact path="/video" component={VideoEvent} />
            <SidebarVideoLayout
              exact
              path="/video/preview/:detailSlug"
              component={VideoDetail}
            />
            <SidebarVideoLayout
              exact
              path="/video/:eventDetailSlug"
              component={VideoEventDetail}
            />
            <SidebarVideoLayout
              exact
              path="/video/:eventDetailSlug/:seriesSlug"
              component={VideoSeries}
            />
            <SidebarVideoLayout
              exact
              path="/video/:eventDetailSlug/:seriesSlug/:listSlug"
              component={VideoList}
            />
            <SidebarVideoLayout
              exact
              path="/video/:eventDetailSlug/:seriesSlug/:listSlug/:detailSlug"
              component={VideoDetail}
            />
            <Route exact path="/lifestyle/:postSlug" component={Post} />
            <SidebarLayout path="/lifestyle" component={SubCategoryLifestyle} />
            <Route exact path="/post/preview/:postSlug" component={Post} />
            <Route exact path="/post/:postSlug" component={Post} />
            <Route exact path="/page/preview/:pageSlug" component={Page} />
            <SidebarLayout exact path="/tag/:slug" component={Tag} />
            <SidebarLayout exact path="/author/:slug" component={Author} />
            <SidebarLayout exact path="/search/:slug" component={Search} />
            <Route exact path="/country" component={Category} />
            <SidebarLayout exact path="/country/gcc" component={SubCategory} />
            <Route exact path="/country/gcc/:postSlug" component={Post} />
            <SidebarLayout
              exact
              path="/country/levant"
              component={SubCategory}
            />
            <Route exact path="/country/levant/:postSlug" component={Post} />
            <SidebarLayout
              exact
              path="/country/north-africa"
              component={SubCategory}
            />
            <Route
              exact
              path="/country/north-africa/:postSlug"
              component={Post}
            />
            <SidebarLayout
              exact
              path="/country/global"
              component={SubCategory}
            />
            <Route exact path="/country/global/:postSlug" component={Post} />
            <Route exact path="/sectors" component={Category} />
            <SidebarLayout
              exact
              path="/sectors/corporate"
              component={SubCategory}
            />
            <Route exact path="/sectors/corporate/:postSlug" component={Post} />
            <SidebarLayout exact path="/sectors/smb" component={SubCategory} />
            <Route exact path="/sectors/smb/:postSlug" component={Post} />
            <SidebarLayout
              exact
              path="/sectors/startup"
              component={SubCategory}
            />
            <Route exact path="/sectors/startup/:postSlug" component={Post} />
            <SidebarLayout
              exact
              path="/sectors/government"
              component={SubCategory}
            />
            <Route
              exact
              path="/sectors/government/:postSlug"
              component={Post}
            />
            <Route exact path="/industry" component={Category} />
            <SidebarLayout
              exact
              path="/industry/real-estate"
              component={SubCategory}
            />
            <Route
              exact
              path="/industry/real-estate/:postSlug"
              component={Post}
            />
            <SidebarLayout
              exact
              path="/industry/energy"
              component={SubCategory}
            />
            <Route exact path="/industry/energy/:postSlug" component={Post} />
            <SidebarLayout
              exact
              path="/industry/finance"
              component={SubCategory}
            />
            <Route exact path="/industry/finance/:postSlug" component={Post} />
            <SidebarLayout
              exact
              path="/industry/healthcare"
              component={SubCategory}
            />
            <Route
              exact
              path="/industry/healthcare/:postSlug"
              component={Post}
            />
            <SidebarLayout
              exact
              path="/industry/media"
              component={SubCategory}
            />
            <Route exact path="/industry/media/:postSlug" component={Post} />
            <SidebarLayout
              exact
              path="/industry/travel"
              component={SubCategory}
            />
            <Route exact path="/industry/travel/:postSlug" component={Post} />
            <SidebarLayout
              exact
              path="/industry/technology"
              component={SubCategory}
            />
            <Route
              exact
              path="/industry/technology/:postSlug"
              component={Post}
            />
            <SidebarLayout
              exact
              path="/industry/education"
              component={SubCategory}
            />
            <Route
              exact
              path="/industry/education/:postSlug"
              component={Post}
            />
            <SidebarLayout
              exact
              path="/industry/retail"
              component={SubCategory}
            />
            <Route exact path="/industry/retail/:postSlug" component={Post} />
            <SidebarLayout
              exact
              path="/industry/industry-government"
              component={SubCategory}
            />
            <Route
              exact
              path="/industry/industry-government/:postSlug"
              component={Post}
            />
            <Route exact path="/lifestyle" component={SubCategoryLifestyle} />
            <Route
              exact
              path="/uncategorized/uncategorized/:postSlug"
              component={Post}
            />
            <Route exact path="/uncategorized/:postSlug" component={Post} />
            <Route path="*" component={Page} />
          </Switch>
          <Footer />
          <Copyright />
        </section>
      </section>
    );
  }
}

App.propTypes = {};

const mapStateToProps = createStructuredSelector({});

const withReducer = injectReducer({ key: 'App', reducer });
const withConnect = connect(mapStateToProps);

export default compose(
  withRouter,
  withReducer,
  withConnect,
)(App);

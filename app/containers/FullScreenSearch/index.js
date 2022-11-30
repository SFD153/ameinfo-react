/**
 *
 * FullScreenSearch
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Modal from 'react-responsive-modal';
import cn from 'classnames';
import { ClipLoader } from 'react-spinners';
import { Row, Col } from 'reactstrap';
import uniqid from 'uniqid';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import SearchItem from 'components/SearchItem/Loadable';
import { link } from 'utils/helpers';

import { action as setMobileMenu } from 'redux-burger-menu';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import { setFullScreenSearch, searchPosts } from './actions';
import { makeSelectParentCategory } from '../AppSetting/selectors';
import {
  makeSelectOpenFullScreenSearch,
  makeSelectLoading,
  makeSelectCount,
  makeSelectKeyword,
  makeSelectPosts,
} from './selectors';
import saga from './saga';

/*
eslint-disable react/prefer-stateless-function,
react/prop-types,
jsx-a11y/anchor-is-valid,
jsx-a11y/no-autofocus,
no-param-reassign
*/
export class FullScreenSearch extends React.PureComponent {
  handleClickCloseAll = () => {
    this.props.setFullScreenSearch(false);
    this.props.setMobileMenu(false);
  };

  render() {
    const { parentCategory, loading, posts, count, keyword } = this.props;
    return (
      <Modal
        classNames={{
          modal: 'search-modal',
          overlay: 'search-overlay',
          closeButton: 'search-close',
        }}
        open={this.props.open}
        onClose={() => this.props.setFullScreenSearch(false)}
        center={false}
      >
        <section>
          <form onSubmit={e => e.preventDefault()}>
            <h2 className="search-title">Search</h2>
            <p className="mt-5">
              <input
                type="text"
                name="keyword"
                className="form-control search-input"
                autoComplete="off"
                placeholder="I'm looking for"
                autoFocus={!isMobile}
                onChange={e => this.props.searchPosts(e.target.value)}
              />
            </p>
          </form>
          <div
            className={cn({
              'search-loading': true,
              'top-25': true,
              hide: !loading,
            })}
          >
            <ClipLoader size={120} color="#fff" />
          </div>
          <div
            className={cn({
              'search-result': true,
              'mt-5': true,
              hide: count <= 0 || loading,
            })}
          >
            <Row>
              {posts.map(post => (
                <Col md={4} key={uniqid()}>
                  <div
                    className="search-small-text search-category-align-left"
                    onClick={this.handleClickCloseAll}
                    onKeyDown={this.handleClickCloseAll}
                    role="button"
                    tabIndex={0}
                  >
                    <SearchItem
                      key={get(post, 'id')}
                      link={link(
                        parentCategory,
                        get(post, 'categories[0]'),
                        get(post, 'slug'),
                      )}
                      imageUrl={get(post, 'thumbnail.link')}
                      category={get(post, 'categories[0].name')}
                      title={get(post, 'title')}
                      keyword={keyword}
                    />
                  </div>
                </Col>
              ))}
            </Row>
            <Row className="mt-5">
              <Col>
                <p className="text-center text-white">FOUND ({count}) POSTS</p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link
                  to={`/search/${keyword}`}
                  onClick={this.handleClickCloseAll}
                >
                  <button type="button" className="search-load-more">
                    SEE ALL POSTS
                  </button>
                </Link>
              </Col>
            </Row>
          </div>
        </section>
      </Modal>
    );
  }
}

FullScreenSearch.propTypes = {
  open: PropTypes.bool,
  setFullScreenSearch: PropTypes.func,
  setMobileMenu: PropTypes.func,
  searchPosts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  parentCategory: makeSelectParentCategory(),
  open: makeSelectOpenFullScreenSearch(),
  loading: makeSelectLoading(),
  posts: makeSelectPosts(),
  count: makeSelectCount(),
  keyword: makeSelectKeyword(),
});

function mapDispatchToProps(dispatch) {
  return {
    setFullScreenSearch: open => dispatch(setFullScreenSearch(open)),
    setMobileMenu: open => dispatch(setMobileMenu(open)),
    searchPosts: keyword => dispatch(searchPosts(keyword)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'fullScreenSearch', reducer });
const withSaga = injectSaga({ key: 'fullScreenSearch', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FullScreenSearch);

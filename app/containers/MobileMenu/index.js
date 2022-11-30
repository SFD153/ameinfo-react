/**
 *
 * MobileMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

import { Link } from 'react-router-dom';
import { get, isEmpty } from 'lodash';
import uniqid from 'uniqid';
import Menu from 'components/BurgerMenu';
import { Mobile } from 'components/Responsive';
import multiply from 'assets/images/multiply.png';
import { get as getSetting } from 'utils/setting';
import agent from 'utils/agent';
import { action as toggleMenu } from 'redux-burger-menu';
import Swipe from 'react-easy-swipe';

import makeSelectMobileMenu from './selectors';
import reducer from './reducer';
import { setFullScreenSearch } from '../FullScreenSearch/actions';

/*
eslint-disable react/prefer-stateless-function,
react/prop-types,
jsx-a11y/anchor-is-valid,
jsx-a11y/no-autofocus
*/
export class MobileMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  renderLink(item) {
    const type = get(item, 'type');
    const title = get(item, 'title');
    let link = get(item, 'url');

    if (type !== 'link') {
      link = get(item, 'slug');
    }

    if (type === 'link') {
      return (
        <Link to={link} onClick={() => this.props.toggleMobileMenu(false)}>
          {title}
        </Link>
      );
    }

    if (type === 'page') {
      return (
        <Link
          to={`/page/${link}`}
          onClick={() => this.props.toggleMobileMenu(false)}
        >
          {title}
        </Link>
      );
    }

    if (type === 'category') {
      return (
        <Link
          to={`/${link}`}
          onClick={() => this.props.toggleMobileMenu(false)}
        >
          {title}
        </Link>
      );
    }

    return null;
  }

  async componentDidMount() {
    const { settingParams } = this.state;
    let menus;
    try {
      const response = await agent.get('/settings').query(settingParams);
      const menuHeader = getSetting(response.body.results, 'menu_header');
      menus = isEmpty(menuHeader) ? [] : JSON.parse(menuHeader);
    } catch (e) {
      menus = [];
    }

    this.setState({
      menus,
    });
  }

  render() {
    const { menus } = this.state;

    return (
      <Mobile>
        <Swipe onSwipeLeft={() => this.props.toggleMobileMenu(false)}>
          <Menu
            className="sidebar navbar"
            customBurgerIcon={false}
            customCrossIcon={false}
            pageWrapId="page-wrap"
            outerContainerId="outer-container"
            bodyClassName="bm-disable-scroll"
          >
            <div>
              <a
                className="close"
                role="button"
                tabIndex={0}
                onClick={() => this.props.toggleMobileMenu(false)}
                onKeyDown={() => this.props.toggleMobileMenu(false)}
              >
                <img src={multiply} alt="close" />
              </a>
              <ul className="list-unstyled">
                <li className="list-inline-item">
                  <ul className="list-inline list-unstyled list_login">
                    <li className="list-inline-item">
                      <button
                        type="button"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          this.props.setFullScreenSearch(true);
                          this.props.toggleMobileMenu(false);
                        }}
                      >
                        <i className="fa fa-search search1 right_icon" />
                      </button>
                    </li>
                    <li className="list-inline-item">
                      {/* <i className="fa fa-user-circle right_icon"></i> */}
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="list-inline list-unstyled mb-0 list_main navbar-nav mr-auto">
                    <li className="list-inline-item">
                      <Link
                        to="/"
                        onClick={() => this.props.toggleMobileMenu(false)}
                      >
                        home
                      </Link>
                    </li>
                    {!isEmpty(menus) &&
                      menus.map(
                        item =>
                          get(item, 'children') ? (
                            <li
                              className="list-inline-item hover_menu"
                              key={uniqid()}
                            >
                              <div className="dropdown dropdown_hover">
                                <a
                                  className="btn dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  {item.title}
                                </a>
                                <div className="caret" />
                                <div className="dropdown-menu non-border">
                                  <div className="container-fluid">
                                    <div className="row">
                                      <div className="col-md-8">
                                        <div className="row">
                                          <div className="col-md-12 pad_mob">
                                            <ul className="list-unstyled">
                                              {item.children.map(sub => (
                                                <li key={uniqid()}>
                                                  <Link
                                                    to={`/${item.slug}/${
                                                      sub.slug
                                                    }`}
                                                    onClick={() =>
                                                      this.props.toggleMobileMenu(
                                                        false,
                                                      )
                                                    }
                                                  >
                                                    {sub.title}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ) : (
                            <li className="list-inline-item" key={item.id}>
                              {this.renderLink(item)}
                            </li>
                          ),
                      )}
                  </ul>
                </li>
              </ul>
              <section className="enter1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="search"
                        name="search"
                        placeholder="Type and hit ENTER"
                        className="form-control"
                      />
                      <img
                        src={multiply}
                        className="img-fluid multiply"
                        alt="search"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Menu>
        </Swipe>
      </Mobile>
    );
  }
}

MobileMenu.propTypes = {
  setFullScreenSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  mobileMenu: makeSelectMobileMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleMobileMenu: isOpen => dispatch(toggleMenu(isOpen)),
    setFullScreenSearch: open => dispatch(setFullScreenSearch(open)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mobileMenu', reducer });

export default compose(
  withReducer,
  withConnect,
)(MobileMenu);

/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import cn from 'classnames';
import Waypoint from 'react-waypoint';
import uniqid from 'uniqid';
import { action as toggleMenu } from 'redux-burger-menu';
import { get } from 'lodash';
import IsScrolling from 'components/IsScrolling';

import injectReducer from 'utils/injectReducer';
import { setDropdownMenuHeight } from './actions';
import { setFullScreenSearch } from '../FullScreenSearch/actions';
import { makeSelectSettings } from '../AppSetting/selectors';
import makeSelectMenu from './selectors';
import reducer from './reducer';

/*
eslint-disable react/prefer-stateless-function,
jsx-a11y/anchor-is-valid,
jsx-a11y/no-autofocus
*/
export class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemId: null,
      stick: false,
    };

    this.dropdownMenuHeight = 0;
    this.subMenu = [];
    this.handleExpandMenu = this.handleExpandMenu.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isScrollingDown !== this.props.isScrollingDown) {
      if (this.props.isScrollingDown) {
        this.hideDropDownMenu();
      }
    }
  }

  hideDropDownMenu() {
    if (this.dropdownMenuHeight !== 0) {
      this.props.setDropdownMenuHeight(0);
      this.dropdownMenuHeight = 0;
    }

    this.setState({ itemId: null });
  }

  handleExpandMenu(id) {
    const { itemId } = this.state;
    const item = itemId === id ? null : id;
    const totalItemEachRow = id ? this.subMenu[id].childNodes.length : 0;
    const maxItemEachRow = 5;
    const totalRow = Math.ceil(totalItemEachRow / maxItemEachRow);
    const rowHeight = 54 + 34 * (totalRow - 1);
    const dropdownMenuHeight = itemId === id ? 0 : rowHeight;
    this.dropdownMenuHeight = dropdownMenuHeight;
    this.props.setDropdownMenuHeight(dropdownMenuHeight);
    this.setState({ itemId: item });
  }

  handleEnter() {
    this.setState({ stick: false });
  }

  handleLeave() {
    this.setState({ stick: true });
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
        <Link className="nav-link text-uppercase" to={link}>
          {title}
        </Link>
      );
    }

    if (type === 'page') {
      return (
        <Link
          to={`/${link}`}
          className="nav-link text-uppercase"
          onClick={() => this.handleExpandMenu(null)}
        >
          {title}
        </Link>
      );
    }

    if (type === 'category') {
      return (
        <Link
          to={`/${link}`}
          className="nav-link text-uppercase"
          onClick={() => this.handleExpandMenu(null)}
        >
          {title}
        </Link>
      );
    }

    return null;
  }

  render() {
    const { itemId, stick } = this.state;
    const { settings, isScrollingUp } = this.props;
    const menus = get(settings, 'menu_header', []);
    const classNames = cn({
      navigation: true,
      'sticky-top': stick,
      'show-navigation': isScrollingUp,
    });

    return (
      <section>
        <section id="main_div" className={classNames}>
          <section className="menu">
            <Container>
              <Row>
                <Col md="12">
                  <nav className="navbar navbar-expand-md">
                    <Link
                      className="navbar-brand d-block d-lg-none d-md-none"
                      to="/"
                    >
                      <i className="fa fa-home" /> Home
                    </Link>
                    <button
                      className="navbar-toggler bar"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={() => this.props.toggleMobileMenu(true)}
                    >
                      <span className="navbar-toggler-icon" />
                      <span className="navbar-toggler-icon" />
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse d-none d-md-block d-lg-block"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active hide_scroll">
                          <Link
                            to="/"
                            className="nav-link"
                            onClick={() => this.handleExpandMenu(null)}
                          >
                            HOME
                          </Link>
                        </li>
                        <li className="nav-item show_scroll">
                          <Link
                            to="/"
                            className="nav-link"
                            onClick={() => this.handleExpandMenu(null)}
                          >
                            <img src={logo} className="small_logo" alt="logo" />
                          </Link>
                        </li>
                        {menus.map(
                          item =>
                            get(item, 'children') ? (
                              <li className="nav-item" key={uniqid()}>
                                <a
                                  className="nav-link text-uppercase"
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => this.handleExpandMenu(item.id)}
                                  onKeyDown={() =>
                                    this.handleExpandMenu(item.id)
                                  }
                                >
                                  {item.title}
                                  <i
                                    className="fa fa-caret-down"
                                    style={{ paddingLeft: '7px' }}
                                  />
                                </a>
                              </li>
                            ) : (
                              <li className="nav-item" key={item.id}>
                                {this.renderLink(item)}
                              </li>
                            ),
                        )}
                      </ul>
                      <ul className="navbar-nav navbar-right d-flex justify-content-end">
                        <li className="nav-item srch">
                          <button
                            type="button"
                            onClick={() => this.props.setFullScreenSearch(true)}
                          >
                            <i className="fa fa-search search" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </Col>
              </Row>
            </Container>
          </section>
          {menus.map(
            item =>
              get(item, 'children') && (
                <section
                  className={cn({
                    drop: true,
                    show: itemId === item.id,
                  })}
                  key={uniqid()}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <ul
                          className="list-inline space20"
                          ref={subMenu => {
                            this.subMenu[item.id] = subMenu;
                          }}
                        >
                          {item.children.map(sub => (
                            <Link
                              to={`/${item.slug}/${sub.slug}`}
                              onClick={() => this.handleExpandMenu(null)}
                              key={uniqid()}
                            >
                              <li className="list-inline-item">{sub.title}</li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              ),
          )}
        </section>
        <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave} />
      </section>
    );
  }
}

Menu.propTypes = {
  toggleMobileMenu: PropTypes.func,
  setFullScreenSearch: PropTypes.func,
  setDropdownMenuHeight: PropTypes.func,
  isScrollingUp: PropTypes.bool,
  isScrollingDown: PropTypes.bool,
  settings: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  menu: makeSelectMenu(),
  settings: makeSelectSettings(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleMobileMenu: isOpen => dispatch(toggleMenu(isOpen)),
    setFullScreenSearch: open => dispatch(setFullScreenSearch(open)),
    setDropdownMenuHeight: dropdownMenuHeight =>
      dispatch(setDropdownMenuHeight(dropdownMenuHeight)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'menu', reducer });

export default compose(
  withReducer,
  withConnect,
  IsScrolling,
)(Menu);

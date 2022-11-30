/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">
            <a className="navbar-brand logo_h" href="index.html">
              <img src="img/logo1.png" alt="" />
            </a>
            {/* Brand and toggle get grouped for better mobile display */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#overview">
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#speakers">
                    Speakers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#agenda">
                    Agenda
                  </a>
                </li>
                <li className="nav-item ">
                  <a href="#partners" className="nav-link">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#venue" className="nav-link">
                    Venue
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <a href="#register" className="tickets_btn">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="overlay" />
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container bannerwidth">
            <a className="bannerlogo" href="/">
              <img src="img/event.png" alt="" />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}

Header.propTypes = {};

export default Header;

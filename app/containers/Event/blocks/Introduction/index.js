/**
 *
 * Introduction
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Introduction() {
  return (
    <section className="welcome_area p_120" id="overview">
      <div className="container">
        <div className="welcome_inner row">
          <div className="col-lg-5 vertical-center" />
          <div className="col-lg-12">
            <div className="welcome_text">
              <h3>Leading the Future with Disruptive Innovation</h3>
              <p>
                Today, the digital revolution has exposed abundant value
                opportunities for companies to raise efficiency and develop new
                kinds of products, services, and business models. A small group
                of outstanding players across industries and economies has shown
                that large incumbents can innovate, release trapped value,
                compete with disruptors—and even act as disruptors. These
                companies are executing what we call a “wise pivot”—a way to
                reinvent themselves and harness the power of disruption. They
                are using data, digital tools, and new ways of working to
                optimize and grow the core business, even as they build a future
                business.
              </p>
              <p>
                Accenture’s Innovation Summit 2019 will bring together some of
                the best talents and leaders in Saudi Arabia to discuss some of
                the best discussions on innovation such as trapped value, risk,
                and the latest technology trends in Saudi Arabia.{' '}
              </p>
              <p>
                Join us{' '}
                <span style={{ fontWeight: 'bold', color: '#000' }}>
                  on April 24, at Accenture Innovation Summit 2019
                </span>{' '}
                to see how leaders can act now to take their digital
                transformation to the next level, shape new technology and
                innovation strategies and set a new series of endgames in their
                sights.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-top-border container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-defination">
              <a
                href="https://www.accenture.com/us-en/insights/technology/technology-trends-2019
"
                target="_blank"
              >
                {' '}
                <img className="mb-20 over-img" src="img/acc-1.png" alt="" />
                <h4>Technology Vision 2019</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-defination">
              <a
                href="https://www.accenture.com/ae-en/insights/digital/accenture-innovation-maturity-index-2018"
                target="_blank"
              >
                <img className="mb-20 over-img" src="img/acc-2.png" alt="" />
                <h4>Innovation Maturity Index</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-defination">
              <a href="htps://trends.fjordnet.com/" target="_blank">
                {' '}
                <img className="mb-20 over-img" src="img/acc-3.png" alt="" />
                <h4>Fjord Trends</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Introduction.propTypes = {};

export default Introduction;

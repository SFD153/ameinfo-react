/**
 *
 * Partner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Partner() {
  return (
    <section>
      <div className="partner_area main_title p_120" id="partners">
        <h2>Our Partners</h2>
        <div className="container main_title mt-30">
          <div className="row">
            <div className="col-6">
              <h5>Media Partner</h5>
              <a href="http://mediaquestcorp.com" target="_blank">
                <img src="img/mediaquest.png" alt="" />
              </a>
            </div>
            <div className="col-6">
              <h5>Knowledge Partner</h5>
              <a href="https://oxfordbusinessgroup.com/ " target="_blank">
                <img src="img/oxford.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Partner.propTypes = {};

export default Partner;

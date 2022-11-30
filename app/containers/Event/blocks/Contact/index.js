/**
 *
 * Contact
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Contact() {
  return (
    <section className="home_map_area" id="contact">
      <div className="main_title">
        <h2>Venue</h2>
      </div>

      <div
        id="mapBox2"
        className="mapBox2"
        data-lat="24.739638"
        data-lon="46.6341186"
        data-zoom="13"
        data-info="Crowne Plaza Riyadh RDC Hotel & Convention"
        data-mlat="24.739638"
        data-mlon="46.6341186"
      />
      <div className="home_details" id="venue">
        <div className="container">
          <div className="box_home_details">
            <div>
              <h3>Contact Us</h3>
            </div>
            <div className="media">
              <div className="d-flex">
                <i className="lnr lnr-home" />
              </div>
              <div className="media-body">
                <h4>Crown Plaza Riyadh RDC </h4>
                <p>Hotel & Convention </p>
              </div>
            </div>
            <div className="media">
              <div className="d-flex">
                <i className="lnr lnr-clock" />
              </div>
              <div className="media-body">
                <h4>Date: 24th of April</h4>
                <p>Time: 8:30 am – 3:00 pm</p>
              </div>
            </div>
            <div className="media">
              <div className="d-flex">
                <i className="lnr lnr-envelope" />
              </div>
              <div className="media-body">
                <h4>marketing.middleeast@accenture.com</h4>
                <p>Send us your query anytime!</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 footer-social">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/accenture-middle-east/"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a target="_blank" href="https://twitter.com/Accenture_ME">
                <i className="fa fa-twitter" />
              </a>
              <a target="_blank" href="https://www.instagram.com/accenture_me/">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {};

export default Contact;

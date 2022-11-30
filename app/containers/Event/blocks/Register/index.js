/**
 *
 * Register
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Register() {
  return (
    <section className="contact_area pt-50 pb-50" id="register">
      <div className="main_title">
        <h2>Register Here</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info">
              <div className="info_item">
                <i className="lnr lnr-home" />
                <h6>Crown Plaza Riyadh RDC </h6>
                <p>Hotel & Convention</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-calendar-full" />
                <h6>Date: 24th of April</h6>
                <p>Time: 8.30am to 3:30pm</p>
              </div>
              <div
                className="col-lg-10 col-md-10 footer-social"
                style={{ textAlign: 'left!important' }}
              >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/accenture-middle-east/"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a target="_blank" href="https://twitter.com/Accenture_ME">
                  <i className="fa fa-twitter" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/accenture_me/"
                >
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <form
              className="row contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              noValidate="novalidate"
            >
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your Last Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter company"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your job title"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter city"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter address"
                  />
                </div>
              </div>
              <div className="col-md-12 text-right">
                <button type="submit" value="submit" className="btn submit_btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Register.propTypes = {};

export default Register;

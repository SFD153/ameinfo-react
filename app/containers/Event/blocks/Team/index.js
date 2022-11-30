/**
 *
 * Team
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Team() {
  return (
    <section className="team_area p_120" id="speakers">
      <div className="container">
        <div className="main_title">
          <h2>Our Speakers</h2>
        </div>
        <div className="row team_inner">
          <div className="col-lg-3 col-sm-6">
            <div className="team_item">
              <div className="team_img">
                <img className="img-fluid" src="img/team/xavi.png" alt="" />
                <div className="hover">
                  <a
                    target="_blank"
                    href="https://twitter.com/xavianglada?lang=en"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/xavieranglada/?originalSubdomain=ae"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="team_name">
                <h4>Xavier Anglada</h4>
                <p>Accenture Digital Lead, Middle East & Turkey</p>
                <div className="container">
                  <div className="row mb-4">
                    <div>
                      <a
                        href="/"
                        className="btn underline "
                        data-toggle="modal"
                        data-target="#largeModal"
                      >
                        Read More <span className="lnr lnr-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* large modal */}
                <div
                  className="modal fade"
                  id="largeModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="basicModal"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">
                          Xavier Anglada
                        </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body left-align">
                        <img
                          className="img-fluid modal-image"
                          src="img/team/xavi.png"
                          align="right"
                          alt=""
                        />
                        <p>
                          {' '}
                          Xavi Anglada brings with him over 22 years of
                          experience in strategy, consulting and operations in
                          the FinTech, Media, and Telecommunication industries
                          across Europe, Asia, Africa and the Middle East.
                        </p>{' '}
                        <p>
                          Prior to joining Accenture, Xavi was CEO of Cash
                          Credit, an innovative FinTech company offering
                          micro-finance services with mobile telecom operators
                          and other partners, where he led the company’s
                          expansion from Eastern Europe to the Middle East, Far
                          East and Africa.
                        </p>
                        <p>
                          Previously, Xavi spent almost a decade with Delta
                          Partners Group (a TMD C-level advisory and investment
                          firm) and has held several management roles with
                          Vodafone Spain, Oliver Wyman, and Hewlett-Packard.
                        </p>{' '}
                        <p>
                          Xavi is a native of Spain, and holds an MBA from ESADE
                          in Barcelona together with a MSc in Electrical
                          Engineering and a BSc in Telecommunications from La
                          Salle Engineering in Barcelona. Having lived in 4
                          continents, led assignments in over 30 countries, he
                          is excited to expand his footprint with Accenture in
                          the Middle East with his wife and 3 sons.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="img-fluid"
                  src="img/team/khaled-eldaher.png"
                  alt=""
                />
                <div className="hover">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/khaled-al-dhaher-b795309b/?originalSubdomain=sa"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="team_name">
                <h4>Dr. Khaled AlDhaher</h4>
                <p>Country Managing Director, Accenture Saudi Arabia</p>
                <div className="container">
                  <div className="row mb-4">
                    <div>
                      <a
                        href="/"
                        className="btn underline"
                        data-toggle="modal"
                        data-target="#largeModal1"
                      >
                        Read More <span className="lnr lnr-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* large modal */}
                <div
                  className="modal fade"
                  id="largeModal1"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="basicModal"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">
                          Dr. Khaled AlDhaher
                        </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body left-align">
                        <img
                          className="img-fluid modal-image"
                          src="img/team/khaled-eldaher.png"
                          align="right"
                          alt=""
                        />
                        <p>
                          Khaled Al-Dhaher is the Country Managing Director for
                          Saudi Arabia at Accenture since May 2018. He is
                          responsible for managing operations and driving
                          Accenture’s digital consulting strategy in the Kingdom
                          of Saudi Arabia. Al-Dhaher brings with him
                          considerable experience in delivering state-of-the-art
                          and innovative solutions in industries ranging from
                          financial services, retail/wholesale and manufacturing
                          to oil &amp; gas and distribution. Prior to joining
                          Accenture, Al-Dhaher was the managing director for
                          Saudi Arabia at Hewlett Packard Enterprise, where he
                          drove profitable growth and market share expansion
                          across HPE business groups. Earlier, Khaled held
                          numerous leadership roles in the technology and
                          banking solutions industries in multinational
                          organizations including Microsoft and Oracle
                          Corporations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="img-fluid"
                  src="img/team/emmanuelle.png"
                  alt=""
                />
                <div className="hover">
                  <a target="_blank" href="https://twitter.com/EmmanuelViale">
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/emmanuelviale/"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="team_name">
                <h4>Emmanuel Viale</h4>
                <p>
                  Managing Director and Head of Accenture Innovation Labs in
                  Sophia Antipolis
                </p>
                <div className="container">
                  <div className="row mb-4">
                    <div>
                      <a
                        href="/"
                        className="btn underline"
                        data-toggle="modal"
                        data-target="#largeModal2"
                      >
                        Read More <span className="lnr lnr-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* large modal */}
                <div
                  className="modal fade"
                  id="largeModal2"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="basicModal"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">
                          Emmanuel Viale
                        </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body left-align">
                        <img
                          className="img-fluid modal-image"
                          src="img/team/emmanuelle.png"
                          align="right"
                          alt=""
                        />
                        <p>
                          Emmanuel Viale is the Managing Director of the
                          Accenture Technology Labs in Europe and is Sophia
                          Antipolis, France. He leads the different R&D
                          activities of the Labs nodes in Europe (Dublin, Tel
                          Aviv and Sophia Antipolis) with a particular focus on
                          identifying and delivering applications of innovative
                          and emerging technologies. He also leads the Liquid
                          Studios in Europe.
                        </p>

                        <p>
                          Recent R&D areas of focus have been around:
                          Blockchain, Extended Reality (VR, AR, MR, 3D and
                          rendering, wearable devices, etc.), Quantum Computing
                          and Messaging, DNA Storage and Computing, etc. where
                          the evolutions of the technology domains are
                          identified, partnerships with universities and
                          startups established and first proof--of-technology
                          and proof-of-concepts are designed, developed and
                          tested.{' '}
                        </p>

                        <p>
                          Emmanuel holds a degree in Signal Processing and
                          Computer Science from the Ecole Centrale de Marseille,
                          France. He joined Accenture in 1997 and lives in the
                          South of France with his wife and five children.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="team_item">
              <div className="team_img">
                <img className="img-fluid" src="img/team/ahmed.png" alt="" />
                <div className="hover">
                  <a target="_blank" href="https://twitter.com/AhmHamdan">
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/hamdanahmed/"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="team_name">
                <h4>Ahmed Hamdan</h4>
                <p>Founder & CEO (Unifonic)</p>
                <div className="container">
                  <div className="row mb-4">
                    <div>
                      <a
                        href="/"
                        className="btn underline"
                        data-toggle="modal"
                        data-target="#largeModal3"
                      >
                        Read More <span className="lnr lnr-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* large modal */}
                <div
                  className="modal fade"
                  id="largeModal3"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="basicModal"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">
                          Ahmed Hamdan Profile
                        </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body left-align">
                        <img
                          className="img-fluid modal-image"
                          src="img/team/ahmed.png"
                          align="right"
                          alt=""
                        />
                        <p>
                          Since Since founding Unifonic on 2006, Mr. Ahmed has
                          been leading the transformation of Unifonic from a
                          local SMS reseller based in Saudi Arabia to one of the
                          fastest growing regional cloud communication provider,
                          employing around 100 people and operating through
                          multiple international offices, with further expansion
                          plans across the MENA region. Serving 5,000+ clients,
                          around the region, Unifonic has become a pioneer in
                          Cloud Communications services. In October 2018,
                          Unifonic, lead by Ahmed managed to close the largest
                          round A investment for a technology company in the
                          region closing at $21 Million. The investors include
                          STV, RTF, Endeavor Catalyst, Elm and Raed Ventures.
                        </p>
                        <p>
                          Mr. Hamdan brings to the task his experience from a
                          12-years-career at Saudi ICT companies, where he
                          worked in different technical and business consultancy
                          roles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Team.propTypes = {};

export default Team;

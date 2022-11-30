/**
 *
 * Schedule
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Schedule() {
  return (
    <section className="event_schedule_area p_120" id="agenda">
      <div className="container">
        <div className="main_title">
          <h2>Agenda at a glance</h2>
        </div>
        <div className="event_schedule_inner">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="media">
                <div className="media-body">
                  <h5>8:30 AM - 9:00 AM</h5>
                  <h4>Welcome & Breakfast</h4>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5>9:00 AM - 9:15 AM</h5>
                  <h4>Opening Ceremony</h4>
                  <p>
                    Opening Ceremony & Welcome Address by Dr. Khaled AlDhaher
                    Country Managing Director, Accenture, Saudi Arabia
                  </p>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5>9:15 AM - 9:50 AM</h5>
                  <h4>Leading in The New</h4>
                  <p>
                    Managing Disruption Like an Innovation Champion by Xavier
                    Anglada Accenture Digital Lead, Middle East & Turkey{' '}
                  </p>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5>9:50 AM - 10:30 AM</h5>
                  <h4>The Post-Digital Era is Upon Us </h4>
                  <p>
                    Trends Vs. Market by Emmanuel Viale Managing Director – Head
                    of Accenture Innovation Labs in Sophia Antipolis
                  </p>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5>10:30 AM - 10:50 AM</h5>
                  <h4>Networking & Coffee Break</h4>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5>10:50 AM - 11:20 AM</h5>
                  <h4>Disruptive Innovation Trends</h4>
                  <p>
                    A Look at What’s Ahead for the Future of Business,
                    Technology and Design by Thomas Müller, Fjord General
                    Manager at Fjord Accenture Interactive Europe, Africa, Latin
                    America.{' '}
                  </p>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5>10:30 AM - 10:50 AM</h5>
                  <h4>Panel Discussion</h4>
                  <p>
                    How to Turn Disruption Into Opportunities moderated by
                    Thomas Müller, Fjord General Manager at Fjord Accenture
                    Interactive Europe, Africa, Latin America.{' '}
                  </p>
                  <p>
                    - Lessons From Survivors of Disruption: Ahmed Hamdan, CEO,
                    Unifonic{' '}
                  </p>
                  <p>
                    - The Future Workforce - A High Velocity Challenge: Basmah
                    Aljedia, Head of MISK Innovation{' '}
                  </p>
                  <p>
                    - Scaling Entrepreneurship: Hattan Ahmed, Head of
                    Entrepreneurship Center, KAUST Innovation
                  </p>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5>12:00 PM - 1:00 PM</h5>
                  <h4>Lunch & Prayer Break</h4>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5>1:00 PM - 3:00 PM</h5>
                  <h4>FUTURE LEADERS DISCUSSION</h4>
                  <p>
                    {' '}
                    Roundtable Discussion between Future Innovation Leaders from
                    top universities, Startups & Current Industry Leaders
                    (CxO&aposs) with Accenture Experts
                  </p>
                  <br />
                  <h4>CO-CREATION CHALLENGE</h4>
                  <p>
                    Co-Creation Challenge: How to Apply the Innovation, Design
                    and Business Trends to contribute towards the Saudi Vision
                    2030
                  </p>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h5>3:00 PM - 3:10 PM</h5>
                  <h4>Wrap up & Closing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Schedule.propTypes = {};

export default Schedule;

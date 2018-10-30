import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/Layout';
import Header from '../components/Header';

import mission from '../img/mission/mission1.jpg';

import Richard from '../img/team/richard.jpg';
import Anjali from '../img/team/anjali.jpg';
import Ed from '../img/advisors/ed.jpg';
import Pavlos from '../img/advisors/pavlos.jpg';
import Alan from '../img/advisors/alan.jpg';


import TSN from '../img/partners/tsn.png';
import PeteyGreene from '../img/partners/petey-greene.jpg';
import TEJI from '../img/partners/teji.png';

import cost from '../img/challenges/cost.jpg';
import massIncarceration from '../img/challenges/mass_incarceration.jpg';
import recidivism from '../img/challenges/recidivism.jpg';
import unemployment from '../img/challenges/unemployment.jpg';




export default class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <Header />
        <section id="home-challenges" className="home-section">
          <Container className="section">
            <h2 className="section-title text-center">The Challenges</h2>
            <div>
            <Row>
              <Col xs={6} md={5} lg={3}>
                <img
                  src={massIncarceration}
                  alt="Mass Incarceration"
                  className="challenges-img"
                />
              </Col>
              <Col xs={6} md={5} lg={3}>
                <img
                  src={recidivism}
                  alt="Recidivism"
                  className="challenges-img"
                />
              </Col>
              <Col xs={6} md={5} lg={3}>
                <img
                  src={unemployment}
                  alt="Unemployment"
                  className="challenges-img"
                />
              </Col>
              <Col xs={6} md={5} lg={3}>
                <img
                  src={cost}
                  alt="Cost of Incarceration"
                  className="challenges-img"
                />
              </Col>
            </Row>
            <p>
              Currently, there are over 2 million individuals behind bars in county jails, state prisons, and federal penitentiaries. To put this into another perspective, more than one in one-hundred adults between the ages of eighteen and sixty-five are behind bars in the US. This number does not even include many millions more who are on parole or probation and are still part of the correctional system...  <Link className="text-red" to="/about/challenges/">Learn More &rarr;</Link>
            </p>
            </div>
          </Container>
        </section>
        <section id="home-mission" className="home-section section-dark">
          <Container>
            <h2 className="section-title text-center">Our Mission</h2>
            <img src={mission} alt="Mission" className="img-fluid mx-auto"/>
            <p>
              <strong>Coders Beyond Bars, Inc. (CBB)</strong> is a not-for-profit organization in Massachusetts with the mission of educating incarcerated individuals in high-tech skills such as coding and preparing them for successful careers in high-tech industries.  With our origin in <a href="http://teji.mit.edu/" className="text-red">The Educational Justice Institute at Massachusetts Institute of Technology</a>, we place ourselves at the intersection of education, technology and criminal justice in order to open up access to communities that have historically been marginalized in these contexts... <Link className="text-red" to="/about/mission/">Read More &rarr;</Link>
            </p>
          </Container>
        </section>
        {/* <section id="home-programs" className="home-section">
          <Container className="section">
            <div className="section-header mx-auto">
              <h2 className="section-title text-center">Our Programs</h2>
            </div>
            <div>
              <UncontrolledCarousel
                items={programs}
                className="program-carousel"
                controls={true}
              />
            </div>
          </Container>
        </section> */}
        <section id="home-testimonial" className="home-section">
          <Container className="section">
            <Row className="testimonial">
              <Col md={4}>
                <img src={Ed} alt="Ed McAdams" className="profile-photo mx-auto"/>
              </Col>
              <Col md={8} className="testimonial-description">
                <p className="font-italic">
                  "It has been impressive to see the interest and investment by our students in this coders program. They are fully engaged and motivated in the learning process. The technical skills that they are learning, along with the collaboration required to work through projects will serve our students well in the future."
                </p>
                <h5 className="testimonial-name">Ed McAdams</h5>
                <p className="font-italic testimonial-title">
                  Headmaster at School of Reentry, Boston Pre-release Center
                </p>
              </Col>
            </Row>
            <Row className="testimonial">
              <Col md={{ size: 4, order: 2}}>
                <img src={Pavlos} alt="Pavlos Protopaps" className="profile-photo mx-auto"/>
              </Col>
              <Col
                md={{ size: 8, order: 1}}
                className="testimonial-description"
              >
                <p className="font-italic" >
                  "[Coders Beyond Bars] are doing an important work
                  of democratizing access to education in coding and data science,
                  which are essential skills for the next several decades."
                </p>
                <h5 className="testimonial-name">Pavlos Protopapas</h5>
                <p
                  className="font-italic testimonial-title">
                  Scientific Program Director of Harvard Institute for Applied Computational Science
                </p>
              </Col>
            </Row>
            <Row className="testimonial">
              <Col md={4}>
                <img src={Alan} alt="Alan L. Spencer" className="profile-photo mx-auto"/>
              </Col>
              <Col md={8} className="testimonial-description">
                <p className="font-italic">
                  "Coders Beyond Bars provides the right amount of hands on facilitation coupled with remote classroom monitoring to assist the students in navigating the curriculum material."
                </p>
                <h5 className="testimonial-name">Alan L. Spencer</h5>
                <p className="font-italic testimonial-title">
                  Director of Workforce Development at School of Reentry, Boston Pre-release Center
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="home-team" className="home-section section-dark">
          <Container className="section">
            <div className="section-header mx-auto">
              <h2 className="section-title text-center">The CBB Team</h2>
              <p>
                We are a small team of passionate individuals who are dedicated
                 to bringing technology education to correctional environment
              </p>
            </div>
            <Row className="section-body">
              <Col md={6} className="profile">
                <img src={Richard} alt="Richard Kim" className="profile-photo"/>
                <Link to="/about/team/#RichardKim">
                  <p className="profile-name text-center">Richard Kim</p>
                  <p className="profile-title text-center">Co-founder &amp; Chief Executive Officer</p>
                </Link>
              </Col>
              <Col md={6} className="profile">
                <img src={Anjali} alt="Anjali Moorthy" className="profile-photo"/>
                <Link to="/about/team/#AnjaliMoorthy">
                  <p className="profile-name text-center">Anjali Moorthy</p>
                  <p className="profile-title text-center">Co-founder &amp; Executive Directors</p>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="home-partners" className="home-section">
          <Container>
            <div className="section-header mx-auto">
              <h2 className="section-title text-center">Community Partners</h2>
              <p>Our work wouldn't be possible without support from these
                incredible community partners</p>
            </div>
              <Row className="section-body">
                <Col lg={4} className="partner">
                  <a href="http://teji.mit.edu/">
                    <img
                      src={TEJI}
                      alt="The Educational Justice Institute"
                      className="partner-img"
                    />
                  </a>
                </Col>
                <Col lg={4} className="partner">
                  <a href="http://www.peteygreene.org/">
                    <img
                      src={PeteyGreene}
                      alt="The Petey Greene Program"
                      className="partner-img"
                    />
                  </a>
                </Col>
                <Col lg={4} className="partner">
                  <a href="https://www.timothysmithnetwork.org/">
                    <img
                      src={TSN}
                      alt="Timothy Smith Network"
                      className="partner-img"
                    />
                  </a>
                </Col>
              </Row>
          </Container>
        </section>
      </Layout>
    );
  }
};

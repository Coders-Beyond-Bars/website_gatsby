import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/Layout';
import Header from '../components/Header';

import BPRC from '../img/facilities/bprc.png';
import SouthBay from '../img/facilities/southbay_house.png';
import YouthCenter from '../img/facilities/youth_center.png';

import Richard from '../img/team/richard.jpg';
import Anjali from '../img/team/anjali.jpg';

import Web from '../img/programs/web.png';
import Databases from '../img/programs/databases.png';
import Scratch from '../img/programs/scratch.png';


export default class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <Header />
        <section id="home-about-us" className="home-section">
          <Container>
            <h2 className="section-title text-center">The Challenges</h2>
          </Container>
        </section>
        <section id="home-about-us" className="home-section section-dark">
          <Container>
            <h2 className="section-title text-center">Our Mission</h2>
          </Container>
        </section>
        <section id="home-programs" className="home-section">
          <Container>
            <div className="section-header mx-auto">
              <h2 className="section-title text-center">Our Programs</h2>
            </div>
            <Row className="section-body">
              <Col className="program">
                <img src={Databases} alt="Databases" />
                <p>Databases and Data Analytics with Python and SQL</p>
              </Col>
              <Col className="program">
                <img src={Web} alt="Web" />
                <p>Web Development using HTML, CSS, and JavaScript</p>
              </Col>
              <Col className="program">
                <img src={Scratch} alt="Scratch" />
                <p>Video Game Development with Scratch</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="home-host" className="home-section section-dark">
          <Container className="section">
            <div className="section-header mx-auto">
              <h2 className="section-title text-center">Host Sites</h2>
              <p className="section-subtitle text-justify">
                We are working with the following
                correctional facilities in Massachusetts.
                We are expanding our relationship with correctional facilities
                in Massachusetts as well as those in the New England region.
                Read more about us <Link to="/about/team/" className="text-red">here</Link>.</p>
            </div>
            <Row className="section-body">
              <Col className="host-site">
                <img src={BPRC} alt="Boston Pre-release Center" />
                <p>Boston Pre-release Center</p>
              </Col>
              <Col className="host-site">
                <img src={SouthBay} alt="South Bay House of Correction" />
                <p>South Bay House of Correction</p>
              </Col>
              <Col className="host-site">
                <img src={YouthCenter} alt="Judge John J. Connelly Youth Center" />
                <p>Judge John J. Connelly Youth Center</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="home-team" className="home-section">
          <Container className="section">
            <div className="section-header mx-auto">
              <h2 className="section-title text-center">Team</h2>
              <p className="section-subtitle text-justify">
                We are a small team of passionate individuals who have passion
                for transformation of the criminal justice system through
                education. Read more about us <Link to="/about/team/" className="text-red">here</Link>.</p>
            </div>
            <Row className="section-body">
              <Col md={6} className="profile">
                <img src={Richard} alt="Richard Kim" className="profile-photo"/>
                <p className="profile-name text-center">Richard Kim</p>
                <p>Co-founder &amp; Director of Education</p>
              </Col>
              <Col md={6} className="profile">
                <img src={Anjali} alt="Anjali Moorthy" className="profile-photo"/>
                <p className="profile-name">Anjali Moorthy</p>
                <p>Co-founder &amp; Executive Directors</p>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    );
  }
};

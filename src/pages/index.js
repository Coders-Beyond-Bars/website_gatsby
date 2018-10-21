import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'reactstrap';
import Layout from '../components/Layout';
import Header from '../components/Header';

import BPRC from '../img/facilities/bprc.png';
import SouthBay from '../img/facilities/southbay_house.png';
import YouthCenter from '../img/facilities/youth_center.png';

import Richard from '../img/team/richard.jpg';
import Anjali from '../img/team/anjali.jpg';

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
        <section id="home-about-us" className="home-section">
          <Container>
            <h2 className="section-title text-center">Our Programs</h2>
          </Container>
        </section>
        <section id="home-host" className="home-section section-dark">
          <Container className="section">
            <div className="section-header mx-auto">
              <h2 className="section-title text-center">Host Sites</h2>
            </div>
            <div className="section-body">
              <div className="host-site">
                <img src={BPRC} alt="Boston Pre-release Center" />
                <p>Boston Pre-release Center</p>
              </div>
              <div className="host-site">
                <img src={SouthBay} alt="South Bay House of Correction" />
                <p>South Bay House of Correction</p>
              </div>
              <div className="host-site">
                <img src={YouthCenter} alt="Judge John J. Connelly Youth Center" />
                <p>Judge John J. Connelly Youth Center</p>
              </div>
            </div>
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
            <div className="section-body">
              <div className="profile">
                <img src={Richard} alt="Richard Kim" className="profile-photo"/>
                <p className="profile-name">Richard Kim</p>
                <p>Co-founder &amp; Director of Education</p>
              </div>
              <div className="profile">
                <img src={Anjali} alt="Anjali Moorthy" className="profile-photo"/>
                <p className="profile-name">Anjali Moorthy</p>
                <p>Co-founder &amp; Executive Directors</p>
              </div>
            </div>
            {/* <div className="section-header mx-auto">
              <p className="text-justify">
                We are looking for new team members! If you share our passion
                for prison education, social justice, and education in
                technology, <Link to="/contact/" className="text-red">contact us.</Link>
              </p>
            </div> */}
          </Container>
        </section>
      </Layout>
    );
  }
};

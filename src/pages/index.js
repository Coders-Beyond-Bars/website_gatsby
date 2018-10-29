import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Layout from '../components/Layout';
import Header from '../components/Header';

import Richard from '../img/team/richard.jpg';
import Anjali from '../img/team/anjali.jpg';
import Ed from '../img/advisors/ed.jpg';
import Pavlos from '../img/advisors/pavlos.jpg';

import Web from '../img/programs/web.png';
import Databases from '../img/programs/databases.png';
import Scratch from '../img/programs/scratch.png';

import cost from '../img/challenges/cost.jpg';
import massIncarceration from '../img/challenges/mass_incarceration.jpg';
import recidivism from '../img/challenges/recidivism.jpg';
import unemployment from '../img/challenges/unemployment.jpg';



const programs = [
  {
    src: Databases,
    header: "Databases and Data Analytics with Python and SQL",
    altText: "Databases",
    caption: ""
  },
  {
    src: Web,
    header: "Web Development using HTML, CSS, and JavaScript",
    altText: "Web Development",
    caption: ""
  },
  {
    src: Scratch,
    header: "Video Game Development with Scratch",
    altText: "Video Game",
    caption: ""
  }
];


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
              As methodically investigated and elucidated in the New York Time’s Best Seller “The New Jim Crow: Mass Incarceration in the Age of Colorblindness” by Michelle Alexander, the United States has 5% of the world’s population but 25% of the world’s incarcerated population.  Currently, there are over 2 million behind bars in county jails, state prisons, and federal penitentiaries... <Link className="text-red" to="/about/challenges/">Read More &rarr;</Link>
            </p>
            </div>
          </Container>
        </section>
        <section id="home-about-us" className="home-section section-dark">
          <Container>
            <h2 className="section-title text-center">Our Mission</h2>
            <p>
              <strong>Coders Beyond Bars, Inc. (CBB)</strong> is a not-for-profit organization in Massachusetts with the mission of educating incarcerated individuals in high-tech skills such as coding and preparing them for successful careers in high-tech industries.  With our origin in <a href="http://teji.mit.edu/" className="text-red">The Educational Justice Institute at Massachusetts Institute of Technology</a>, we place ourselves at the intersection of education, technology and criminal justice in order to open up access to communities that have historically been marginalized in these contexts... <Link className="text-red" to="/about/mission/">Read More &rarr;</Link>
            </p>
          </Container>
        </section>
        <section id="home-programs" className="home-section">
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
        </section>
        <section id="home-testimonial" className="home-section section-dark">
          <Container className="section">
            <div className="section-header mx-auto">
              <h2 className="section-title text-center">Quotes</h2>
            </div>
            <Row className="testimonial">
              <Col md={4}>
                <img src={Ed} alt="Ed McAdams" className="profile-photo mx-auto"/>
              </Col>
              <Col md={8} className="testimonial-description">
                <p className="font-italic">
                  "Coders Beyond Bars has been a  blessing for us. They worked closely
                  with us to make this course available to our students, overcoming
                  technological challenges in corrections environment."
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
          </Container>
        </section>
        <section id="home-team" className="home-section">
          <Container className="section">
            <div className="section-header mx-auto">
              <h2 className="section-title text-center">The CBB Team</h2>
            </div>
            <Row className="section-body">
              <Col md={6} className="profile">
                <img src={Richard} alt="Richard Kim" className="profile-photo"/>
                <Link to="/about/team/#RichardKim">
                  <p className="profile-name text-center">Richard Kim</p>
                  <p>Co-founder &amp; Chief Executive Officer</p>
                </Link>
              </Col>
              <Col md={6} className="profile">
                <img src={Anjali} alt="Anjali Moorthy" className="profile-photo"/>
                <Link to="/about/team/#AnjaliMoorthy">
                  <p className="profile-name text-center">Anjali Moorthy</p>
                  <p>Co-founder &amp; Executive Directors</p>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    );
  }
};

import React from 'react';
// import { Link } from 'gatsby';
import { Container } from 'reactstrap';
import Layout from '../components/Layout';
import Header from '../components/Header';


export default class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <Header />
        <section id="home-about-us" className="home-section">
          <Container>
            <h1>About Us</h1>
          </Container>
        </section>
        <section id="home-about-us" className="home-section">
          <Container>
            <h1>Our Programs</h1>
          </Container>
        </section>
        <section id="home-team" className="home-section">
          <Container>
            <h1>Host Sites</h1>
          </Container>
        </section>
        <section id="home-partners" className="home-section">
          <Container>
            <h1>Partners</h1>
          </Container>
        </section>
      </Layout>
    );
  }
};

import React, { Component } from "react";
import Helmet from "react-helmet";

import { Typography, Fade, Container } from "@material-ui/core";

import { LandingLayout } from "components/Layout";

import Section from "components/Section";

import bg from "assets/images/background/bg1.jpg";

class AboutUs extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Coders Beyond Bars - About Us</title>
        </Helmet>
        <LandingLayout>
          <Section image={bg} shaded halfScreen center>
            <Container maxWidth="lg">
              <Fade in={true} timeout={2000}>
                <Typography variant="h4">About Us</Typography>
              </Fade>
            </Container>
          </Section>
          <Section center title="Our Mission">
            <Container maxWidth="lg">
              <Typography variant="h5" align="center">
                We empower returning citizens to transform their lives by
                educating them in high-tech skills and preparing them for
                careers in high-tech industries for successful re-entry into
                society.
              </Typography>
            </Container>
          </Section>
          <Section shaded center title="Team">
            <Container maxWidth="lg">
              <Typography variant="h4">Team</Typography>
            </Container>
          </Section>
          <Section
            center
            title="Partners"
            subtitle="We are proud of our partnerships with educational institutions, corporations, and other community-based non-profit organization."
          >
            <Container maxWidth="lg">
              <Typography variant="h4">Our M</Typography>
            </Container>
          </Section>
        </LandingLayout>
      </>
    );
  }
}

export default AboutUs;

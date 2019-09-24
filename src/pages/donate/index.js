import React, { Component } from "react";
import Helmet from "react-helmet";

import { Typography, Fade, Container } from "@material-ui/core";

import { LandingLayout } from "components/Layout";

import Section from "components/Section";

import bg from "assets/images/background/bg1.jpg";

class Donate extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Coders Beyond Bars - Donate</title>
        </Helmet>
        <LandingLayout>
          <Section image={bg} shaded halfScreen center>
            <Container maxWidth="lg">
              <Fade in={true} timeout={2000}>
                <Typography variant="h4">Donate</Typography>
              </Fade>
            </Container>
          </Section>
        </LandingLayout>
      </>
    );
  }
}

export default Donate;

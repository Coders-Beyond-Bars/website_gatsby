import React, { Component } from "react";
import Helmet from "react-helmet";

import { Typography, Fade, Container } from "@material-ui/core";

import { LandingLayout } from "components/Layout";

import Section from "components/Section";

import bg from "assets/images/background/bg9.jpg";

class News extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Coders Beyond Bars - In the News</title>
        </Helmet>
        <LandingLayout>
          <Section image={bg} shaded halfScreen center>
            <Container maxWidth="lg">
              <Fade in={true} timeout={2000}>
                <Typography variant="h4">In the News</Typography>
              </Fade>
            </Container>
          </Section>
        </LandingLayout>
      </>
    );
  }
}

export default News;

import React, { Component } from "react";
import Helmet from "react-helmet";

import { Typography, Fade, Container } from "@material-ui/core";

import { LandingLayout } from "components/Layout";

import Section from "components/Section";

import bg from "assets/images/background/bg3.jpg";

class GetInvolved extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Coders Beyond Bars - Get Involved</title>
        </Helmet>
        <LandingLayout>
          <Section image={bg} shaded halfScreen center>
            <Container maxWidth="lg">
              <Typography variant="h4">Get Involved</Typography>
            </Container>
          </Section>
        </LandingLayout>
      </>
    );
  }
}

export default GetInvolved;

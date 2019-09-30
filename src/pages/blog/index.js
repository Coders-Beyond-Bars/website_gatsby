import React, { Component } from "react";
import Helmet from "react-helmet";

import { Typography, Fade, Container } from "@material-ui/core";

import { LandingLayout } from "components/Layout";

import Section from "components/Section";

import bg from "assets/images/background/bg8.jpg";

class Blog extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Coders Beyond Bars - Blog</title>
        </Helmet>
        <LandingLayout>
          <Section image={bg} shaded halfScreen vcenter>
            <Container maxWidth="lg">
              <Fade in={true} timeout={2000}>
                <Typography variant="h4">Blog</Typography>
              </Fade>
            </Container>
          </Section>
          <Section>
            <Typography variant="h6">Blog Entries</Typography>
          </Section>
        </LandingLayout>
      </>
    );
  }
}

export default Blog;

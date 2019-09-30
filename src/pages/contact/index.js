import React, { Component } from "react";
import Helmet from "react-helmet";

import { Typography, Fade, Container, Grid } from "@material-ui/core";

import { LandingLayout } from "components/Layout";

import Section from "components/Section";
import ContactForm from "components/ContactForm";

import bg from "assets/images/background/bg6.jpg";

class Contact extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Coders Beyond Bars - Contact Us</title>
        </Helmet>
        <LandingLayout>
          <Section
            image={bg}
            shaded
            fullScreen
            center
            title="Contact Us"
            subtitle="Whether you are looking to volunteer with us as a mentor, to learn more about our organization, or to just share us your thoughts, we want to hear from you!"
          >
            <Container maxWidth="lg">
              <Grid container spacing={2} justify="center">
                <Grid item xs={11} sm={9} md={7}>
                  <ContactForm />
                </Grid>
              </Grid>
            </Container>
          </Section>
        </LandingLayout>
      </>
    );
  }
}

export default Contact;

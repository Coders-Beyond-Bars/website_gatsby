import React from "react";
import { Container, Grid, Fade, Typography } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";
import ContactForm from "components/ContactForm";

import MapSection from "sections/MapSection"

import bg from "assets/images/background/bg6.jpg";

const Contact = () => (
      <Layout>
        <Section
          id="header" 
          image={bg}
          shaded
          halfScreen
          vcenter
        >
          <Container maxWidth="lg">
            <Fade in={true} timeout={2000}>
              <Grid container spacing={0}>
                <Grid item xs={8}>
                  <Typography variant="h4" gutterBottom>
                    Contact Us
                  </Typography>
                  <Typography variant="h6">
                    Whether you are looking to volunteer with us as a mentor,
                    to learn more about our organization, or to just share us your thoughts, we want to hear from you!
                  </Typography>
                </Grid>
              </Grid>
            </Fade>
          </Container>
        </Section>
        <Section hcenter>
          <ContactForm />
        </Section>
        <MapSection />
      </Layout>
);

export default Contact;

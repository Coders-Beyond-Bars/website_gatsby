import React from "react";
import Helmet from "react-helmet";
import { Container, Grid } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";
import ContactForm from "components/ContactForm";

import bg from "assets/images/background/bg6.jpg";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Coders Beyond Bars - Contact Us</title>
        <meta name="description" content="Contact Us" />
      </Helmet>
      <Layout>
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
      </Layout>
    </>
  );
};

export default Contact;

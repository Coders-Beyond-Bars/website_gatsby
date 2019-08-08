import React from "react";
import { Grid } from "@material-ui/core";

import Section from "components/Section";
import ContactForm from "components/ContactForm";

import bg from "assets/images/background/bg6.jpg";

const ContactSection = ({ ...rest }) => (
  <Section image={bg} shaded {...rest} title="Contact Us">
    <Grid container spacing={2} justify="center">
      <Grid item xs={11} sm={9} md={7}>
        <ContactForm />
      </Grid>
    </Grid>
  </Section>
);

export default ContactSection;

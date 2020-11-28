import React from "react";
import { Container, Grid, Fade, Typography } from "@material-ui/core";

import Layout from "components/Layout";
import Header from "components/Header";
import Section from "components/Section";
import ContactForm from "components/ContactForm";

import bg from "assets/images/background/bg6.jpg";

const Contact = () => (
  <Layout title="Contact Us">
    <Header
      id="header"
      image={bg}
      title="Contact Us"
      subtitle="Whether you are looking to volunteer with us as a mentor, to
      learn more about our organization, or to just share your
      thoughts, we want to hear from you!"
      shaded
      halfScreen
      hcenter
      vcenter
    />
    <Section hcenter>
      <ContactForm />
    </Section>
  </Layout>
);

export default Contact;

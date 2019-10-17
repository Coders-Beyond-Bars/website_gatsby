import React from "react";
import Helmet from "react-helmet";
import { Typography, Fade, Container } from "@material-ui/core";

import Layout from "components/Layout";

import Section from "components/Section";
import MissionSection from "sections/MissionSection";
import AboutUsSection from "sections/AboutUsSection";
import TeamSection from "sections/TeamSection";

import useStyles from "assets/jss/pages/about";
import bg from "assets/images/background/bg11.jpg";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Coders Beyond Bars - About Us</title>
      </Helmet>
      <Layout>
        <Section image={bg} shaded halfScreen vcenter>
          <Container maxWidth="lg">
            <Fade in={true} timeout={2000}>
              <Typography variant="h4">About Us</Typography>
            </Fade>
          </Container>
        </Section>
        <MissionSection id="mission" shaded />
        <AboutUsSection id="what-we-do" />
        <TeamSection id="team" />
      </Layout>
    </>
  );
};

export default AboutUs;

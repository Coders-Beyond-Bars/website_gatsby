import React from "react";
import Helmet from "react-helmet";
import { Typography, Fade, Container } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";

import ProgramSection from "sections/ProgramSection";
import HostSiteSection from "sections/HostSiteSection";
import bg from "assets/images/background/bg4.jpg";

const Program = () => {
  return (
    <>
      <Helmet>
        <title>Coders Beyond Bars - Program</title>
      </Helmet>
      <Layout>
        <Section image={bg} shaded halfScreen vcenter>
          <Container maxWidth="lg">
            <Fade in={true} timeout={2000}>
              <Typography variant="h4">Our Program</Typography>
            </Fade>
          </Container>
        </Section>
        <ProgramSection />
        <HostSiteSection />
      </Layout>
    </>
  );
};

export default Program;

import React from "react";
import { Typography, Fade, Container } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";

// import ProgramSection from "sections/ProgramSection";
import HostSiteSection from "sections/HostSiteSection";
import bg from "assets/images/background/bg4.jpg";

const Program = () => {
  return (
    <Layout>
      <Section image={bg} shaded halfScreen vcenter>
        <Container maxWidth="lg">
          <Fade in={true} timeout={2000}>
            <Typography variant="h4">Programs</Typography>
          </Fade>
        </Container>
      </Section>
      <HostSiteSection />
    </Layout>
  );
};

export default Program;

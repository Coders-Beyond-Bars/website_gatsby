import React from "react";
import { Typography, Container } from "@material-ui/core";

import Section from "components/Section";

const MissionSection = props => {
  return (
    <Section title="Mission" {...props}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center">
          We empower returning citizens to transform their lives by educating
          them in high-tech skills, preparing them for careers in high-tech
          industries and successful re-entry into society.
        </Typography>
      </Container>
    </Section>
  );
};

export default MissionSection;

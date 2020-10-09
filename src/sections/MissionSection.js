import React from "react";
import { Typography, Container } from "@material-ui/core";

import Section from "components/Section";

const MissionSection = props => {
  return (
    <Section title="Mission" {...props}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" gutterBottom>
          We support returning citizens in their re-entry back into society by 
          providing education in high-tech job skills and hands-on
          learning experience through internship/apprenticeship.  
        </Typography>
      </Container>
    </Section>
  );
};

export default MissionSection;

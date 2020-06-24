import React from "react";
import { Grid } from "@material-ui/core";

import Section from "components/Section";

import tejiLogo from "assets/images/sponsors/teji.jpg";
import edovo from "assets/images/sponsors/edovo.jpg";
import mccarter from "assets/images/sponsors/mccarter_english.jpg";

const PartnersSection = props => {
  return (
    <Section
      title="Our Partners"
      {...props}
      subtitle="We are proud to partner with universities, colleges, corporations, and other community-based non-profit organizations that supports our mission of providing second chance to returning citizens."
    >
      <Grid container spacing={8} justify="space-between">
        <Grid item md={4}>
          <img src={tejiLogo} alt="The Educational Justice Institute at MIT" />
        </Grid>
        <Grid item md={4}>
          <img src={edovo} alt="Edovo" />
        </Grid>
        <Grid item md={4}>
          <img src={mccarter} alt="McCarter & English" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default PartnersSection;

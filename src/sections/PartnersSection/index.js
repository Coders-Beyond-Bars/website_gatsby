import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography, Grid } from "@material-ui/core";

import Section from "components/Section";

import tejiLogo from "assets/images/sponsors/teji.jpg";
import edovo from "assets/images/sponsors/edovo.jpg";
import mccarter from "assets/images/sponsors/mccarter_english.jpg";

const styles = theme => ({
  partners: {
    width: "80%",
    margin: 20
  }
});

const PartnersSection = ({ classes, ...rest }) => {
  return (
    <Section
      title="Our Partners"
      {...rest}
      subtitle="We are proud to partner  with educational institutions, corporations, and other community-based non-profit organizations that supports our mission of providing second chance to returning citizens."
    >
      <Grid container spacing={4} justify="center">
        <Grid item md={3}>
          <img src={tejiLogo} alt="The Educational Justice Institute at MIT" />
        </Grid>
        <Grid item md={3}>
          <img src={edovo} alt="Edovo" />
        </Grid>
        <Grid item md={3}>
          <img src={mccarter} alt="McCarter & English" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default withStyles(styles)(PartnersSection);

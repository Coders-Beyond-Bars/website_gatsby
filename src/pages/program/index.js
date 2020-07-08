import React from "react";
import { Typography, Fade, Container, Grid } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";

import DonateSection from "sections/DonateSection";
import HostSiteSection from "sections/HostSiteSection";
import bg from "assets/images/background/bg4.jpg";
import software from "assets/images/background/bg4.jpg";
import advMfg from "assets/images/background/bg20.jpg";

import useStyles from "assets/jss/pages/program";

const Program = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Section image={bg} shaded halfScreen vcenter>
        <Container maxWidth="lg">
          <Fade in={true} timeout={2000}>
            <Typography variant="h4">Programs</Typography>
          </Fade>
        </Container>
      </Section>
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h5" gutterBottom>
            Software Development
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <img
                src={software}
                alt="Software Development"
                className={classes.imageRounded}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">Software development</Typography>
            </Grid>
          </Grid>
          <Typography variant="h5" gutterBottom>
            Advanced Manufacturing
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <img
                src={advMfg}
                alt="Advanced Manufacturing"
                className={classes.imageRounded}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">Advanced manufacturing</Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <HostSiteSection />
      <DonateSection />
    </Layout>
  );
};

export default Program;

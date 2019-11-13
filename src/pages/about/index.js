import React from "react";
import Helmet from "react-helmet";
import { Typography, Fade, Container, Grid } from "@material-ui/core";

import Layout from "components/Layout";

import Section from "components/Section";
import MissionSection from "sections/MissionSection";
import AboutUsSection from "sections/AboutUsSection";
import TeamSection from "sections/TeamSection";

import useStyles from "assets/jss/pages/about";
import bg from "assets/images/background/bg11.jpg";
import code from "assets/images/stock/code2.jpg";

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
        <Section title="What We Do">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid
                item
                md={3}
                sm={5}
                xs={12}
                className={classes.horizontalCenter}
              >
                <img src={code} alt="Coding" className={classes.imageRounded} />
              </Grid>
              <Grid
                item
                md={9}
                sm={7}
                xs={12}
                className={classes.verticalCenter}
              >
                <Typography variant="body1" gutterBottom>
                  Coding has become a powerful, distinguishing skill in the 21st
                  job market. Those who possess the ability to read and write
                  code enjoy the opportunities to participate in the new economy
                  as producers of digital products and services while the other
                  remain as its consumers.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  However, resources to acquire coding skills are far from
                  broadly accessible across all communities. Many incarcerated
                  individuals are locked out, literally and figuratively, from
                  educational resources to acquire coding skills. Their families
                  and communities that they are from also do not have the
                  knowledge and the know-how to properly utilize affordable
                  educational resources. If educational opportunities in coding
                  is not broadly accessible to more communities, including the
                  incarcerated, then coding has the potential of becoming a
                  polarizing force in income and wealth inequality.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  In light of this background, we place ourselves at the
                  intersection of education, technology and criminal justice in
                  order to open up access to communities that have historically
                  been marginalized in these contexts. While we do not advocate
                  that everyone MUST code and pursue careers in the technology
                  domain, we certainly believe everyone should have the
                  opportunity to do so.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <AboutUsSection id="what-we-do" />
        <TeamSection id="team" />
      </Layout>
    </>
  );
};

export default AboutUs;

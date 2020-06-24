import React from "react";
import { Link } from "gatsby";
import { Typography, Grid, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import Layout from "components/Layout";
import Section from "components/Section";

import pic from "assets/images/stock/mission.png";

import HeaderSection from "sections/HeaderSection";
import MissionSection from "sections/MissionSection";
import ChallengesSection from "sections/ChallengesSection";
import TestimonialSection from "sections/TestimonialSection";
import PartnersSection from "sections/PartnersSection";

import styles from "assets/jss/pages/home";

const Index = ({ classes }) => (
      <Layout>
        <HeaderSection id="header" />
        <ChallengesSection id="challenges" shaded />
        <MissionSection id="mission" />
        <Section shaded>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item sm={5} md={4}>
                <img
                  src={pic}
                  alt="Mission"
                  className={classes.imageRounded}
                />
              </Grid>
              <Grid item sm={7} md={8} className={classes.verticalCenter}>
                <Typography variant="h6" gutterBottom>
                  Started as an initiative under The Educational Justice
                  Institute at Massachusetts Institute of Technology, Coders
                  Beyond Bars, Inc. (CBB) is a not-for-profit organization in
                  Massachusetts with the mission of providing incarcerated
                  individuals the opportunity to learn skills in software
                  development and preparing them for successful entry into
                  careers in high-tech industries.{" "}
                  <Link to="/about" className={classes.link}>
                    Read More
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <PartnersSection />
        <TestimonialSection id="testimonial" shaded />
      </Layout>
);

export default withStyles(styles)(Index);

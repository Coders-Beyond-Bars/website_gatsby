import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import Layout from "components/Layout";
import Section from "components/Section";
import CBBButton from "components/CBBButton";

import pic from "assets/images/stock/mission.png";

import HeaderSection from "sections/HeaderSection";
import MissionSection from "sections/MissionSection";
import ChallengesSection from "sections/ChallengesSection";
import TestimonialSection from "sections/TestimonialSection";
import PartnersSection from "sections/PartnersSection";
import DonateSection from "sections/DonateSection";

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
              <Grid item sm={7} md={8}>
                <Typography variant="h6" gutterBottom>
                  Started as <em>Coders
                  Beyond Bars</em> initiative under The Educational Justice
                  Institute at Massachusetts Institute of Technology, <bold>Reboot to Tech </bold>
                  is a not-for-profit organization in Massachusetts with
                  the mission of providing returning citizens the opportunity
                  to learn valuable technical skills in rapidly growing industries
                  such as software engineering and advanced manufacturing,
                  and preparing them for successful transition back into
                  society by attaining rewarding careers.{" "}
                </Typography>
                <CBBButton href="/about/" color="primary">
                  Read More
                </CBBButton>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <PartnersSection />
        <TestimonialSection id="testimonial" shaded />
        <DonateSection id="donate" />
      </Layout>
);

export default withStyles(styles)(Index);

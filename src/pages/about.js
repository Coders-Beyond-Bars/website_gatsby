import React from "react";
import { Link } from "gatsby";
import { Typography, Container, Grid } from "@material-ui/core";

import Layout from "components/Layout";
import Header from "components/Header";

import Section from "components/Section";
import MissionSection from "sections/MissionSection";
import AboutUsSection from "sections/AboutUsSection";
import HistorySection from "sections/HistorySection";
import TeamSection from "sections/TeamSection";

import useStyles from "assets/jss/pages/about";

import bg from "assets/images/background/bg5.jpg";
import techjob1 from "assets/images/stock/stock1-800x800.jpg";
import code from "assets/images/stock/code2.jpg";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Layout title="About Us">
      <Header
        image={bg}
        title="Rebooting the lives of returning citizens through technology"
        subtitle="Our vision of the future is a world in which returning citizens are productive, contributing members of our society again."
        shaded
        halfScreen
        hcenter
        vcenter
      />
      <MissionSection id="mission" shaded />
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={techjob1}
              alt="Tech Skill"
              className={classes.fullWidth}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.verticalCenter}>
            <Typography color="primary" variant="h4" gutterBottom>
              Who We Are
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              gutterBottom
              align="justify"
            >
              Founded in 2018 based on the work of graduate students from MIT
              and Harvard, Reboot to Tech, Inc. (Reboot) is a 501(c)(3)
              not-for-profit organization with the vision of empowering
              returning citizens with education and training in high-tech skills
              to help them regain their dignity as productive and contributing
              members of our society again.
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              gutterBottom
              align="justify"
            >
              Too many Americans are prevented from attaining meaningful career
              opportunities in growing high-tech industries due to their history
              with the criminal justice system. Meanwhile, many companies in the
              high-tech industries are struggling to find qualified employees
              equipped with relevant skills.
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              gutterBottom
              align="justify"
            >
              Since our founding, Reboot has provided classes and one-to-one
              tutoring sessions in high-tech skills to returning citizens in
              correctional facilities and those on parole and probation.
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              gutterBottom
              align="justify"
            >
              We believe helping returning citizens pave a pathway to a
              meaningful career and financial security is a critical part of a
              successful re-entry process - making our communities safer, more
              just, and equitable.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <HistorySection />
      <TeamSection />
    </Layout>
  );
};

export default AboutUs;

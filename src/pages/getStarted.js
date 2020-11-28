import React from "react";
import classnames from "classnames";
import { Typography, Grid, Hidden } from "@material-ui/core";

import Layout from "components/Layout";
import Header from "components/Header";
import Section from "components/Section";
import CBBButton from "components/CBBButton";

import ProgramSection from "sections/ProgramSection";

import useStyles from "assets/jss/pages/getStarted";

import bg from "assets/images/background/bg22.jpg";
import stockImage1 from "assets/images/stock/stock7-800x800.jpg";
import stockImage2 from "assets/images/stock/stock18-800x800.jpg";
import stockImage3 from "assets/images/stock/stock12-800x800.jpg";

import parallaxImg from "assets/images/parallax/parallax7.jpg";

const GetStarted = () => {
  const classes = useStyles();

  return (
    <Layout title="Get Started">
      <Header
        image={bg}
        title="Ready to reboot your career and life?"
        subtitle="Imagine having an opportunity to make an honest living and be valued again as a contributing member of your community."
        shaded
        halfScreen
        hcenter
        vcenter
      />
      <Section shaded>
        <Grid container spacing={4}>
          <Hidden mdUp>
            <Grid item xs={12} sm={12}>
              <img src={stockImage1} alt="Participate" />
            </Grid>
          </Hidden>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className={classnames(classes.flex, classes.verticalCenter)}
          >
            <Typography variant="h4" gutterBottom>
              Learn high-tech skills
            </Typography>
            <Typography variant="h6" gutterBottom>
              Today's job market demands ever more sophisticated employees
              equipped with knowledge and skills in information technology and
              advanced machinery. Career opportunities for those with these
              relevant qualifications are rapidly expanding across the country.
            </Typography>
            <Typography variant="h6" gutterBottom>
              You may have missed your opportunity to pick up skills in those
              job markets. Perhaps, you feel the process of joining these
              technical industries is too daunting and difficult. It doesn't
              have to be, and we are here to connect you with the right training
              programs and apprenticeships to help you acquire the latest skills
              in rapidly growing industries.
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <img src={stockImage1} alt="Participate" />
            </Grid>
          </Hidden>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <img src={stockImage2} alt="Donate" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className={classnames(classes.flex, classes.verticalCenter)}
          >
            <Typography variant="h4" gutterBottom color="secondary">
              Earn while you learn
            </Typography>
            <Typography variant="h6" gutterBottom color="secondary">
              You have many financial obligations including rent, child support,
              legal fees, etc. Going back to school to earn a degree may not be
              a realistic option for you right now.
            </Typography>
            <Typography variant="h6" gutterBottom color="secondary">
              Instead of paying tuition to learn, through our apprenticeship
              program with corporate partners, you earn an income with a living
              wage to meet your financial needs while you acquire your skills
              and gain professional experience.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Section shaded>
        <Grid container spacing={4}>
          <Hidden mdUp>
            <Grid item xs={12} sm={12}>
              <img src={stockImage3} alt="Volunteer" />
            </Grid>
          </Hidden>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className={classnames(classes.flex, classes.verticalCenter)}
          >
            <Typography variant="h4" gutterBottom>
              Pave the pathway toward financial security
            </Typography>
            <Typography variant="h6" gutterBottom>
              Our apprenticeship program is designed to be a launchpad for a
              career path with ample growth opportunities in advancement and
              higher-paid positions. We work with corporate partners to identify
              jobs with growth opportunities both financially and
              professionally. There are no dead-end jobs in our reboot program.
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <img src={stockImage3} alt="Volunteer" />
            </Grid>
          </Hidden>
        </Grid>
      </Section>
      <ProgramSection />
      <Section
        title="Change starts here"
        subtitle="Ready to jump-start your career?"
        shaded
        image={parallaxImg}
        hcenter
      >
        <CBBButton color="primary" size="large">
          Contact Us
        </CBBButton>
      </Section>
    </Layout>
  );
};

export default GetStarted;

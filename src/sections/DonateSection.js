import React from "react";
import { Link } from "gatsby";
import { Typography, Grid } from "@material-ui/core";

import Section from "components/Section";
import CBBButton from "components/CBBButton";

import donateImg from "assets/images/stock/donate.jpg";

import useStyles from "assets/jss/sections/donate";

const DonateSection = () => {
  const classes = useStyles();
  return (
    <Section
      image={donateImg}
      shaded
      title="Support Us"
      subtitle="Our programs are supported through generous
    donations of individuals and business partners who believe in
    our mission of providing second-chances to returning citizens
    and empowering them to be successful, contributing members of our
    society again."
    >
      <Grid container spacing={6} justify="center">
        <Grid item sm={7} xs={12} className={classes.div}>
          <Typography variant="body1" gutterBottom>
            Your contributions will help provide stipends to our outstanding
            students and purchase educational materials to provide high quality
            educational experience for our students.
          </Typography>
          <br />
          <CBBButton
            component={Link}
            to="/donate/"
            color="primary"
            size="large"
          >
            <Typography variant="h6">Donate</Typography>
          </CBBButton>
        </Grid>
      </Grid>
    </Section>
  );
};

export default DonateSection;

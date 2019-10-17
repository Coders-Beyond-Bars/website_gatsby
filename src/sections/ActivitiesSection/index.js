import React from "react";
import { Link } from "gatsby";
import { Typography, Container, Grid } from "@material-ui/core";

import Section from "components/Section";
import useStyles from "assets/jss/sections/activities";
import mikeJoe from "assets/images/stock/MikeAndJoe.jpg";

const ActivitiesSection = props => {
  const classes = useStyles();

  return (
    <Section title="Activities" {...props}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={6}>
            <img
              src={mikeJoe}
              alt="Mentor and Student"
              className={classes.imageRounded}
            />
          </Grid>
        </Grid>
        <Typography variant="body1">
          Learn more about our mission and our activities{" "}
          <Link to="/about/">here</Link>
        </Typography>
      </Container>
    </Section>
  );
};

export default ActivitiesSection;

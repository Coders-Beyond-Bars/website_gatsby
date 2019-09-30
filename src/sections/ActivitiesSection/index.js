import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "gatsby";
import { Typography, Container, Grid } from "@material-ui/core";

import Section from "components/Section";

import mikeJoe from "assets/images/stock/MikeAndJoe.jpg";

const styles = theme => ({
  activities: {
    width: "80%",
    margin: 20
  }
});

const ActivitiesSection = ({ classes, ...rest }) => {
  return (
    <Section title="Activities" {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={6}>
            <img src={mikeJoe} alt="Mentor and Student" />
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

export default withStyles(styles)(ActivitiesSection);

import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import Section from "components/Section";

import useStyles from "assets/jss/templates/team-profile";

import edmcadams from "assets/images/testimonial/ed-mcadams.jpg";

const TestimonialSection = props => {
  const classes = useStyles();
  return (
    <Section {...props}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item md={3} sm={4}>
            <img
              src={edmcadams}
              alt="Ed McAdams"
              className={classes.profilePic}
            />
            <Typography variant="h6" align="center">
              Ed McAdams
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.title}
            >
              Former Headmaster at School of Reentry
              <br />
              Boston Pre-release Center
            </Typography>
          </Grid>
          <Grid item md={9} sm={8}>
            <Typography variant="h6">
              It has been impressive to see the interest and investment by our
              students in this coders program. They are fully engaged and
              motivated in the learning process. The technical skills that they
              are learning, along with the collaboration required to work
              through projects will serve our students well in the future.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default TestimonialSection;

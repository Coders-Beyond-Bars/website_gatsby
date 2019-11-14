import React from "react";

import { Typography, Container, Grid, Hidden } from "@material-ui/core";
import useStyles from "assets/jss/sections/challenges";

import Section from "components/Section";

import mass_incarceration from "assets/images/challenges/mass_incarceration.jpg";
import recidivism from "assets/images/challenges/recidivism.jpg";
import unemployment from "assets/images/challenges/unemployment.jpg";
import cost from "assets/images/challenges/cost.jpg";

const ChallengesSection = props => {
  const classes = useStyles();

  return (
    <Section title="Challenges" {...props}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={2} sm={3} xs={12} className={classes.horizontalCenter}>
            <img
              src={mass_incarceration}
              alt="Mass Incarceration"
              className={classes.image}
            />
          </Grid>
          <Grid item md={10} sm={9} xs={12} className={classes.verticalCenter}>
            <Typography variant="body1" gutterBottom>
              Currently, there are over 2 million individuals behind bars in
              county jails, state prisons, and federal penitentiaries. To put
              this into another perspective, more than one in one-hundred adults
              between the ages of eighteen and sixty-five are behind bars in the
              US. This number does not even include many millions more who are
              on parole or probation and are still part of the correctional
              system.
            </Typography>
          </Grid>
          <Hidden smUp>
            <Grid
              item
              md={2}
              sm={3}
              xs={12}
              className={classes.horizontalCenter}
            >
              <img
                src={recidivism}
                alt="Recidivism"
                className={classes.image}
              />
            </Grid>
          </Hidden>
          <Grid item md={10} sm={9} xs={12} className={classes.verticalCenter}>
            <Typography variant="body1" gutterBottom>
              While multiple factors contribute to the high incarceration rate
              in the United States, this problems is exacerbated by high rate of
              recidivism for those who are released. Approximately 650,000
              incarcerated individuals are released every year from state and
              federal correctional facilities. According to a research reported
              by the Department of Justice, 67.8% of the former inmates were
              arrested again within 3 years of their release and 76.6% within 5
              years.
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid
              item
              md={2}
              sm={3}
              xs={12}
              className={classes.horizontalCenter}
            >
              <img
                src={recidivism}
                alt="Recidivism"
                className={classes.image}
              />
            </Grid>
          </Hidden>
          <Grid item md={2} sm={3} xs={12} className={classes.horizontalCenter}>
            <img
              src={unemployment}
              alt="Unemployment"
              className={classes.image}
            />
          </Grid>
          <Grid item md={10} sm={9} xs={12} className={classes.verticalCenter}>
            <Typography variant="body1" gutterBottom>
              Studies show that there is a powerful relationship between
              unemployment and recidivism among formerly incarcerated
              individuals. Locked out of gainful employment opportunities, many
              formerly incarcerated individuals fall back to substance abuse or
              engage in criminal activities. Up to 60% of formerly incarcerated
              individuals remain jobless a year after their release due to their
              criminal records and lack of employable skills. Yet, according to
              a 2008 research report by the Urban Institute, individuals who
              made more than $10 an hour were half as likely to return to prison
              as those making less than $7 an hour. This is where the hope lies.
            </Typography>
          </Grid>
          <Hidden smUp>
            <Grid
              item
              md={2}
              sm={3}
              xs={12}
              className={classes.horizontalCenter}
            >
              <img src={cost} alt="Cost" className={classes.image} />
            </Grid>
          </Hidden>
          <Grid item md={10} sm={9} xs={12} className={classes.verticalCenter}>
            <Typography variant="body1" gutterBottom>
              Mass incarceration is not only one of the largest humanitarian
              crises, it is also one that has severe economic consequences.
              According to a report published by the Pew Center in 2011, the
              growth in prison population in America came with a substantial
              cost, with annual State and Federal expenditures on corrections
              growing by 305% during past two decades, to the tune of $52
              billion. If 10 states with the highest recidivism rates reduced
              their rates by 10%, they could save more than $470 million a year.
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid
              item
              md={2}
              sm={3}
              xs={12}
              className={classes.horizontalCenter}
            >
              <img src={cost} alt="Cost" className={classes.image} />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Section>
  );
};

export default ChallengesSection;

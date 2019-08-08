import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography, Grid } from "@material-ui/core";

import Section from "components/Section";

const styles = theme => ({
  team: {
    width: "80%",
    margin: 20
  }
});

const TeamSection = ({ classes, ...rest }) => {
  return (
    <Section title="Team" {...rest} shaded>
      <div className={classes.team}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" align="center">
              Richard Kim
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" align="center">
              Lewis Valenti
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" align="center">
              Bob Balfour
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Section>
  );
};

export default withStyles(styles)(TeamSection);

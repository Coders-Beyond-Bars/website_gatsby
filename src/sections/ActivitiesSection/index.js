import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography } from "@material-ui/core";

import Section from "components/Section";

const styles = theme => ({
  activities: {
    width: "80%",
    margin: 20
  }
});

const ActivitiesSection = ({ classes, ...rest }) => {
  return (
    <Section title="Activities" {...rest}>
      <div className={classes.activities}>
        <Typography variant="h5" align="center">
          What We Do
        </Typography>
      </div>
    </Section>
  );
};

export default withStyles(styles)(ActivitiesSection);

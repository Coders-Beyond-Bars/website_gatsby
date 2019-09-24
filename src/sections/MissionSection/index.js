import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography } from "@material-ui/core";

import Section from "components/Section";

const styles = theme => ({
  missionBox: {
    width: "80%",
    margin: 20
  }
});

const MissionSection = ({ classes, ...rest }) => {
  return (
    <Section title="Mission" {...rest} shaded>
      <div className={classes.missionBox}>
        <Typography variant="h5" align="center">
          We empower returning citizens to transform their lives by educating
          them in high-tech skills and preparing them for careers in high-tech
          industries for successful re-entry into society.
        </Typography>
      </div>
    </Section>
  );
};

export default withStyles(styles)(MissionSection);
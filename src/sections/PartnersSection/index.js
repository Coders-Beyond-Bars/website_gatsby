import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography } from "@material-ui/core";

import Section from "components/Section";

import tejiLogo from "assets/images/logos/teji-logo.png";

const styles = theme => ({
  partners: {
    width: "80%",
    margin: 20
  }
});

const PartnersSection = ({ classes, ...rest }) => {
  return (
    <Section title="Our Partners" {...rest} shaded>
      <div className={classes.partners}>
        <Typography variant="h5" align="center">
          <img src={tejiLogo} alt="The Educational Justice Institute" />
        </Typography>
      </div>
    </Section>
  );
};

export default withStyles(styles)(PartnersSection);

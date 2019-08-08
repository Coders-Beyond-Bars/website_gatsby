import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography } from "@material-ui/core";

import Section from "components/Section";

const styles = theme => ({
  getInvolved: {
    width: "80%",
    margin: 20
  }
});

const GetInvovedSection = ({ classes, ...rest }) => {
  return (
    <Section title="Get Involved" {...rest}>
      <div className={classes.getInvolved}>
        <Typography variant="h5" align="center">
          Get Involved
        </Typography>
      </div>
    </Section>
  );
};

export default withStyles(styles)(GetInvovedSection);

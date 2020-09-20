import React from "react";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";

import { Button } from "@material-ui/core";

import styles from "assets/jss/components/cbbbuttonStyles";

const CBBButton = ({ classes, children, color, ...rest }) => {
  const buttonClass = clsx(classes.button, {
    [classes.primaryColor]: color === "primary",
    [classes.secondaryColor]: color === "secondary"
  });
  return (
    <Button variant="outlined" className={buttonClass} {...rest}>
      {children}
    </Button>
  );
};

export default withStyles(styles)(CBBButton);

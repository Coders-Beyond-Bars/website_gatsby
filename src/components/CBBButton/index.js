import React from "react";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";

import { Button } from "@material-ui/core";

const styles = theme => {
  return {
    button: {
      fontFamily: theme.typography.title.fontFamily,
      borderWidth: 5,
      borderColor: "white",
      color: "white",
      textTransform: "capitalize",
      "&:hover": {
        borderColor: "white",
        borderWidth: 5,
        color: theme.palette.secondary.main
      }
    },
    primaryColor: {
      borderColor: theme.palette.primary.main,
      color: "white",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    },
    secondaryColor: {
      borderColor: theme.palette.secondary.main,
      color: "white",
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        borderColor: theme.palette.secondary.light,
        color: "white",
        backgroundColor: theme.palette.secondary.light
      }
    }
  };
};

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

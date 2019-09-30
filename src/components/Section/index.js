import React from "react";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography, Grid } from "@material-ui/core";

import CBBDivider from "components/CBBDivider";

const styles = theme => ({
  section: {
    display: "flex",
    padding: "45px 0",
    position: "relative",
    backgroundColor: "white"
  },
  shaded: {
    color: "white",
    backgroundColor: "rgba(10, 10, 10, 0.9)"
  },
  fullScreen: {
    minHeight: "100vh"
  },
  halfScreen: {
    minHeight: "50vh"
  },
  image: {
    zIndex: 2,
    backgroundPosition: "center",
    backgroundSize: "cover",
    "&:after": {
      background: "rgb(0, 0, 0)",
      opacity: 0.5,
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  subtitle: {
    fontWeight: "bold",
    width: "85%",
    alignSelf: "center"
  },
  vcenter: {
    justifyContent: "center"
  },
  hcenter: {
    alignItems: "center"
  }
});

const Section = ({
  classes,
  classNames,
  children,
  shaded,
  title,
  subtitle,
  image,
  fullScreen,
  halfScreen,
  vcenter,
  hcenter,
  ...rest
}) => {
  const sectionClass = clsx(
    classes.section,
    {
      [classes.shaded]: shaded,
      [classes.image]: image ? true : false,
      [classes.fullScreen]: fullScreen,
      [classes.halfScreen]: halfScreen
    },
    classNames
  );
  const containerClass = clsx(classes.container, {
    [classes.vcenter]: vcenter,
    [classes.hcenter]: hcenter
  });
  const style = {
    backgroundImage: `url(${image})`
  };
  return (
    <section className={sectionClass} {...rest} style={style}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={11} className={containerClass}>
          {title && (
            <>
              <Typography variant="h4" gutterBottom align="center">
                {title}
              </Typography>
              <Typography
                variant="body1"
                className={classes.subtitle}
                color={shaded ? "inherit" : "secondary"}
                align="center"
              >
                {subtitle}
              </Typography>
              <CBBDivider dark={shaded ? false : true} />
            </>
          )}
          {children}
        </Grid>
      </Grid>
    </section>
  );
};

export default withStyles(styles)(Section);

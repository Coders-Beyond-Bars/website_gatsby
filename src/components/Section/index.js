import React from "react";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography, Container } from "@material-ui/core";

import CBBDivider from "components/CBBDivider";

import styles from "assets/jss/components/sectionStyles";

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
  maxWidth,
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
  console.log(containerClass)
  return (
    <section className={sectionClass} style={style} {...rest}>
      <Container maxWidth={maxWidth} className={containerClass}>
        {title && (
          <>
            <Typography variant="h4" gutterBottom align="center">
              {title}
            </Typography>
            <Typography
              variant="h6"
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
      </Container>
    </section>
  );
};

export default withStyles(styles)(Section);

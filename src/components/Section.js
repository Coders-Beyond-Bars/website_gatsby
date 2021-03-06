import React from "react";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography, Container } from "@material-ui/core";

import Divider from "components/CBBDivider";

import sectionStyles from "assets/jss/components/sectionStyles";

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
      [classes.image]: !!image,
      [classes.fullScreen]: fullScreen,
      [classes.halfScreen]: halfScreen,
    },
    classNames
  );

  const containerClass = clsx(classes.container, {
    [classes.vcenter]: vcenter,
    [classes.hcenter]: hcenter,
  });

  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <section className={sectionClass} style={style} {...rest}>
      <Container maxWidth={maxWidth} className={containerClass}>
        {title && (
          <div className={classes.titleContainer}>
            <Typography
              variant="h4"
              color={shaded ? "inherit" : "primary"}
              gutterBottom
              align="center"
            >
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
            <Divider dark={!shaded} />
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default withStyles(sectionStyles)(Section);

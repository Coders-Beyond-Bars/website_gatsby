import React from "react";

import { Typography } from "@material-ui/core";

import makeStyles from "assets/jss/components/logoStyles";

const Logo = ({ logoColor, subColor, size, ...rest }) => {
  const classes = makeStyles(size);

  return (
    <div {...rest}>
      <Typography color={logoColor || "inherit"} className={classes.logo}>
        reboot
      </Typography>
      <Typography color={subColor || "inherit"} className={classes.subtitle}>
        to tech
      </Typography>
    </div>
  );
};

export default Logo;

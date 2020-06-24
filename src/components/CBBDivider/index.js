import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import CBBIcon from "components/CBBIcon";

import styles from "assets/jss/components/cbbdividerStyles";

const CBBDivider = ({ classes, dark }) => {
  const lineStyle = {
    borderBottomColor: dark ? "#757575" : "#fafafa"
  };
  return (
    <div className={classes.divider}>
      <div className={classes.line} style={lineStyle} />
      <CBBIcon color={dark ? "#757575" : "#fafafa"} fontSize="large" />
      <div className={classes.line} style={lineStyle} />
    </div>
  );
};

export default withStyles(styles)(CBBDivider);

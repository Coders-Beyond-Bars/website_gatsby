import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import CBBIcon from "components/CBBIcon";

const styles = theme => ({
  divider: {
    display: "flex",
    width: "90%",
    margin: "20px 0 20px 0"
  },
  line: {
    width: "100%",
    position: "relative",
    margin: 15,
    borderBottom: "2px solid #757575"
  }
});

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

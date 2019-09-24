import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import { SvgIcon } from "@material-ui/core";

const styles = theme => {
  return {
    black: {
      fill: "black",
      stroke: "black",
      strokeWidth: 11
    }
  };
};

const CBBIcon = ({ classes, fontSize, color }) => (
  <SvgIcon viewBox="0 0 407.98 240" fontSize={fontSize}>
    <path
      className={classes.black}
      style={{
        fill: color,
        stroke: color
      }}
      d="M285,65.29c-4.6-3-7.37-6-7.6-11.75,0-6.45,5.53-12.67,12-12.67,3.92,0,7.14,2.07,9.91,3.91L394,107.68c5.07,3.23,8.53,5.76,8.53,12.44.23,6.46-3.46,9.22-8.53,12.45L299.1,195.7c-2.77,1.84-6,3.45-9.45,3.45-6.68,0-12-6-12.21-12.44,0-6,3.69-9.21,8.06-12.21l82-54.38Z"
    />
    <path
      className={classes.black}
      style={{
        fill: color,
        stroke: color
      }}
      d="M162.57,216.71c-3.27,5.73-6.55,9.56-13.38,9.56s-13.66-5.74-13.66-12.84c0-5.19,3.28-9.83,6-14.2L243.7,24.13c3.28-5.46,6.56-10.38,13.39-10.38,7.1,0,13.38,5.74,13.38,12.84a21.32,21.32,0,0,1-3,10.65Z"
    />
    <path
      className={classes.black}
      style={{
        fill: color,
        stroke: color
      }}
      d="M123,174.73c4.6,3,7.37,6,7.6,11.75,0,6.45-5.53,12.67-12,12.67-3.92,0-7.14-2.07-9.91-3.91L14,132.34c-5.07-3.23-8.53-5.76-8.53-12.44-.23-6.46,3.46-9.22,8.53-12.45L108.9,44.32c2.77-1.84,6-3.45,9.45-3.45,6.68,0,12,6,12.21,12.44,0,6-3.69,9.21-8.06,12.21l-82,54.38Z"
    />
  </SvgIcon>
);

export default withStyles(styles)(CBBIcon);
import React, { useState } from "react";

import { Typography, Grid, Grow } from "@material-ui/core";

const FoldingScreen = ({ items }) => {
  return (
    <Grid container spacing={1}>
      {items.map(item => (
        <Grid item md={3}>
          blah, blah, blah
        </Grid>
      ))}
    </Grid>
  );
};

export default FoldingScreen;

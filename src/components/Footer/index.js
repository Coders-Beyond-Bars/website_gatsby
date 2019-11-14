import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, Link, Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  footer: {
    color: "white",
    padding: "25px 25px 25px 25px",
    backgroundColor: theme.palette.primary.main
  },
  contact: {
    display: "flex",
    justifyContent: "space-between"
  },
  grid: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "flex-start",
      marginTop: 8
    }
  }
});

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <Container className={classes.contact}>
      <Grid container spacing={1}>
        <Grid sm={6} xs={12}>
          <Typography variant="body1" color="secondary">
            &copy;2019 Coders Beyond Bars Inc. All rights reserved.
          </Typography>
        </Grid>
        <Grid sm={6} xs={12} className={classes.grid}>
          <Link
            href="mailto:info@codersbeyondbars.org"
            variant="body1"
            color="secondary"
          >
            info@codersbeyondbars.org
          </Link>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default withStyles(styles)(Footer);

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, Link } from "@material-ui/core";

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
  }
});

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <Container className={classes.contact}>
      <Typography variant="body1" color="secondary">
        &copy;2019 Coders Beyond Bars Inc. All rights reserved.
      </Typography>
      <Link
        href="mailto:info@codersbeyondbars.org"
        variant="body1"
        color="secondary"
      >
        info@codersbeyondbars.org
      </Link>
    </Container>
  </div>
);

export default withStyles(styles)(Footer);

import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "gatsby";

import { Typography } from "@material-ui/core";
import Layout from "components/Layout";

import useStyles from "assets/jss/pages/notfoundPage";

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.container}>
        <Typography variant="body1">
          Uh oh! The page you're looking for does not exist. Click{" "}
          <Link to="/">here</Link> to go back to home page.
        </Typography>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

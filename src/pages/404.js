import React from "react";

import { Link } from "gatsby";

import { Typography } from "@material-ui/core";
import Layout from "components/Layout";

import useStyles from "assets/jss/pages/notfoundPage";

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <Layout title="404">
      <div className={classes.container}>
        <Typography variant="body1">
          Uh oh! The page you're looking for does not exist. Click{" "}
          <Link to="/" className={classes.link}>
            here
          </Link>{" "}
          to go back to home page.
        </Typography>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

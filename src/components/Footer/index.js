import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, Link, Grid } from "@material-ui/core";

import SubscribeForm from 'components/SubscribeForm';

import styles from "assets/jss/components/footerStyles";

const Footer = ({ classes }) => {
  const data = useStaticQuery(graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
            email
            company
            streetAddress
            city
            state
            zipCode
          }
        }
      }
    `)
  const metadata = data.site.siteMetadata;
  const date = new Date();

  return (
    <footer>
      <section className={classes.main}>
        <Container>
          <Grid container spacing={0}>
            <Grid item sm={8} xs={12}>
              <Typography variant="h5" color="inherit" gutterBottom>
                {metadata.company}
              </Typography>
              <Typography variant="h6" color="inherit">
                {metadata.streetAddress}
              </Typography>
              <Typography variant="h6" color="inherit">
                {metadata.city}, {metadata.state} {metadata.zipCode}
              </Typography>
              <Link
                href={`mailto:${metadata.email}`}
                variant="body1"
                color="inherit"
              >
                {metadata.email}
              </Link>
            </Grid>
            <Grid item sm={4} xs={12}>
              <SubscribeForm />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.bottom}>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={6} xs={12}>
              <Typography variant="body1" color="secondary">
                &copy;{date.getFullYear()} {metadata.company} All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
  </footer>
  )
}

export default withStyles(styles)(Footer);

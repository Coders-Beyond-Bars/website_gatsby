import React from "react";
import Helmet from "react-helmet";
import { Typography, Fade, Container } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";

import bg from "assets/images/background/bg9.jpg";

const News = () => {
  return (
    <>
      <Helmet>
        <title>Coders Beyond Bars - In the News</title>
      </Helmet>
      <Layout>
        <Section image={bg} shaded halfScreen vcenter>
          <Container maxWidth="lg">
            <Fade in={true} timeout={2000}>
              <Typography variant="h4">In the News</Typography>
            </Fade>
          </Container>
        </Section>
        <Section>
          <Typography variant="h6">News Articles</Typography>
        </Section>
      </Layout>
    </>
  );
};

export default News;

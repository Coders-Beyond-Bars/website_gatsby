import React from "react";
import Helmet from "react-helmet";
import { Typography, Fade, Container } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";
import CBBButton from "components/CBBButton";

import bg from "assets/images/background/bg10.jpg";

const Donate = () => {
  return (
    <>
      <Helmet>
        <title>Coders Beyond Bars - Donate</title>
      </Helmet>
      <Layout>
        <Section image={bg} shaded halfScreen vcenter>
          <Container maxWidth="lg">
            <Fade in={true} timeout={2000}>
              <Typography variant="h4">Donate</Typography>
            </Fade>
          </Container>
        </Section>
        <Section>
          <Typography variant="body1" gutterBottom>
            Thank you for supporting Coders Beyond Bars. We are a non-profit
            organization that is currently sustained through volunteers and
            small financial donations from individuals who believe in our
            mission. As we grow, we are eager to add new members, better
            infrastructure and the latest resources to be able to provide our
            students the best educational experience possible.
          </Typography>
          <Typography variant="body1">
            Coders Beyond Bars is a registered 501(c)(3) and your donation will
            be tax-deductible.
          </Typography>
          <CBBButton
            size="large"
            color="primary"
            style={{ width: 200, margin: "25px 5px 25px 5px" }}
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KYN3BL7XRMA64&source=url"
          >
            Donate
          </CBBButton>
        </Section>
      </Layout>
    </>
  );
};

export default Donate;

import React from "react";
import { Typography, Fade, Container } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";
import CBBButton from "components/CBBButton";

import bg from "assets/images/background/bg10.jpg";

const Donate = () => (
    <Layout>
          <Section image={bg} shaded halfScreen vcenter>
            <Container maxWidth="lg">
              <Fade in={true} timeout={2000}>
                <Typography variant="h4">Donate</Typography>
              </Fade>
            </Container>
          </Section>
          <Section>
            <Container maxWidth="lg">
              <Typography variant="body1" gutterBottom>
                Thank you for supporting Reboot to Tech. We are a non-profit
                organization that is currently sustained through volunteers and
                financial donations from individuals who believe in our mission.
                The donation you make today will support the students attending
                our BPRC program. Funds will support the technology, software and
                equipment required for each student to enjoy the best educational
                experience possible.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Reboot to Tech, Inc. is a registered 501(c)(3) and your donation
                will be tax-deductible.
              </Typography>
              <CBBButton
                size="large"
                color="primary"
                style={{ width: 200, margin: "25px 5px 25px 5px" }}
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KYN3BL7XRMA64&source=urly"
              >
                Donate
              </CBBButton>
            </Container>
          </Section>
      </Layout>
);

export default Donate;

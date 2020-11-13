import React from "react";
import { Grid } from "@material-ui/core";

import Section from "components/Section";

import mccarter from "assets/images/sponsors/mccarter_english.jpg";
import rcc from "assets/images/sponsors/rcc.jpg";
import quickbase from "assets/images/sponsors/quickbase.jpg";
import madaket from "assets/images/sponsors/madaket.png";
import workforce from "assets/images/sponsors/workforce.jpg";
import namc from "assets/images/sponsors/namc.jpg";
import lenapark from "assets/images/sponsors/lenapark.jpg";

const PartnersSection = (props) => {
  return (
    <Section
      title="Our Partners"
      {...props}
      subtitle="We are proud to partner with universities, colleges, corporations, and other community-based non-profit organizations that supports our mission of providing second chance to returning citizens."
    >
      <Grid container spacing={4} justify="space-around">
        <Grid item md={3} sm={4} xs={6}>
          <img src={mccarter} alt="McCarter & English" />
        </Grid>
        <Grid item md={3} sm={4} xs={6}>
          <img src={rcc} alt="Roxbury Community College" />
        </Grid>
        <Grid item md={3} sm={4} xs={6}>
          <img src={quickbase} alt="Quickbase" />
        </Grid>
        <Grid item md={3} sm={4} xs={6}>
          <img src={madaket} alt="Madaket" />
        </Grid>
        <Grid item md={3} sm={4} xs={6}>
          <img src={namc} alt="NAMC" />
        </Grid>
        <Grid item md={3} sm={4} xs={6}>
          <img
            src={workforce}
            alt="Massachusetts Executive Office of Labor and Workforce Development"
          />
        </Grid>
        <Grid item md={3} sm={4} xs={6}>
          <img src={lenapark} alt="Lena Park CDC" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default PartnersSection;

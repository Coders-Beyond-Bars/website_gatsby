import React, { Component } from "react";
import Helmet from "react-helmet";

import { LandingLayout } from "components/Layout";

import HeaderSection from "sections/HeaderSection";
import MissionSection from "sections/MissionSection";
import ActivitiesSection from "sections/ActivitiesSection";
import TeamSection from "sections/TeamSection";
import GetInvolvedSection from "sections/GetInvolvedSection";
import PartnersSection from "sections/PartnersSection";
import ContactSection from "sections/ContactSection";

class Index extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>
            Coders Beyond Bars - Empowering Returning Citizens to become
            producers of digital technology
          </title>
          <meta name="description" content="Coders Beyond Bars" />
          <meta
            name="keywords"
            content="Prison Education, Coding, Re-entry, Second Chance"
          />
          <meta name="author" content="Richard Kim" />
        </Helmet>

        <LandingLayout>
          <HeaderSection id="header" />
          <MissionSection id="mission" />
          <ActivitiesSection id="activities" />
          <TeamSection id="team" />
          <GetInvolvedSection id="getInvolved" />
          <PartnersSection id="partners" />
          <ContactSection id="contact" />
        </LandingLayout>
      </div>
    );
  }
}

export default Index;

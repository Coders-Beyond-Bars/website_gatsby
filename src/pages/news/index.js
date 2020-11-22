import React from "react";

import Layout from "components/Layout";
import Section from "components/Section";
import SEO from "components/SEO";
import BlogRoll from "components/BlogRoll";

import HeaderSection from "sections/HeaderSection";
import DonateSection from "sections/DonateSection";

import bg from "assets/images/background/bg8.jpg";

const News = () => {
  return (
    <>
      <SEO title="News & Press" />
      <Layout>
        <HeaderSection
          image={bg}
          shaded
          title="News & Press"
          subtitle="Stay up to date on our latest activities"
        />
        <Section>
          <BlogRoll />
        </Section>
      </Layout>
    </>
  );
};

export default News;

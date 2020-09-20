import React from "react";

import Layout from "components/Layout";
import Section from "components/Section"
import SEO from "components/SEO"
import BlogRoll from "components/BlogRoll"

import HeaderSection from "sections/HeaderSection"
import DonateSection from "sections/DonateSection"

import bg from "assets/images/background/bg8.jpg";

const Blog = () => {
  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <HeaderSection image={bg} shaded title="Blog" subtitle="Stay up to date on our latest activities" /> 
        <Section>
          <BlogRoll />
        </Section>
        <DonateSection />
      </Layout>
    </>
  );
};

export default Blog;

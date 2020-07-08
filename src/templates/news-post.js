import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import { HTMLContent } from "components/Content";
import Section from "components/Section";

export const NewsPostTemplate = ({
  content,
  contentComponent,
  title,
  date,
  description,
  source
}) => {
  return <Section>{title}</Section>;
};

NewsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string
};

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <>
      <Helmet>
        <title>{`${post.frontmatter.title}`}</title>
      </Helmet>
      <Layout>
        <NewsPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          description={post.frontmatter.description}
          source={post.frontmatter.source}
        />
      </Layout>
    </>
  );
};

NewsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default NewsPost;

export const newsPostQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date
        description
        source
      }
    }
  }
`;

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import { HTMLContent } from "components/Content";
import Section from "components/Section";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  date,
  description,
  tags
}) => {
  return (
    <Section>
      {title} {date} {description}
    </Section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <>
      <Helmet>
        <title>{`${post.frontmatter.title}`}</title>
      </Helmet>
      <Layout>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          description={post.frontmatter.description}
          tags={post.frontmatter.tags}
        />
      </Layout>
    </>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const blogPostQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date
        description
        tags
      }
    }
  }
`;

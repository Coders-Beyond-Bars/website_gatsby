import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { graphql, Link } from "gatsby";

import { Typography, Container, Grid, Chip, Divider } from "@material-ui/core";

import Section from "components/Section";
import SEO from "components/SEO";
import Layout from "components/Layout";
import Content, { HTMLContent } from "components/Content";

import makeStyles from "assets/jss/templates/blog-post";

const NewsPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  featuredImage,
}) => {
  const PostContent = contentComponent || Content;
  const classes = makeStyles();

  return (
    <div id="news-post">
      <Section halfScreen vcenter shaded image={featuredImage}>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={7}>
              <Typography variant="h4" gutterBottom>
                {title}
              </Typography>
              <div>
                <Typography
                  variant="body1"
                  style={{
                    display: "inline",
                  }}
                >
                  {date}
                </Typography>
              </div>
              <br />
              <Typography variant="body1">{description}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section id="news-content">
        <PostContent content={content} />
      </Section>
      <Section id="topics">
        <Typography variant="h5" gutterBottom>
          Topics
        </Typography>
        <Divider varient="inset" light />
        <div className={classes.tags}>
          {tags.map((tag, key) => (
            <Chip
              key={key}
              label={tag}
              size="small"
              className={classes.tag}
              component={Link}
              to={`/blog/tags/${_.kebabCase(tag)}`}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

NewsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  featuredImage: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { title } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO
        title={`News: ${post.frontmatter.title} | ${title}`}
        description={post.frontmatter.description}
      />
      <NewsPostTemplate
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        featuredImage={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
      />
    </Layout>
  );
};

export { NewsPostTemplate };
export default NewsPost;

export const pageQuery = graphql`
  query NewsPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        featuredimage
        description
        tags
      }
    }
  }
`;

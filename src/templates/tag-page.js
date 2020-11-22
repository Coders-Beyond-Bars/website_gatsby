import React, { Component } from "react";
import { graphql } from "gatsby";

import { Grid } from "@material-ui/core";

import Section from "components/Section";
import Layout from "components/Layout";
import BlogPostCard from "components/BlogPostCard";
import SEO from "components/SEO";

import HeaderSection from "sections/HeaderSection";
import bg from "assets/images/background/bg2.jpg";

class TagPage extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const { tag } = this.props.pageContext;
    const { title } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <SEO title={`Blog: ${tag} | ${title}`} />
        <HeaderSection image={bg} shaded title={`Topic: ${tag}`} />
        <Section>
          <Grid container spacing={2}>
            {posts.map((post) => {
              const { id } = post.node;
              const {
                title,
                date,
                author,
                featuredimage,
                description,
                tags,
              } = post.node.frontmatter;
              const { slug } = post.node.fields;
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <BlogPostCard
                    key={id}
                    title={title}
                    date={date}
                    author={author}
                    image={featuredimage}
                    description={description}
                    tags={tags}
                    link={slug}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Section>
      </Layout>
    );
  }
}

export default TagPage;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
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
    }
  }
`;

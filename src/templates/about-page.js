import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import LeftAboutMenu from '../components/LeftAboutMenu';
import Content, { HTMLContent } from '../components/Content';


export const AboutPageTemplate = ({ title, slug, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="markdown">
      <PageContent className={`content content-${slug}`} content={content} />
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Container>
        <Row>
          <Col lg={2}>
            <LeftAboutMenu />
          </Col>
          <Col lg={10}>
            <h2 className="page-title">{post.frontmatter.title}</h2>
            <AboutPageTemplate
              contentComponent={HTMLContent}
              title={post.frontmatter.title}
              slug={post.frontmatter.slug}
              content={post.html}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;


export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
        slug
      }
    }
  }
`;

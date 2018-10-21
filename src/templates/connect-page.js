import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';


export const ConnectPageTemplate = ({ title, slug, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="markdown">
      <PageContent className={`content content-${slug}`} content={content} />
    </section>
  );
};

ConnectPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};


const ConnectPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{size: 8, offset:2}}>
            <h2 className="page-title">{post.frontmatter.title}</h2>
            <ConnectPageTemplate
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

ConnectPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ConnectPage;


export const connectPageQuery = graphql`
  query ConnectPage($id: String!) {
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

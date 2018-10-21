import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import LeftWorkMenu from '../components/LeftWorkMenu';
import Content, { HTMLContent } from '../components/Content';


export const WorkPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="markdown">
      <PageContent className="content" content={content} />
    </section>
  );
};

WorkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};


const WorkPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Container>
        <Row>
          <Col lg={2} xl={2}>
            <LeftWorkMenu />
          </Col>
          <Col lg={8} xl={8}>
            <h2 className="page-title">{post.frontmatter.title}</h2>
            <WorkPageTemplate
              contentComponent={HTMLContent}
              title={post.frontmatter.title}
              content={post.html}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

WorkPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkPage;


export const workPageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;

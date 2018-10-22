import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Layout from './Layout';
import LeftAboutMenu from './LeftAboutMenu';


const AboutLayout = ({ children }) => (
  <Layout>
    <Container>
      <Row>
        <Col lg={2}>
          <LeftAboutMenu />
        </Col>
        <Col lg={10}>
          {children}
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default AboutLayout;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from './Layout';
import LeftWorkMenu from './LeftWorkMenu';


const ActivitiesLayout = ({ children }) => (
  <Layout>
    <Container>
      <Row>
        <Col lg={2}>
          <LeftWorkMenu />
        </Col>
        <Col lg={10}>
          {children}
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default ActivitiesLayout;

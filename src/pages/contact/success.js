import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../../components/Layout';


const Success = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col lg={{size: 8, offset: 2}}>
            <h2 className="page-title">Contact Us</h2>
            <h4>Success!</h4>
            <p>Thank you for contacting us!
              Return back <Link to="/" className="text-red">Home</Link>.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Success;

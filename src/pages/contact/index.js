import React, { Component } from 'react'
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col
} from 'reactstrap';
import Layout from '../../components/Layout';


class Contact extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <h2 className="section-title">Contact Us</h2>
          <Row>
            <Col lg={{size: 6, offset: 3}} >
              <Form>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your E-mail"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="message"
                    placeholder="Message"
                    rows={5}
                  />
                </FormGroup>
                <FormGroup>
                  <Button className="float-right" size="lg" block>Send</Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
};

export default Contact;

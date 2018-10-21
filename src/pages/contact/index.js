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
          <Row>
            <Col lg={{size: 8, offset: 2}}>
              <h2 className="page-title">Contact Us</h2>
              <p>
                Whether you are looking to volunteer with us as a mentor, to
                learn more about our organization, or to just share us your
                thoughts, we want to hear from you!</p>
              <Row>
                <Col lg={{size: 8, offset: 2}} >
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
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
};

export default Contact;

import React from 'react';
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


const Contact = () => {
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
                    <Form
                      action="/contact/success/"
                       name="contact"
                       method="post"
                       data-netlify="true"
                       data-netlify-honeypot="bot-field"
                    >
                      <Input type="hidden" name="bot-field" />
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
                        <Button
                          type="submit"
                          className="float-right"
                          size="lg"
                          block
                        >
                            Send
                        </Button>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Layout>
      );
};

// class Contact extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       name: '',
//       subject: '',
//       message: '',
//       hidden: true
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSumbit = this.handleSumbit.bind(this);
//   }
//
//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }
//
//   handleSumbit(e) {
//     e.preventDefault();
//
//     axios({
//       url: "/",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       data: qs.stringify({
//         "form-name": "contact",
//         ...this.state
//       })
//     })
//     .then((data) => console.log(data))
//     .catch(err => console.log(err));
//
//     Object.keys(this.state).forEach((key,index) => {
//       if (typeof(this.state[key]) === "string") {
//         this.setState({
//           [key]: ''
//         });
//       }
//
//       if (this.state.hidden) {
//         this.setState({
//           hidden: false
//         });
//       }
//     });
//   }
//
//   render() {
//     return (
//       <Layout>
//         <Container>
//           <Row>
//             <Col lg={{size: 8, offset: 2}}>
//               <h2 className="page-title">Contact Us</h2>
//               <p>
//                 Whether you are looking to volunteer with us as a mentor, to
//                 learn more about our organization, or to just share us your
//                 thoughts, we want to hear from you!</p>
//               <Row>
//                 <Col lg={{size: 8, offset: 2}} >
//                   <Form onSubmit={this.handleSumbit}>
//                     <FormGroup>
//                       <Input
//                         type="email"
//                         name="email"
//                         placeholder="Your E-mail"
//                         value={this.state.email}
//                         onChange={this.handleChange}
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Input
//                         type="text"
//                         name="subject"
//                         placeholder="Subject"
//                         value={this.state.subject}
//                         onChange={this.handleChange}
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Input
//                         type="textarea"
//                         name="message"
//                         placeholder="Message"
//                         rows={5}
//                         value={this.state.message}
//                         onChange={this.handleChange}
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Button
//                         type="submit"
//                         className="float-right"
//                         size="lg"
//                         block
//                       >
//                           Send
//                       </Button>
//                     </FormGroup>
//                     <p hidden={this.state.hidden}>
//                       Thank you.  Your message has been submitted.  We will
//                       contact you shortly.
//                     </p>
//                   </Form>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </Layout>
//     );
//   }
// };

export default Contact;

import React, { Component } from 'react';
import { Link } from 'gatsby';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../../components/Layout';

import share from '../../img/connect/share.png';
import mentor from '../../img/connect/mentor.png';
import sponsor from '../../img/connect/sponsorship.png';


class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: null
    }
  }
  render() {
    return (
      <Layout>
        <Container>
          <h2 className="page-title">Get Involved</h2>
          <p>
            Mass incarceration affects not only those who are criminalized by the system, but impacts society as a whole when we prioritize punishment over rehabilitation. We believe every person has the ability to make a difference, the potential to be respectable citizens pursuing meaningful and high-growth careers, and the ability to be role models to the youth they influence. If our vision resonates with you, here is your chance to get involved in some exciting and meaningful work with Coders Beyond Bars!
          </p>
          <Row className="getInvolved">
            <Col md={4} className="getInvolved-section">
              <Card>
                <CardBody>
                  <CardTitle>
                    <FontAwesomeIcon className="text-yellow" icon="people-carry" size="2x" />
                     <span className="text-gray"> Mentor</span>
                  </CardTitle>
                </CardBody>
                <CardImg src={mentor} alt="mentor" />
                <CardBody>
                  <CardText>From curriculum design, facilitating sessions, post-release support, and partnering with corporations and prison facilities, it takes a lot to get a program like this off the ground in a meaningful way. If you are able to contribute to one of these strands, fill out our <Link to="/contact/" className="text-red">contact form</Link> and get in touch! </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="getInvolved-section">
              <Card>
                <CardBody>
                  <CardTitle>
                    <FontAwesomeIcon className="text-yellow" icon="hand-holding-usd" size="2x" />
                    <span className="text-gray"> Support</span>
                  </CardTitle>
                </CardBody>
                <CardImg src={sponsor} alt="Sponsor" />
                <CardBody>
                  <CardText>We are a young organization that is currently sustained on our members working on a voluntary basis. As we grow, we are eager to add new members, better infrastructure and the latest resources to be able to give our students the best educational experience possible. To support us financially, please connect with us by filling out the <Link to="/contact/" className="text-red">contact form</Link>.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="getInvolved-section">
              <Card>
                <CardBody>
                  <CardTitle>
                    <FontAwesomeIcon className="text-yellow" icon="share-alt" size="2x" />
                     <span className="text-gray"> Share</span>
                  </CardTitle>
                </CardBody>
                <CardImg src={share} alt="Share" />
                <CardBody>
                  <CardText>Being an advocate for the work we do goes a long way. You can support the work we do by talking about CBB to others in-person or through social media. Follow us on <a href="https://www.facebook.com/codersbeyondbars/" className="text-red">Facebook</a>, <a href="https://medium.com/coders-beyond-bars" className="text-red">Medium</a> and <a href="https://www.linkedin.com/company/coders-beyond-bars/" className="text-red">LinkedIn</a>, engage in conversations with us, and spread the word!</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
};

export default Connect;

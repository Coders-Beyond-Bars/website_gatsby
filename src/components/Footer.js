import React from 'react';
import {
  Container,
  Row,
  Col,
  Nav,
  NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TEJI from '../img/partners/teji.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <Container>
          <Row>
            <Col lg={9} className="contact-info">
              <h4>Coders Beyond Bars</h4>
              <img src={TEJI} alt="TEJI" />
              <h6>
                The Educational Justice Institute
              </h6>
             <h6 className="text-gray">
                Massachusetts Institute of Technology
              </h6>
              <p className="text-gray">
                77 Massachusetts Ave. <br/>
                Building 24, Rm 612<br/>
                Cambridge, MA 02139
              </p>
              <p>
                <a href="mailto:info.codersbeyondbars.org">
                  info@codersbeyondbars.org
                </a>
              </p>
            </Col>
            <Col lg={3} className="social-media">
              <h5>Follow Us</h5>
              <Nav>
                <NavLink href="https://www.facebook.com/codersbeyondbars/" className="social-media-item">
                  <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                </NavLink>
                <NavLink href="https://www.linkedin.com/company/coders-beyond-bars/" className="social-media-item">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                </NavLink>
                <NavLink href="https://medium.com/coders-beyond-bars" className="social-media-item">
                  <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
                </NavLink>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
        <Container>
          <span>Copyright &copy; Coders Beyond Bars 2018</span>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

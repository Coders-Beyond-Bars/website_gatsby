import React from 'react';
import { Container } from 'reactstrap';
import LayoutAbout from '../../components/LayoutAbout';

import teji from '../../img/partners/teji.png';
import peteyGreene from '../../img/partners/petey-greene.jpg';
import tsn from '../../img/partners/tsn.png';

const Partners = () => {
  return (
    <LayoutAbout>
      <Container>
        <div>
          <h2 className="page-title">Academic and Community Partners</h2>
          <div className="partners">
            <a href="http://teji.mit.edu/">
              <img
                src={teji}
                alt="The Educational Justice Institute"
                className="img-fluid mx-auto partners-img" />
            </a>
            <a href="http://www.peteygreene.org/">
              <img
                src={peteyGreene}
                alt="Petey Greene Program"
                className="img-fluid mx-auto partners-img" />
            </a>
            <a href="https://www.timothysmithnetwork.org/">
              <img
                src={tsn}
                alt="Timothy Smith Network"
                className="img-fluid mx-auto partners-img" />
            </a>
          </div>
        </div>
      </Container>  
    </LayoutAbout>
  );
};

export default Partners;

import React from 'react';
import { Link } from 'gatsby';
import {
  Row,
  Col
} from 'reactstrap';
import LayoutActivities from '../../components/LayoutActivities';

import BPRC from '../../img/facilities/bprc.png';
import Southbay from '../../img/facilities/southbay_house.png';
import YouthCenter from '../../img/facilities/youth_center.png';



const HostSites = () => (
  <LayoutActivities>
    <div>
      <h2 className="page-title">Host Sites</h2>
      <p>
        We are expanding our relationship with correctional facilities in Massachusetts and broader New England region.  If you are a staff or an educator inside a correctional facility, and you wish to bring
        one of our programs to your location, please <Link to="/contact/" className="text-red"> contact us</Link> and we can discuss how we can collaborate to make this a reality.
      </p>
      <div id="host-sites">
        <div className="host-site" id="BPRC">
        <Row>
          <Col lg={3} className="host-site-photo">
            <img src={BPRC} alt="Boston Pre-release Center" className="host-site-photo-img" />
          </Col>
          <Col lg={9} className="host-site-description">
            <h6 className="host-site-name">Boston Pre-release Center</h6>
            <p>
              430 Canterbury Street <br />
              Roslindale, MA 02131
            </p>
          </Col>
        </Row>
        </div>
        <div className="host-site" id="Southbay">
          <Row>
            <Col lg={3} className="host-site-photo">
              <img src={Southbay} alt="South Bay House of Corrections" className="host-site-photo-img" />
            </Col>
            <Col lg={9} className="host-site-description">
              <h6 className="host-site-name">South Bay House of Correction</h6>
              <p>
                20 Bradston Street <br />
                Boston, MA 02118
              </p>
            </Col>
          </Row>
        </div>
        <div className="host-site" id="YouthCenter">
          <Row>
            <Col lg={3} className="host-site-photo">
              <img src={YouthCenter} alt="Judge Connelley Yout" className="host-site-photo-img" />
            </Col>
            <Col lg={9} className="host-site-description">
              <h6 className="host-site-name">Judge John J. Connelly Youth Center</h6>
              <p>
                450 Canterbury Street<br />
                Roslindale, MA 02131
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </LayoutActivities>
);

export default HostSites;

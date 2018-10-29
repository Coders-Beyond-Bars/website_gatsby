import React, { Component } from 'react';
import {
  Row,
  Col,
  Collapse
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LayoutAbout from '../../components/LayoutAbout';


import richard from '../../img/team/richard.jpg';
import anjali from '../../img/team/anjali.jpg';
import carole from '../../img/advisors/carole.jpg';
import lee from '../../img/advisors/lee.jpg';
import pavlos from '../../img/advisors/pavlos.jpg';


class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      richard: false,
      anjali: false,
      carole: false,
      lee: false,
      pavlos: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const name = e.currentTarget.id;
    this.setState({
      [name]: !this.state[name]
    });
  }

  render() {
    return (
      <LayoutAbout>
        <div>
          <h2 className="page-title">The CBB Team</h2>
          <div className="team" id="executive-team">
            <h4 className="team-title">Executive Team</h4>
            <Row className="profile" id="RichardKim">
              <Col lg={3} className="mx-auto">
                <img src={richard} alt="Richard Kim" className="profile-photo" />
              </Col>
              <Col lg={9} className="profile-description">
                <div>
                  <a
                    className="float-right"
                    href="#"
                    id="richard"
                    onClick={e => this.handleClick(e)}
                  >
                    {this.state.richard ?
                      <FontAwesomeIcon icon="minus-circle" size="2x" /> :
                      <FontAwesomeIcon icon="plus-circle" size="2x" />}
                  </a>
                  <h5 className="profile-name">Richard Kim</h5>
                  <p className="profile-title">Co-Founder & Chief Executive Officer</p>
                </div>
                <Collapse isOpen={this.state.richard}>
                  <p>
                    Richard earned his master's in Media Arts and Sciences from the Media Lab, Massachusetts Institute of Technology where he specialized in research in artificial intelligence, machine ethics, and computational social science.  Prior to coming back to graduate school, Richard worked in the financial services industry in Tokyo, Japan and Los Angeles, California for approximately six years.  He obtained his Chartered Financial Analyst certification.
                  </p>
                  <p>
                    Coming back to graduate school, Richard redirected his career focus to applied mathematics and computer science.  He completed his master’s in Information Technology with emphasis in Mathematics and Computation at Harvard University's Extension School.  As a graduate student, Richard taught five courses in computer science and applied mathematics as a teaching fellow. Subsequently, he enrolled in MIT Media Lab to pursue his doctorate.
                  </p>
                  <p>
                    While at MIT, he volunteered to teach mathematics to incarcerated students at a correctional facility through the Petey Greene program.  Through this experience, Richard was inspired to teach computer programming to incarcerated individuals.  Finding no appropriate channels to make this a reality, Richard decided to launch Coders Beyond Bars in collaboration with Anjali Moorthy, a fellow Petey Greene program volunteer.
                  </p>
                </Collapse>
              </Col>
            </Row>
            <Row className="profile" id="AnjaliMoorthy">
              <Col lg={3}>
                <img src={anjali} alt="Anjali Moorthy" className="profile-photo" />
              </Col>
              <Col lg={9} className="profile-description">
                <div>
                  <a
                    className="float-right"
                    href="#"
                    id="anjali"
                    onClick={e => this.handleClick(e)}
                  >
                    {this.state.anjali ?
                      <FontAwesomeIcon icon="minus-circle" size="2x" /> :
                      <FontAwesomeIcon icon="plus-circle" size="2x" />}
                  </a>
                  <h5 className="profile-name">Anjali Moorthy</h5>
                  <p className="profile-title">Co-Founder & Executive Director</p>
                </div>
                <Collapse isOpen={this.state.anjali}>
                  <p>
                    Educator by profession and polymath by nature, Anjali earned her master's from the Harvard Graduate School of Education with a focus on Creative/Constructionist Learning, Social Entrepreneurship, and Instructional Design.  Before attending grad school, Anjali was a Corps Member at Teach for India, where she worked as an educator and mentor to 200 at-risk adolescents, and then as a founder teacher in a charter secondary school. In those roles, she worked on experiential learning, student leadership, social-emotional learning, teacher training, and community engagement.
                  </p>
                  <p>
                    She believes that education sits at the root of the solutions to most global issues like poverty, and it has the power to catalyze a change in the trajectory of one's life if done right. Her focus is on working with at-risk youth and understanding what education needs to look like to ensure their self-sufficiency, agency, and success in the economy and society.
                  </p>
                  <p>
                    While at Harvard, she also volunteered through the Petey Greene program as a Teaching Assistant in a medium security men's correctional facility in Massachusetts. During this time, the students at the facility left a strong impression on her with their passion for learning, grasp of concepts, openness to challenges, and desire to make a change. This experience led her on the path of the criminal justice movement, and using education as a tool to break the cycle of recidivism.
                  </p>
                </Collapse>
              </Col>
            </Row>
          </div>
          <div className="team" id="board-members">
            <h4 className="team-title">Board Members</h4>
            <Row className="profile">
              <Col lg={3}>
                <img src={carole} alt="Carole Cafferty" className="profile-photo" />
              </Col>
              <Col lg={9} className="profile-description">
                <div>
                  <a
                    className="float-right"
                    href="#"
                    id="carole"
                    onClick={e => this.handleClick(e)}
                  >
                    {this.state.carole ?
                      <FontAwesomeIcon icon="minus-circle" size="2x" /> :
                      <FontAwesomeIcon icon="plus-circle" size="2x" />}
                  </a>
                  <h5 className="profile-name">Carole Cafferty</h5>
                  <p className="profile-title">
                    Co-Director of The Educational Justice Institute at MIT
                  </p>
                </div>
                <Collapse isOpen={this.state.carole}>
                  <p>
                    With over 25 years of experience of working inside correctional facilities, most recently serving as Superintendent of the Middlesex Jail and House of Correction in Massachusetts, Carole Cafferty is a leader in the corrections field who has worked to equip disenfranchised women and women with the tools necessary to redefine their identity and reach their potential.  Carole has designed programs including suicide prevent program; specialized housing unit designed for unique needs such as substance use treatment; literacy and digital literacy through tablet-based learning; post-secondary prison education programs; among many other programs that have empowered incarcerated people through education.  She is a graduate of St. Anselm College and holds a master’s degree in Correctional Administration from the University of Massachusetts Lowell, where she teaches in the School of Criminology and Justice Studies.  Carole was presented with U.Mass Lowell’s Adjunct Faculty of the Year Award in 2018.
                  </p>
                </Collapse>
              </Col>
            </Row>
            <Row className="profile">
              <Col lg={3}>
                <img src={lee} alt="Lee Perlman" className="profile-photo" />
              </Col>
              <Col lg={9} className="profile-description">
                <div>
                  <a
                    className="float-right"
                    href="#"
                    id="lee"
                    onClick={e => this.handleClick(e)}
                  >
                    {this.state.lee ?
                      <FontAwesomeIcon icon="minus-circle" size="2x" /> :
                      <FontAwesomeIcon icon="plus-circle" size="2x" />}
                  </a>
                  <h5 className="profile-name">Lee Perlman</h5>
                  <p className="profile-title">
                    Co-Director of The Educational Justice Institute at MIT
                  </p>
                </div>
                <Collapse isOpen={this.state.lee}>
                  <p>
                    Lee Perlman earned his B.A. from St. John’s College (Annapolis), and then pursued graduate work in philosophy at the Catholic University of America. He completed an M.A. in political philosophy at Georgetown University.  Before earning his Ph.D. at the Massachusetts Institute of Technology, Lee spent eight years working in the political arena as a public interest lobbyist and political organizer.  In 1978 Baltimore Magazine named him ‘the most feared lobbyist in Maryland’.  He has taught at Harvard University, Brown University, Swarthmore College, Phillips Academy (Andover), and, for the past 20 years, at MIT.  Among these are his current courses “Ancient Greek Mathematics and Philosophy” and a course jointly listed in the Philosophy Department, “A Philosophical History of Energy.” His other signature course is Philosophy of Love.  He has twice been awarded the Irwin Sizer Award for Most Significant Improvement to MIT Education (1997, 2015). Lee is also a composer and musician, and the Music Director of the Deborah Abel Dance Company, which has toured in the US and India.
                  </p>
                </Collapse>
              </Col>
            </Row>
          </div>
          <div className="team" id="advisory-council">
            <h4 className="team-title">Advisory Council</h4>
            <Row className="profile">
              <Col lg={3}>
                <img src={pavlos} alt="Pavlos Protopapas" className="profile-photo" />
              </Col>
              <Col lg={9} className="profile-description">
                <div>
                  <a
                    className="float-right"
                    href="#"
                    id="pavlos"
                    onClick={e => this.handleClick(e)}
                  >
                    {this.state.pavlos ?
                      <FontAwesomeIcon icon="minus-circle" size="2x" /> :
                      <FontAwesomeIcon icon="plus-circle" size="2x" />}
                  </a>
                  <h5 className="profile-name">Pavlos Protopapas</h5>
                  <p className="profile-title">
                    Scientific Program Director of Harvard Institute for Applied Computational Science
                  </p>
                </div>
                <Collapse isOpen={this.state.pavlos}>
                  <p>
                    Pavlos Protopapas received his PhD in theoretical physics from the University of Pennsylvania. While at Penn he served as the associate director of the National Scalable Cluster Project (NSCP), one of the initial attempts at large-scale distributed computing on a grid-like model. An active collaborator and mentor in the astrostatistics research community, Pavlos holds a research appointment at the Harvard-Smithsonian Center for Astrophysics and also served as senior scientist/project leader for the Time Series Center, a project launched by the Harvard Initiative in Innovative Computing.  His research interests lie in planetary transits, the outer solar system, photometric variability, microlensing; in computer science he is interested in large databases and data mining in astronomy, with emphasis on feature extraction, anomaly detection, and similarity searches in time series.  At IACS he teaches and advises students as a Lecturer in Computational Science.
                  </p>
                </Collapse>
              </Col>
            </Row>
          </div>
        </div>
      </LayoutAbout>
    );
  }
};

export default Team;

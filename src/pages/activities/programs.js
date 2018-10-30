import React, { Component } from 'react';
import { Container } from 'reactstrap';
import LayoutActivities from '../../components/LayoutActivities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import web from '../../img/programs/web.png';
import databases from '../../img/programs/databases.png';
import scratch from '../../img/programs/scratch.png';


class Programs extends Component {
  render() {
    return (
      <LayoutActivities>
        <Container>
            <h2 className="page-title">Programs</h2>
            <div className="programs">
            <div className="programs-item" id="WebDevelopment">
              <h5 className="programs-title text-red">Web Development using HTML, CSS, and Javascript</h5>
              <div>
                <img src={web} alt="web" className="programs-image mx-auto"/>
              </div>
              <div className="programs-description">
                <p>
                  Since the advancement of the Internet, web applications, computer programs that run in a web browser such as online auctions, forums, shopping malls have become a dominant mode of production for engineers.  In this 24 weeks program, our students will study fundamental skills in
                  web development using HTML, CSS, JavaScript, and other related technologies.
                </p>
                <div className="programs-icons text-light-gray">
                  <div>
                    <p className="text-center">
                      <FontAwesomeIcon icon={['fab', 'html5']} size="6x"/>
                    </p>
                    <p className="text-center">HTML5</p>
                  </div>
                  <div>
                    <p className="text-center">
                      <FontAwesomeIcon icon={['fab', 'css3']} size="6x"/>
                    </p>
                    <p className="text-center">CSS3</p>
                  </div>
                  <div>
                    <p className="text-center">
                      <FontAwesomeIcon icon={['fab', 'js']} size="6x"/>
                    </p>
                    <p className="text-center">Javascript</p>
                  </div>
                  <div>
                    <p className="text-center">
                      <FontAwesomeIcon icon={['fab', 'sass']} size="6x"/>
                    </p>
                    <p className="text-center">Sass</p>
                  </div>
                  <div>
                    <p className="text-center">
                      <FontAwesomeIcon icon={['fab', 'react']} size="6x"/>
                    </p>
                    <p className="text-center">React</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="programs-item"  id="DataScience">
              <h5 className="programs-title text-red">Databases and Data Analytics with Python and SQL</h5>
              <div>
                <img src={databases} alt="databases" className="programs-image mx-auto" />
              </div>
              <div className="programs-description">
                <p>
                  Concepts such as “Big Data”, “Data Science”, and
                  "Artificial Intelligence" have extended its reach beyond academia to
                  become major business drivers in the technology
                  sector including bio-medical research, finance, and
                  logistics. In this program, students will spend 24 weeks to
                  learn the fundamental concepts in computer programming and databases
                  using Python and SQL.
                </p>
                <div className="programs-icons text-light-gray">
                  <div>
                    <p className="text-center"><FontAwesomeIcon icon={['fab', 'python']} size="6x"/></p>
                    <p className="text-center">Python</p>
                  </div>
                  <div>
                    <p className="text-center"><FontAwesomeIcon icon='database' size="6x"/></p>
                    <p className="text-center">SQL</p>
                  </div>
                  <div>
                    <p className="text-center"><FontAwesomeIcon icon='table' size="6x"/></p>
                    <p className="text-center">Pandas</p>
                  </div>
                  <div>
                    <p className="text-center"><FontAwesomeIcon icon='chart-bar' size="6x" /></p>
                    <p className="text-center">Matplotlib</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="programs-item"  id="Scratch">
              <h5 className="programs-title text-red">Video Game Development with Scratch</h5>
              <div>
                <img src={scratch} alt="scratch" className="programs-image mx-auto" />
              </div>
              <div className="programs-description">
                <p>
                  In this ten week program, students learn elementary concepts in computer programming  through creation of interactive video games.  At the end of the course, students will plan, design, and implement video game of their own design.  The aim of this program is to not only teach basic concepts in computer programming but also encourage students into furthering their education in STEM  by pursuing college degrees in those fields.
                </p>
                <div className="programs-icons text-light-gray">
                  <div>
                    <p className="text-center"><FontAwesomeIcon icon='gamepad' size="6x"/></p>
                    <p className="text-center">Video Game Development</p>
                  </div>
                  <div>
                    <p className="text-center"><FontAwesomeIcon icon='laptop-code' size="6x" /></p>
                    <p className="text-center">Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </LayoutActivities>
    );
  }
};

export default Programs;

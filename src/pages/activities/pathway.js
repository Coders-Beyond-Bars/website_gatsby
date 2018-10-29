import React from 'react';
import { Row, Col } from 'reactstrap';
import LayoutActivities from '../../components/LayoutActivities';

import courses from '../../img/solution/courses.png';
import projects from '../../img/solution/projects.png';
import reentry from '../../img/solution/reentry.png';
import internship from '../../img/solution/internship.png';
import mentorship from '../../img/solution/mentorship.png';
import community from '../../img/solution/community.png';


const Pathway = () => (
  <LayoutActivities>
    <div>
      <h2 className="page-title">The Pathway</h2>
      <p>We do not just offer courses inside correctional facilities.  The Pathway is a six step, holistic process of education and transformation.</p>
      <div className="pathway">
        <Row className="pathway-item">
          <Col md={3}>
            <img src={courses}
              alt="courses"
              className="img-fluid pathway-img mx-auto"/>
          </Col>
          <Col md={9}>
            <h5 className="text-yellow">Coding Classes</h5>
            <p>
              The root of our solutions begins with education. Our courses range from foundational introductions in programming to industry-standard, university-accredited courses in high-tech skills such as Data Science, Web Development, UX/UI Design, and Database Management. The courses offered are ever-evolving, created in partnership with experts and practitioners, and are taught by instructors with proven track record of professional and pedagogical experience.
            </p>
          </Col>
        </Row>
        <Row className="pathway-item">
          <Col md={{ size: 3, order: 2}}>
            <img
              src={projects}
              alt="projects"
              className="img-fluid pathway-img mx-auto"/>
          </Col>
          <Col md={{ size: 9, order: 1}}>
            <h5 className="text-yellow">Real-world Projects</h5>
            <p>
              We believe that education needs to stop being isolated from the real world. In collaboration with local technology companies and content & pedagogy experts, we design our courses with relevant tasks that are reflective of the context in which they are used. These projects enable our students to build up their professional portfolio of projects to showcase their talent to prospective employers in the tech industry.
            </p>
          </Col>
        </Row>
        <Row className="pathway-item">
          <Col md={3}>
            <img
              src={reentry}
              alt="projects"
              className="img-fluid pathway-img mx-auto"/>
          </Col>
          <Col md={9}>
            <h5 className="text-yellow">Re-entry Transition</h5>
            <p>
              We recognise that our students will face challenges much more adverse than a STEM education can overcome. To help our students tackle the unique challenges they are faced with, we collaborate with service providers who are grounded in the context of our students, and work actively towards building a holistic network that can support our students prepare for successful re-entry and transition into society.
            </p>
          </Col>
        </Row>
        <Row className="pathway-item">
          <Col md={{ size: 3, order: 2}}>
            <img
              src={internship}
              alt="internship"
              className="img-fluid pathway-img mx-auto"/>
          </Col>
          <Col md={{ size: 9, order: 1}}>
            <h5 className="text-yellow">Internships</h5>
            <p>
              Research and experience has proved time and again that one of the largest obstacles individuals face post-release is gainful employment. Landing a job allows individuals to remain financially independent, earn respect in their communities and focus on self-growth and a sense of purpose. Through collaboration with our member companies, we work to offer full-time, paid internships to our students upon their release. This enables the students to continue their education through on-the-job training and relieve them of the pressure to find employment after being released from correctional facilities.
            </p>
          </Col>
        </Row>
        <Row className="pathway-item">
          <Col md={3}>
            <img
              src={mentorship}
              alt="mentorship"
              className="img-fluid pathway-img mx-auto"/>
          </Col>
          <Col md={9}>
            <h5 className="text-yellow">Career Mentorship</h5>
            <p>
              We continuously engage our students even after their release and follow up on their careers and transition to life outside. We provide one-to-one counseling as well as group workshops on various topics including personal finance and entrepreneurship. We also partner with stakeholders to help our students prepare for career and life outside of correctional facilities by coaching them soft skills such as interview skills, resume writing, business ethics, etc. through one-to-one mentoring and group workshops.
            </p>
          </Col>
        </Row>
        <Row className="pathway-item">
          <Col md={{ size: 3, order: 2}}>
            <img
              src={community}
              alt="community"
              className="img-fluid pathway-img mx-auto"/>
          </Col>
          <Col md={{ size: 9, order: 1}}>
            <h5 className="text-yellow">Alumni Network</h5>
            <p>
              Our strong belief is that one of the most powerful drivers of humanity, purpose and belonging is community. Many of our students have faced years of being excluded from this very important component of living in a society. We strive to build a community of alumni that can support one another on their journeys post-release. We hold monthly coding nights where the alumni can come together and code together in a collaborative setting. We encourage collaboration and entrepreneurship through the alumni network.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  </LayoutActivities>
);

export default Pathway;

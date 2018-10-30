import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LayoutAbout from '../../components/LayoutAbout';

import cost from '../../img/challenges/cost.jpg';
import massIncarceration from '../../img/challenges/mass_incarceration.jpg';
import recidivism from '../../img/challenges/recidivism.jpg';
import unemployment from '../../img/challenges/unemployment.jpg';
import coding from '../../img/challenges/coding.jpg';
import shortage from '../../img/challenges/shortage.jpg';


const Challenges = () => {
  return (
    <LayoutAbout>
      <Container>
          <h2 className="page-title">Challenges</h2>
          <div className="challenges">
            <h5 className="text-red">Mass Incarceration and Recidivism</h5>
            <Row className="challenges-item">
              <Col md={3}>
                <img
                  src={massIncarceration}
                  alt="Mass Incarceration"
                  className="img-fluid mx-auto challenges-img" />
              </Col>
              <Col md={9}>
                <p>
                  "The United States has 5% of the world’s population but 25% of the world’s incarcerated population." <br />
                  -<em>The New Jim Crow: Mass Incarceration in the Age of Colorblindness</em>
                </p>
                <p>
                  Currently, there are over 2 million individuals behind bars in county jails, state prisons, and federal penitentiaries. To put this into another perspective, more than one in one-hundred adults between the ages of eighteen and sixty-five are behind bars in the US. This number does not even include many millions more who are on parole or probation and are still part of the correctional system.
                </p>
              </Col>
            </Row>
            <Row className="challenges-item">
              <Col md={{ size: 3, order: 2}}>
                <img
                  src={recidivism}
                  alt="Recidivism"
                  className="img-fluid mx-auto challenges-img" />
              </Col>
              <Col md={{ size: 9, order: 1}}>
                <p>
                  While multiple factors contribute to the high incarceration rate in the United States, this problems is exacerbated by high rate of recidivism for those who are released. Approximately 650,000 incarcerated individuals are released every year from state and federal correctional facilities. According to a research reported by the Department of Justice, <strong>67.8% of the former inmates were arrested against within 3 years of their release and 76.6% within 5 years.</strong>.
                </p>
              </Col>
            </Row>
            <Row className="challenges-item">
              <Col md={3}>
                <img
                  src={cost}
                  alt="Cost"
                  className="img-fluid mx-auto challenges-img" />
              </Col>
              <Col md={9}>
                <p>
                  In the U.S., mass incarceration is not only one of the largest humanitarian crises, it is also one that has severe economic consequences. According to a report published by the Pew Center in 2011, the growth in prison population in America came with a substantial cost, with annual State and Federal expenditures on corrections growing by 305% during past two decades, to the tune of $52 billion. If 10 states with the highest recidivism rates reduced their rates by 10%, they could save more than $470 million a year.
                </p>
              </Col>
            </Row>
            <Row className="challenges-item">
              <Col md={{ size: 3, order: 2}}>
                <img
                  src={unemployment}
                  alt="Unemployment"
                  className="img-fluid mx-auto challenges-img" />
              </Col>
              <Col md={{ size: 9, order: 1}}>
                <p>
                  Studies show that there is a powerful relationship between unemployment and recidivism among formerly incarcerated individuals. Locked out of gainful employment opportunities, many formerly incarcerated individuals fall back to substance abuse or engage in criminal activities. Up to 60% of formerly incarcerated individuals remain jobless a year after their release due to their criminal records and lack of employable skills.
                </p>
                <p>
                  Yet, according to a 2008 research report by the Urban Institute, individuals who made more than $10 an hour were half as likely to return to prison as those making less than $7 an hour. This is where the hope lies.
                </p>
              </Col>
            </Row>
            <h5 className="text-red">Automation and Coding</h5>
            <Row className="challenges-item">
              <Col md={3}>
                <img
                  src={shortage}
                  alt="Shortage"
                  className="img-fluid mx-auto challenges-img" />
              </Col>
              <Col md={9}>
                <p>
                  With automation and artificial intelligence threatening many traditional blue-collar jobs in the US, computer programming (or, coding) has surfaced as a new frontier in blue-collar work.  Based on August 2018 findings by LinkedIn, there is a <strong>nationwide shortage of 212,838 software engineers</strong>.  Within the high-tech industry, demand for skills in data analytics have surged in recent years with <strong>nationwide shortage of 151,717 talents who possess these skills</strong>.  In Boston, one of nation’s high-tech hubs along with San Francisco and New York City, this shortage is particularly acute at 11,276 jobs.
                </p>
              </Col>
            </Row>
            <Row className="challenges-item">
              <Col md={{ size: 3, order: 2}}>
                <img
                  src={coding}
                  alt="Coding"
                  className="img-fluid mx-auto challenges-img" />
              </Col>
              <Col md={{ size: 9, order: 1}}>
                <p>
                  In light of these shortage in technical talent in the US, coding bootcamps (aka career accelerators) have gained popularity among people who want to quickly bootstrap their knowledge in coding for entry-level positions in software development or data science.  Nevertheless, in spite of relative affordability compared to four-year university programs, these programs can be prohibitively expensive for many individuals in lower income communities.  For the incarcerated, resources such as coding bootcamps are both financially and physically inaccessible.
                </p>
              </Col>
            </Row>
          </div>
      </Container>
    </LayoutAbout>
  );
};

export default Challenges;

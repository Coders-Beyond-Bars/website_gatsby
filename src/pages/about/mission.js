import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LayoutAbout from '../../components/LayoutAbout';

import mission1 from '../../img/mission/mission1.jpg';
import mission2 from '../../img/mission/mission2.jpg';
import mission3 from '../../img/mission/mission3.jpg';

const Mission = () => {
  return (
    <LayoutAbout>
      <Container>
        <div>
          <h2 className="page-title">Our Mission</h2>
          <div className="mission">
            <div className="mission-statement mx-auto">
              <p>
                Empowering incarcerated individuals to transform their own lives by educating them in high-tech skills, preparing them for careers in high-tech industries and successful re-entry into society
              </p>
            </div>
            <p>
              Started as an initiative under <a href="http://teji.mit.edu/" className="text-red">The Educational Justice Institute at Massachusetts Institute of Technology</a>, <strong>Coders Beyond Bars, Inc. (CBB)</strong> is a not-for-profit organization in Massachusetts with the mission of providing incarcerated individuals the opportunity to learn coding and preparing them for successful entry into careers in high-tech industries.  Our mission is inspired by work of other non-profit organizations that provide coding education to incarcerated population such as
              <a href="https://thelastmile.org/" className="text-red"> The Last Mile</a> (California),
               <a href="https://www.un-loop.org/" className="text-red"> Un-loop</a> (Washington), and
              <a href="https://www.code4000.org/en" className="text-red"> Code4000</a> (UK).
            </p>
            <p>
              Coding has become a powerful, distinguishing skill in the 21st job market.  Those who possess the ability to read and write code enjoy the opportunities to participate in the new economy as producers of digital products and services while the other remain as its consumers.
            </p>
            <p>
              However, resources to acquire coding skills are far from broadly accessible across all communities.   Many incarcerated individuals are locked out, literally and figuratively, from educational resources to acquire coding skills.  Their families and communities that they are from also do not have the knowledge and the know-how to properly utilize affordable educational resources.  If educational opportunities in coding is not broadly accessible to more communities, including the incarcerated, then coding has the potential of becoming a polarizing force in income and wealth inequality.
            </p>
            <p>
              In light of this background, we place ourselves at the intersection of education, technology and criminal justice in order to open up access to communities that have historically been marginalized in these contexts.  While we do not advocate that everyone MUST code and pursue careers in the technology domain, we certainly believe everyone should have the opportunity to do so.
            </p>
            <h4 className="text-yellow text-center mission-moto">We Educate</h4>
            <img src={mission1} alt="Mission 1" className="mx-auto img-fluid mission-img" />
            <p>
              We offer educational programs to former and currently incarcerated individuals inside and outside correctional facilities. In addition to maintaining high standards of academic rigor, our courses emphasize practical skills that are highly in-demand. Continuously engaging with leaders in the tech industry, we update our curriculum in order to ensure that the skills we offer our students are reflective of the industry's demands.
            </p>
            <h4 className="text-yellow text-center mission-moto">We Connect</h4>
            <img src={mission2} alt="Mission 2" className="mx-auto img-fluid mission-img" />
            <p>
              We contribute to the building conversation around problems of mass incarceration in the United States, lack of diversity and inclusion in the tech industry, and importance of fostering a curiosity for STEM fields amongst marginalized communities. We act as a bridge between the leaders in the tech industry and those in the economically marginalized communities by connecting the tech industry with an alternative talent pool.
            </p>
            <h4 className="text-yellow text-center mission-moto">We Inspire</h4>
            <img src={mission3} alt="Mission 3" className="mx-auto img-fluid mission-img" />
            <p>
              Generational change is key to sustainability. We see our students standing as role models to youth in their communities, and hope to inspire the next generation of engineers, developers, and scientists. We also actively work with youth centers to offer educational programming and mentorship, guidance them to enroll in higher-ed. institutions to pursue degrees in Science, Technology, Engineering and Mathematics (STEM).
            </p>
          </div>
        </div>
      </Container>
    </LayoutAbout>
  );
};

export default Mission;

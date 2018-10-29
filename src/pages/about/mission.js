import React from 'react';
import LayoutAbout from '../../components/LayoutAbout';


const Mission = () => {
  return (
    <LayoutAbout>
      <div>
        <h2 className="page-title">Our Mission</h2>
        <div className="mission">
          <div className="mission-statement mx-auto">
            <p>
              Empowering incarcerated individuals to transform their own lives by educating them in high-tech skills, preparing them for careers in high-tech industries and successful re-entry into society
            </p>
          </div>
          <p>
            With our origin in <a href="http://teji.mit.edu/" className="text-red">The Educational Justice Institute at Massachusetts Institute of Technology</a>, <strong>Coders Beyond Bars, Inc. (CBB)</strong> is a not-for-profit organization in Massachusetts with the mission of providing incarcerated individuals the opportunity to learn coding and preparing them for successful entry into careers in high-tech industries.
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
          <p>
            We are educators.  We offer educational programs inside, and outside, correctional facilities for incarcerated individuals. Without sacrificing academic rigor, our courses emphasize practical skills that are highly in demand in the technology sector.  We continuously engage with technology leaders to update our curriculum in order to keep our students profiles competitive as prospective employees.
          </p>
          <h4 className="text-yellow text-center mission-moto">We Connect</h4>
          <p>
            We connect with leaders in the tech sector to inform them about the problems of mass incarceration in the United States, lack of diversity and inclusion in the tech industry, and importance of fostering the next generation of scientists and engineers. We act as a bridge between the leaders in the tech industry and those in the economically marginalized communities by connecting the tech industry with an alternative talent pool.
          </p>
          <h4 className="text-yellow text-center mission-moto">We Inspire</h4>
          <p>
            Our goal is to educate the next generation of engineers, developers, and scientists.  We work with youth centers (i.e. juvenile detention centers) to inspire the next generation of scientists and engineers.  Through educational programming and mentorship, we guide them to enroll in higher-ed. institutions to pursue degrees in Science, Technology, Engineering and Mathematics (STEM).
          </p>
        </div>
      </div>
    </LayoutAbout>
  );
};

export default Mission;

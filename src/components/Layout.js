import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.sass';


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Coders Beyond Bars" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;

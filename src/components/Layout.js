import React from 'react';
import Helmet from 'react-helmet';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.sass';

library.add(fab);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Coders Beyond Bars" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;

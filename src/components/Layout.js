import React from 'react';
import Helmet from 'react-helmet';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPlusCircle,
  faMinusCircle,
  faHandHoldingUsd,
  faShareAlt,
  faPeopleCarry,
  faDatabase,
  faChartBar,
  faTable,
  faGamepad,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.sass';

library.add(fab,
            faPlusCircle,
            faMinusCircle,
            faHandHoldingUsd,
            faShareAlt,
            faPeopleCarry,
            faDatabase,
            faChartBar,
            faTable,
            faGamepad,
            faLaptopCode
          );

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Coders Beyond Bars" />
    <Navbar />
    <main id="main">{children}</main>
    <Footer />
  </div>
);

export default TemplateWrapper;

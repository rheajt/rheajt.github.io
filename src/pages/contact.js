import React from 'react';

import { Layout, SEO } from 'components';
import Contact from '../containers/contact';

const ContactPage = () => (
  <Layout noBackground>
    <SEO title="Contact" />

    <Contact />
  </Layout>
);

export default ContactPage;

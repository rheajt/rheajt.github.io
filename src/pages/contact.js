import React from 'react';

import { Layout, SEO } from 'components';
import { About } from 'containers';

const ContactPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
);

export default ContactPage;

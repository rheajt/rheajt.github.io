import React from 'react';
import { Layout, SEO } from 'components';
import { About } from 'containers';

function AboutPage() {
  return (
    <Layout style={{ margin: 'auto' }}>
      <SEO title="Home" />
      <About />
    </Layout>
  );
}

export default AboutPage;

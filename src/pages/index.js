import { Layout, SEO } from 'components';
import { Welcome } from 'containers';
import React from 'react';

const IndexPage = () => (
  <Layout centered>
    <SEO title="Home" />
    <Welcome />
  </Layout>
);

export default IndexPage;

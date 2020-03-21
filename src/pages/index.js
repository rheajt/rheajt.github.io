import React from 'react';
import { Layout, SEO } from 'components';
import { Welcome } from 'containers';

const IndexPage = () => (
  <Layout centered>
    <SEO title="Home" />
    <Welcome />
  </Layout>
);

export default IndexPage;

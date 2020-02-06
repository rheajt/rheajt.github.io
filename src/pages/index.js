import React from 'react';
import { Layout, SEO } from 'components';
import { Welcome } from 'containers';

const IndexPage = () => (
  <Layout style={{ margin: 'auto' }}>
    <SEO title="Home" />
    <Welcome />
  </Layout>
);

export default IndexPage;

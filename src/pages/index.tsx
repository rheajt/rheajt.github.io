import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout title="Home">
    <SEO title="Home" />
    <h1>About page</h1>
  </Layout>
);

export default IndexPage;

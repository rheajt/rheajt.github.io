import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout title="Home">
    <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

import React from 'react';
import { Layout, SEO } from 'components';
import { Portfolio } from '../containers';

const PortfolioPage = () => (
  <Layout noBackground>
    <SEO title="Portfolio" />
    <Portfolio />
  </Layout>
);

export default PortfolioPage;

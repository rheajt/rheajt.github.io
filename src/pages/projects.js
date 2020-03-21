import React from 'react';
import { Layout, SEO } from 'components';
import { Portfolio } from 'containers';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Portfolio />
  </Layout>
);

export default ProjectsPage;

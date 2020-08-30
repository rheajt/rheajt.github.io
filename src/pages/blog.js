import React from 'react';
import { Layout, SEO } from 'components';
import { Blog } from '../containers';
// import { Welcome } from 'containers';

function BlogPage() {
  return (
    <Layout centered>
      <SEO title="Blog" />
      <Blog />
    </Layout>
  );
}

export default BlogPage;

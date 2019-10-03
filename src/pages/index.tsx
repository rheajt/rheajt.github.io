import React from 'react';

import Layout from '../layout';
import SEO from '../components/SEO';
import IFrame from '../components/IFrame';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <IFrame src="https://datastudio.google.com/embed/reporting/1doWmfgdgUulgIHIyMTo1R2lGHoFxHfMZ/page/tdk0" />
    </Layout>
  );
};

export default IndexPage;

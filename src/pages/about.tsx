import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import IFrame from '../components/IFrame';

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Layout>
      <SEO title="about" />
      <IFrame src="https://datastudio.google.com/embed/reporting/1doWmfgdgUulgIHIyMTo1R2lGHoFxHfMZ/page/tdk0" />
    </Layout>
  );
};

export default About;

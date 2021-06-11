import React from 'react';
import { Layout } from 'components';
//import useWindowSize from '../hooks/useWindowSize';

function PrivacyPolicyPage() {
  //const dimensions = useWindowSize();

  return (
    <Layout>
      <iframe
        title="contact-form"
        name="contact-form"
        width="100%"
        height={800}
        frameBorder="0"
        src="https://docs.google.com/document/d/e/2PACX-1vQu8qEO-akZuQfWfi0475QF3oOlzP_Hjuonsl3PQ03UI_Ki5M8zXSqUCoL0ZXhH0Gp6uwdEfMu1Rp6a/pub?embedded=true"
      />
    </Layout>
  );
}

export default PrivacyPolicyPage;

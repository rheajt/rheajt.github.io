import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Layout, SEO } from 'components';

function PrivacyPolicyPage() {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <Paper style={{ padding: '1rem' }}>
        <iframe
          title="contact-form"
          name="contact-form"
          width="100%"
          height="400"
          frameBorder="0"
          src="https://docs.google.com/document/d/e/2PACX-1vQu8qEO-akZuQfWfi0475QF3oOlzP_Hjuonsl3PQ03UI_Ki5M8zXSqUCoL0ZXhH0Gp6uwdEfMu1Rp6a/pub?embedded=true"
        />
      </Paper>
    </Layout>
  );
}

export default PrivacyPolicyPage;

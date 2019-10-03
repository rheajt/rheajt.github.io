import React from 'react';
import Layout from '../layout';
import SEO from '../components/SEO';
import IFrame from '../components/IFrame';

interface Props {}

const ContactPage: Props = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <IFrame src="https://script.google.com/macros/s/AKfycbznGrEM-Fu78vZZJk8VtJcsk-fHQvFhM0UvgmiaTxC8Z6XsCkM/exec" />
    </Layout>
  );
};

export default ContactPage;

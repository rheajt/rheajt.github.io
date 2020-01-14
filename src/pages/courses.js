import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Layout, SEO } from 'components';

const CoursesPage = () => (
  <Layout noBackground>
    <SEO title="Courses" />
    <Typography variant="h1" color="textPrimary">
      Courses
    </Typography>
    <Typography variant="h3" color="textPrimary">
      Coming soon...
    </Typography>
  </Layout>
);

export default CoursesPage;

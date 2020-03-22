import React from 'react';
import { Layout, SEO } from 'components';
import Videos from '../containers/videos';

const VideoPage = () => (
  <Layout centered>
    <SEO title="Videos" />
    <Videos />
  </Layout>
);

export default VideoPage;

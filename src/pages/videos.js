import React from 'react';
import { Layout, SEO } from 'components';
import VideoList from '../containers/video-list';

const VideoPage = () => (
  <Layout centered>
    <SEO title="Videos" />
    <VideoList />
  </Layout>
);

export default VideoPage;

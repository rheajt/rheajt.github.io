import React from 'react';
import { Layout, Seo } from 'components';

const NotFoundPage = () => (
    <Layout>
        <Seo title="Page not found" />
        <h1>NOT FOUND</h1>
        <p>Going to be honest with you... I probably broke it.</p>

        <p>Let me know on <a href="https://twitter.com/rheajt">my twitter page @rheajt</a></p>
    </Layout>
);

export default NotFoundPage;

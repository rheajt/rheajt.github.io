import {Layout} from '../components/Layout';
import { Seo } from '../components/Seo';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';

const IndexPage = () => {
    return (
        <Layout title="jordanrhea.com">
            <Seo />
            <section>
                <h1>Jordan Rhea</h1>
                <h3>Cloud Solutions Development</h3>

                <figure>
			<StaticImage src="../images/jordan-rhea-header.png" alt="header image" layout="constrained" />
                </figure>
            </section>

            <section>
                <p>I am doing a fairly haphazard job of documenting the different projects that I work on.</p>
                <p>Sometimes it is a project in Google Workspaces. Sometimes it is a project in Office 365</p>
            </section>
        </Layout>
    );
};

export default IndexPage;

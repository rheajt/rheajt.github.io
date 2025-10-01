import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { LinkButton } from "../../components/link-button";
import { Section } from "../../components/section";
import Seo from "../../components/seo";

export default function VexillologyPage({ location }: { location: any }) {
    return (
        <Layout location={location} title="Vexillology">
            <Seo title="Vexillology" />
            <Section>
                <h1>Vexillology</h1>
                <div style={{ marginBottom: "1em" }}>
                    <LinkButton
                        href="https://docs.google.com/spreadsheets/d/14K-Z_rRR4wRQoXirCnAnsYZ9xI-Sdqh8o66N474g1SI/edit?gid=2059210243#gid=2059210243"
                        label="Vexillology"
                    />
                </div>
                <FullWidthIframe>
                    <iframe
                        width="963"
                        height="594"
                        seamless
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRabbAIkSKPlz2eMFtIg62AwsOHS5J1yWc_JLQOtXN4U1kk3Mzg_GvcVyIhJePiq9VzZ0-KwYvHuRSv/pubchart?oid=1460356816&amp;format=image"
                    ></iframe>
                </FullWidthIframe>
                <FullWidthIframe>
                    <iframe
                        width="963"
                        height="594"
                        seamless
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRabbAIkSKPlz2eMFtIg62AwsOHS5J1yWc_JLQOtXN4U1kk3Mzg_GvcVyIhJePiq9VzZ0-KwYvHuRSv/pubchart?oid=1179907489&amp;format=image"
                    ></iframe>
                </FullWidthIframe>
            </Section>
        </Layout>
    );
}

const FullWidthIframe = styled.div`
    overflow: hidden;
    padding-top: 75%;
    position: relative;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
        width: 100%;
        height: 100%;
    }
`;

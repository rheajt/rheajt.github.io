import React from "react";
import Layout from "../../components/layout";
import { Section } from "../../components/section";
import Seo from "../../components/seo";

export default function VexillologyPage({ location }) {
    return (
        <Layout location={location} title="Vexillology">
            <Seo title="Vexillology" />
            <Section>
                <h1>Vexillology</h1>
            </Section>
        </Layout>
    );
}

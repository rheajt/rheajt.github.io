import Layout from "~/components/layout";
import Seo from "~/components/seo";
import Bio from "~/components/bio";
import { Section } from "~/components/section";

export default function Projects() {
  return (
    <Layout>
      <Seo title="All Projects" />
      <Section>
        <Bio />
        <p>Projects page coming soon. This page will display project data.</p>
      </Section>
    </Layout>
  );
}

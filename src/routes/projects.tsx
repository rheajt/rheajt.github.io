import Layout from "~/components/solid/layout";
import Seo from "~/components/solid/seo";
import Bio from "~/components/solid/bio";
import { Section } from "~/components/solid/section";

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

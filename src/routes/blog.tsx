import Layout from "~/components/layout";
import Seo from "~/components/seo";
import Bio from "~/components/bio";
import { Section } from "~/components/section";

export default function Blog() {
  return (
    <Layout>
      <Seo title="All posts" />
      <Section>
        <Bio />
        <p>Blog posts coming soon. This page will be connected to the CMS.</p>
      </Section>
    </Layout>
  );
}

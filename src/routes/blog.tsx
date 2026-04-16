import Layout from "~/components/solid/layout";
import Seo from "~/components/solid/seo";
import Bio from "~/components/solid/bio";
import { Section } from "~/components/solid/section";

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

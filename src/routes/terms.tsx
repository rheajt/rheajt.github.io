import Layout from "~/components/solid/layout";
import Seo from "~/components/solid/seo";
import { Section } from "~/components/solid/section";

export default function Terms() {
  return (
    <Layout>
      <Seo title="Terms of Service" />
      <Section>
        <h1>Terms of Service</h1>
        <p>By accessing the website at jordanrhea.com, you are agreeing to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.</p>
        <p>The materials contained in this website are protected by applicable copyright and trademark law.</p>
      </Section>
    </Layout>
  );
}

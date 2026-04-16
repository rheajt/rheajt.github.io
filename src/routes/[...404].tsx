import Layout from "~/components/solid/layout";
import Seo from "~/components/solid/seo";
import { Section } from "~/components/solid/section";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <Section>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </Section>
    </Layout>
  );
}

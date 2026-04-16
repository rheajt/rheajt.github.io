import Layout from "~/components/solid/layout";
import Seo from "~/components/solid/seo";
import { Section } from "~/components/solid/section";

export default function Schedule() {
  return (
    <Layout>
      <Seo title="Schedule" />
      <Section>
        <h1>Schedule a Meeting</h1>
        <iframe src="https://calendly.com/jordan-rhea/30min" width="100%" height="700" style={{ border: "none", "min-width": "320px" }} title="Schedule a meeting" />
      </Section>
    </Layout>
  );
}

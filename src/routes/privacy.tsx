import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Section } from "~/components/section";

export default function Privacy() {
  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <Section>
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. It is jordanrhea.com's policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
        <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites.</p>
        <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
        <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.</p>
      </Section>
    </Layout>
  );
}

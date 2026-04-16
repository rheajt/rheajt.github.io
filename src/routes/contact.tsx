import Layout from "~/components/solid/layout";
import Seo from "~/components/solid/seo";
import { Section } from "~/components/solid/section";
import { StyledContainer } from "~/components/solid/StyledContainer";
import { ContactForm } from "~/components/solid/contact-form";
import { ContactIcons } from "~/components/solid/contact-icons";

export default function ContactPage() {
  return (
    <Layout>
      <Seo title="Contact" />
      <Section>
        <StyledContainer>
          <ContactForm />
        </StyledContainer>
        <ContactIcons />
      </Section>
    </Layout>
  );
}

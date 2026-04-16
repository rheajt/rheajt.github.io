import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Section } from "~/components/section";
import { StyledContainer } from "~/components/StyledContainer";
import { ContactForm } from "~/components/contact-form";
import { ContactIcons } from "~/components/contact-icons";

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

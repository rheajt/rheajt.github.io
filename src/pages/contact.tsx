import * as React from "react";
import styled from "styled-components";
import { ContactForm } from "../components/contact-form";
import { ContactIcons } from "../components/contact-icons";
import Layout from "../components/layout";
import { Section } from "../components/section";
import Seo from "../components/seo";
import { StyledContainer } from "../components/StyledContainer";

interface Props {
    location: Location;
}

const ContactPage: React.FC<Props> = ({ location }) => {
    const siteTitle = "jordanrhea.com";

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Contact" />

            <Section>
                <StyledContainer>
                    <ContactForm />
                </StyledContainer>

                <ContactIcons />
            </Section>
        </Layout>
    );
};

export default ContactPage;

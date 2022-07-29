import * as React from "react";
import { ContactForm } from "../components/contact-form";
import { ContactIcons } from "../components/contact-icons";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface Props {
    location: Location;
}

const ContactPage: React.FC<Props> = ({ location }) => {
    const siteTitle = "jordanrhea.com";

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Contact" />

            <ContactForm />

            <ContactIcons />
        </Layout>
    );
};

export default ContactPage;

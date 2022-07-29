import React from "react";
import { InlineWidget } from "react-calendly";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface Props {
    location: Location;
}

const SchedulePage: React.FC<Props> = ({ location }) => {
    const siteTitle = "jordanrhea.com";
    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Schedule Page" />

            <InlineWidget
                iframeTitle="Jordan's Scheduling Page"
                pageSettings={{
                    backgroundColor: "ffffff",
                    hideEventTypeDetails: false,
                    hideGdprBanner: true,
                    hideLandingPageDetails: false,
                    primaryColor: "00a2ff",
                    textColor: "4d5055",
                }}
                prefill={{
                    customAnswers: {
                        a1: "a1",
                        a10: "a10",
                        a2: "a2",
                        a3: "a3",
                        a4: "a4",
                        a5: "a5",
                        a6: "a6",
                        a7: "a7",
                        a8: "a8",
                        a9: "a9",
                    },
                    date: new Date(),
                    email: "rheajt@gmail.com",
                    firstName: "Jordan",
                    guests: ["janedoe@example.com", "johndoe@example.com"],
                    lastName: "Rhea",
                    name: "Jordan Rhea",
                }}
                styles={{
                    height: "1000px",
                }}
                url="https://calendly.com/jordanrhea"
                utm={{
                    utmCampaign: "Spring Sale 2019",
                    utmContent: "Shoe and Shirts",
                    utmMedium: "Ad",
                    utmSource: "Facebook",
                    utmTerm: "Spring",
                }}
            />
        </Layout>
    );
};

export default SchedulePage;

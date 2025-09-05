import * as React from "react";
import Layout from "../components/layout";
import { Section } from "../components/section";
import Seo from "../components/seo";
import { buildMapboxSrc } from "../utils/buildMapboxSrc";

const About: React.FC<{ location: any }> = ({ location }) => {
    return (
        <Layout location={location} title="About">
            <Seo title="About" />
            <Section>
                <h1>About Page</h1>
                <p>
                    I am a solutions developer working with both Google
                    Workspaces and Microsoft 365. I like building tools to make
                    our digital work lives easier.
                </p>
                <p>
                    I have lived all over the world in different roles. I was a
                    United States Marine in Okinawa, Japan. I taught middle
                    school English in Richmond, VA. I became a self-taught
                    computer programmer in Izmir, Turkey. Now I am doing
                    development work in Beijing, China.
                </p>

                <p>
                    <figure className="marginnote">
                        <img src={buildMapboxSrc()} alt="map" />
                    </figure>
                </p>

                <p>
                    I write code using JavaScript, Typescript, and Google Apps
                    Script. I have built SPFx webparts in Microsoft Sharepoint
                    and written many automations in Google Workspaces. The idea
                    of automating the boring parts of the day is incredible.
                </p>
            </Section>
        </Layout>
    );
};

export default About;

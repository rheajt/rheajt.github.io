import { HttpStatusCode } from "@solidjs/start";
import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Section } from "~/components/section";

export default function NotFound() {
    return (
        <Layout>
            <HttpStatusCode code={404} />
            <Seo title="404: Not Found" />
            <div data-static-404>
                <Section>
                    <h1>404: Not Found</h1>
                    <p>
                        You just hit a route that doesn't exist... the sadness.
                    </p>
                </Section>
            </div>
        </Layout>
    );
}

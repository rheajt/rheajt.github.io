import { HttpStatusCode } from "@solidjs/start";
import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Section } from "~/components/section";
import { StaticNotFoundHeader } from "~/components/static-not-found-header";

export default function NotFound() {
    return (
        <Layout header={<StaticNotFoundHeader />}>
            <HttpStatusCode code={404} />
            <Seo title="404: Not Found" />
            <div data-static-404>
                <Section>
                    <h1>404: Not Found</h1>
                    <p>
                        This page could not be found. Use the links above to
                        return home, browse projects, or get in touch.
                    </p>
                </Section>
            </div>
        </Layout>
    );
}

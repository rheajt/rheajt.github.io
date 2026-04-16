import Layout from "~/components/solid/layout";
import Seo from "~/components/solid/seo";
import { Loader } from "~/components/solid/loader";
import { Hero } from "~/components/solid/hero";
import { Section } from "~/components/solid/section";
import { LinkButton } from "~/components/solid/link-button";
import { siteMetadata } from "~/site-config";

export default function Home() {
  return (
    <Layout>
      <Seo title="jordanrhea.com" image={siteMetadata.siteUrl + "/content/img/jordanrhea-header.png"} />
      <Loader />
      <Hero />
      <Section>
        <p>As a dedicated data software consultant specializing in educational institutions, I bring a unique blend of technical expertise and a profound understanding of the needs of schools and educators. <b>PSISJS</b> is a support service with customization options for PowerSchool SIS.</p>
        <div style={{ display: "flex", "justify-content": "space-around" }}>
          <LinkButton label="PSISJS" href="https://psisjs.com" />
        </div>
        <p>My role involves crafting innovative solutions that harness the power of data to optimize school operations. That is why I created School Data Solutions, a data software consulting company that specializes in educational institutions.</p>
        <div style={{ display: "flex", "justify-content": "space-around" }}>
          <LinkButton label="School Data Solutions" href="https://schooldata.solutions" />
        </div>
        <p>My ability to bridge the gap between technology and education ensures seamless integration of data software, empowering schools to make informed choices for improved student outcomes. Your commitment to transforming educational landscapes establishes you as a key player in shaping the future of learning.</p>
        <p>Extending the capabilities of <b>Office 365</b> and{" "}<b>Google Workspaces</b> so that your team makes the most of your systems. Background in education with a future in development.</p>
      </Section>
    </Layout>
  );
}

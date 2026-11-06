import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Section } from "~/components/section";
import { LanguageLearningPractice } from "./(components)/language-learning";

export { LanguageLearningPractice } from "./(components)/language-learning";

export default function LanguageLearning() {
    return (
        <Layout>
            <Seo title="Language Learning" />
            <Section>
                <LanguageLearningPractice />
            </Section>
        </Layout>
    );
}

import React from 'react';
import { Layout } from 'components';
import useWindowSize from '../hooks/useWindowSize';

function TermsPage() {
    const dimensions = useWindowSize();

    /*
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vTfE-k4i9mOSCz_ZZunZTmOYROZIgPjXdvp7GiOupqSet-cgeYBUIvalf_n-08OMX1vM6UHLw8zx4-d/pub?embedded=true"></iframe>
        */
    return (
        <Layout>
            <iframe
                title="terms-of-service"
                name="terms"
                width="100%"
                height={dimensions.height - 120}
                frameBorder="0"
                src="https://docs.google.com/document/d/e/2PACX-1vTfE-k4i9mOSCz_ZZunZTmOYROZIgPjXdvp7GiOupqSet-cgeYBUIvalf_n-08OMX1vM6UHLw8zx4-d/pub?embedded=true"
            />
        </Layout>
    );
}

export default TermsPage;

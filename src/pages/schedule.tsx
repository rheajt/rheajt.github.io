import { navigate } from "gatsby";
import React from "react";
import { InlineWidget } from "react-calendly";
import { Location } from "../components/layout";
import Seo from "../components/seo";

interface Props {
    location: Location;
}

interface Prefill {
    customAnswers: {
        a1: string;
        a2: string;
        a3: string;
    };
    date: Date;
    email: string;
    firstName: string;
    lastName: string;
    name: string;
}

interface ParamsObject {
    dts: string;
}

const isBrowser = typeof window !== "undefined";

function parseQueryParams(str: string): ParamsObject {
    return str
        .substring(1)
        .split("&")
        .reduce<any>((acc: any, el: string) => {
            const [key, val] = el.split("=");
            acc[key] = val;
            return acc;
        }, {});
}

function parsePrefill(str: string): Prefill {
    return JSON.parse(window.atob(str));
}

const SchedulePage: React.FC<Props> = ({ location }) => {
    if (!isBrowser) {
        return null;
    }

    const siteTitle = "jordanrhea.com";
    const params = parseQueryParams(location.search);

    if (!params.hasOwnProperty("dts")) {
        return navigate("/");
    }

    let prefill;
    try {
        prefill = parsePrefill(params.dts);
    } catch (err) {
        return navigate("/");
    }

    return (
        <>
            <Seo title={`Schedule Page | ${siteTitle}`} />

            {isBrowser && (
                <InlineWidget
                    iframeTitle="Jordan's Scheduling Page"
                    pageSettings={{
                        backgroundColor: "ffffff",
                        hideEventTypeDetails: false,
                        hideGdprBanner: false,
                        hideLandingPageDetails: false,
                        primaryColor: "00a2ff",
                        textColor: "4d5055",
                    }}
                    prefill={prefill}
                    styles={{
                        height: "1000px",
                    }}
                    url="https://calendly.com/jordan-rhea/30min"
                    utm={{
                        utmSource: "website",
                    }}
                />
            )}
        </>
    );
};

export default SchedulePage;

import { navigate } from "gatsby";
import React, { SetStateAction, useState } from "react";
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
    email: string;
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

    const [prefill, setPrefill] = useState<Prefill>({
        name: "",
        email: "",
        customAnswers: {
            a1: "1",
            a2: "",
            a3: "",
        },
    });

    const siteTitle = "jordanrhea.com";
    const params = parseQueryParams(location.search);

    if (!params.hasOwnProperty("dts")) {
        return navigate("/");
    }

    try {
        setPrefill(parsePrefill(params.dts));
    } catch (err) {
        console.log(err);
        // return navigate("/");
    }

    return (
        <>
            <Seo title={`Schedule Page | ${siteTitle}`} />

            {isBrowser && params.dts !== "new" ? (
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
            ) : (
                <>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={prefill.name}
                            onChange={e =>
                                setPrefill({
                                    ...prefill,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={prefill.email}
                            onChange={e =>
                                setPrefill({
                                    ...prefill,
                                    [e.currentTarget.name]:
                                        e.currentTarget.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label htmlFor="a1">Service</label>
                        <select
                            name="a1"
                            value={prefill.customAnswers.a1}
                            onChange={e =>
                                setPrefill({
                                    ...prefill,
                                    customAnswers: {
                                        ...prefill.customAnswers,
                                        a1: e.currentTarget.value,
                                    },
                                })
                            }
                        >
                            <option value="1">Microsoft</option>
                            <option value="2">Google</option>
                            <option value="3">Other</option>
                        </select>
                    </div>

                    <CheckboxInput
                        name="powerschool"
                        value="1"
                        prefill={prefill}
                        setPrefill={setPrefill}
                    />
                    <CheckboxInput
                        name="managebac"
                        value="2"
                        prefill={prefill}
                        setPrefill={setPrefill}
                    />
                    <CheckboxInput
                        name="zoho"
                        value="3"
                        prefill={prefill}
                        setPrefill={setPrefill}
                    />
                    <CheckboxInput
                        name="zoom"
                        value="4"
                        prefill={prefill}
                        setPrefill={setPrefill}
                    />
                    <CheckboxInput
                        name="sharepoint"
                        value="5"
                        prefill={prefill}
                        setPrefill={setPrefill}
                    />
                    <CheckboxInput
                        name="spreadsheets"
                        value="6"
                        prefill={prefill}
                        setPrefill={setPrefill}
                    />

                    <div>
                        <textarea
                            name="a3"
                            onChange={e => {
                                setPrefill({
                                    ...prefill,
                                    customAnswers: {
                                        ...prefill.customAnswers,
                                        a3: e.target.value,
                                    },
                                });
                            }}
                        ></textarea>
                    </div>

                    <pre>{JSON.stringify(prefill, null, 2)}</pre>

                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(
                                `https://jordanrhea.com/schedule?dts=${window.btoa(
                                    JSON.stringify(prefill)
                                )}`
                            );
                        }}
                    >
                        Copy to clipboard
                    </button>
                </>
            )}
        </>
    );
};

export default SchedulePage;

interface ITextInput {
    name: string;
    value: string;
    setPrefill: (value: SetStateAction<Prefill>) => void;
}
function TextInput({ name, value, setPrefill }: ITextInput) {
    return (
        <div>
            <label>Name</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={e =>
                    setPrefill((prefill: Prefill) => ({
                        ...prefill,
                        [e.currentTarget.name]: e.currentTarget.value,
                    }))
                }
            />
        </div>
    );
}

interface ICheckboxInput {
    name: string;
    value: string;
    prefill: Prefill;
    setPrefill: (value: SetStateAction<Prefill>) => void;
}
function CheckboxInput({ name, value, prefill, setPrefill }: ICheckboxInput) {
    return (
        <div>
            <input
                type="checkbox"
                id={name}
                name="software"
                value={value}
                checked={prefill.customAnswers?.a2.includes(value)}
                onChange={() => {
                    let a2 = prefill.customAnswers.a2;
                    const spl = !!a2 ? a2.split(",") : [];

                    if (a2.includes(value)) {
                        const idx = spl.findIndex(s => s == value);
                        spl.splice(idx);
                        a2 = spl.join(",");
                    } else {
                        spl.push(value);
                        a2 = spl.join(",");
                        console.log(spl);
                    }

                    setPrefill({
                        ...prefill,
                        customAnswers: {
                            ...prefill.customAnswers,
                            a2,
                        },
                    });
                }}
            />
            <label htmlFor={name}>{name.toUpperCase()}</label>
        </div>
    );
}

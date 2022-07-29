import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface CustomFormElement extends HTMLFormElement {
    your_name: HTMLInputElement;
    message: HTMLTextAreaElement;
}

const initialVals = {
    your_name: "",
    your_email: "",
    service: "",
    topic: "",
    message: "",
    isAnonymous: true,
    isNewsletter: true,
};

export const ContactForm: React.FC = () => {
    const [isDisabled, setIsDisabled] = React.useState(true);
    const [isSent, setSent] = React.useState(false);
    const [percentage, setPercentage] = React.useState(0);
    const [vals, setVals] = React.useState(initialVals);

    React.useEffect(() => {
        const wordCount = vals.message.split(" ").length;
        const charCount = vals.message.length;

        setPercentage(
            Math.min(
                100,
                Math.max(
                    0,
                    ((charCount / 100) * 100 + (wordCount / 50) * 100) / 2
                )
            )
        );

        if (
            percentage === 100 &&
            vals.your_name.length !== 0 &&
            vals.service.length !== 0 &&
            vals.your_email.length !== 0 &&
            vals.topic.length !== 0
        ) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [vals]);

    async function handleSubmit(e: React.FormEvent<CustomFormElement>) {
        e.preventDefault();
        const deploymentId =
            "AKfycbxEjDRw-68mO5RYeaarxwcMxt9QIPiKrXSSXO47ZkbWnXfDJJAPApy7DFGuqH2089kg";

        const endpoint = `https://script.google.com/macros/s/${deploymentId}/exec`;

        try {
            const resp = await fetch(endpoint, {
                redirect: "follow",
                method: "post",
                headers: {
                    "content-type": "text/plain",
                },
                body: JSON.stringify(vals),
            });
            const json = await resp.json();

            if (json.status === "done") {
                setSent(true);
            }
            console.log("resp", json);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(name: string, val: string | boolean) {
        setVals({ ...vals, [name]: val });
    }

    if (isSent) {
        return <p>Sent!</p>;
    }
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <FormService active={vals.service} handleChange={handleChange} />

            <FormInput
                name="your_name"
                placeholder="Your Name Here"
                handleChange={handleChange}
            />

            <FormInput
                name="your_email"
                placeholder="Your Email Here"
                handleChange={handleChange}
            />

            <FormSelect
                name="topic"
                label="What Can I help you with?"
                options={[
                    "PowerSchool",
                    "Managebac",
                    "Office 365",
                    "Google Workspaces",
                    "Google Drive",
                ]}
                handleChange={handleChange}
            />

            <FormText
                name="message"
                label="Send me some words"
                val={percentage}
                handleChange={handleChange}
            />

            <FormCheckbox
                name="isNewsletter"
                label="Subscribe to any mail I might send?"
                handleChange={handleChange}
                isChecked={vals.isNewsletter}
            />

            <FormCheckbox
                name="isAnonymous"
                label="Can I use your name to give you credit for video ideas?"
                handleChange={handleChange}
                isChecked={vals.isAnonymous}
            />

            <div className="actions">
                <button type="submit" disabled={isDisabled}>
                    Send
                </button>
                <button type="button" onClick={() => setVals(initialVals)}>
                    Clear
                </button>
            </div>
        </form>
    );
};

type HandleChange = (name: string, val: string | boolean) => void;

const FormCheckbox: React.FC<{
    name: string;
    label: string;
    isChecked: boolean;
    handleChange: HandleChange;
}> = ({ name, label, isChecked, handleChange }) => {
    return (
        <div>
            <input
                type="checkbox"
                name={name}
                onChange={e => handleChange(name, e.target.checked)}
                checked={isChecked}
            />

            <label htmlFor={name}>{label}</label>
        </div>
    );
};

const FormInput: React.FC<{
    name: string;
    placeholder: string;
    handleChange: HandleChange;
}> = ({ name, placeholder, handleChange }) => {
    return (
        <div className="form-input">
            <label htmlFor={name}>{placeholder}</label>
            <input
                placeholder={placeholder}
                name={name}
                onChange={e => handleChange(e.target.name, e.target.value)}
            />
        </div>
    );
};

const FormSelect: React.FC<{
    name: string;
    label: string;
    handleChange: HandleChange;
    options: string[];
}> = ({ name, label, options, handleChange }) => {
    return (
        <div className="form-input full-width">
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                onChange={e => handleChange(e.target.name, e.target.value)}
            >
                <option value=""></option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

const FormText: React.FC<{
    name: string;
    label: string;
    val: number;
    handleChange: HandleChange;
}> = ({ name, label, val, handleChange }) => {
    return (
        <div className="form-input full-width">
            <label htmlFor={name}>{label}</label>
            <textarea
                className="full-width"
                name={name}
                onChange={e => handleChange(e.target.name, e.target.value)}
                rows={7}
            ></textarea>
            <Progress val={val} />
        </div>
    );
};

const FormService: React.FC<{ active: string; handleChange: HandleChange }> = ({
    active,
    handleChange,
}) => {
    return (
        <div className="services full-width">
            <span
                className={`service ${active === "google" && "active"}`}
                onClick={() => handleChange("service", "google")}
            >
                <StaticImage
                    src="../../content/img/google-logo.png"
                    alt="google logo"
                    height={100}
                />
            </span>

            <span
                className={`service ${active === "microsoft" && "active"}`}
                onClick={() => handleChange("service", "microsoft")}
            >
                <StaticImage
                    src="../../content/img/microsoft-logo.png"
                    alt="microsoft logo"
                    height={100}
                />
            </span>
        </div>
    );
};

const Progress: React.FC<{ val: number }> = ({ val }) => {
    return (
        <div style={{ width: "100%", border: "1px solid lightgray" }}>
            <div
                style={{
                    backgroundColor: "var(--color-primary)",
                    height: 10,
                    width: `${val}%`,
                }}
            ></div>
        </div>
    );
};

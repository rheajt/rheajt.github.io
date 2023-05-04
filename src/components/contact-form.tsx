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

    function handleClear() {
        setVals(initialVals);
    }

    async function handleSubmit(e: React.FormEvent<CustomFormElement>) {
        e.preventDefault();

        const deploymentId =
            "AKfycbyhUP2UI4NOia08Ey5yykiLYERXLRyHF_fBZVBiH9rKYeWDLOmy4AdRtmPuMzS7Dsg";

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
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(name: string, val: string | boolean) {
        setVals({ ...vals, [name]: val });
    }

    if (isSent) {
        return (
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    width: "100%",
                    height: 200,
                }}
            >
                <b>Sent!</b>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <FormInput
                name="your_name"
                placeholder="Name"
                value={vals.your_name}
                handleChange={handleChange}
            />

            <FormInput
                name="your_email"
                type="email"
                value={vals.your_email}
                placeholder="Email"
                handleChange={handleChange}
            />

            <FormSelect
                value={vals.topic}
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

            <FormSelect
                name="service"
                value={vals.service}
                label="What service are you using?"
                options={["Microsoft", "Google"]}
                handleChange={handleChange}
            />

            <FormText
                name="message"
                label="Send me some words"
                value={vals.message}
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

            <div className="actions full-width">
                <button type="submit" disabled={isDisabled}>
                    Send
                </button>

                <button type="button" onClick={handleClear}>
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
                id={name}
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
    type?: string;
    value: string;
    placeholder: string;
    handleChange: HandleChange;
}> = ({ name, type = "text", value, placeholder, handleChange }) => {
    return (
        <div className="form-input">
            <label htmlFor={name}>{placeholder}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={e => handleChange(e.target.name, e.target.value)}
            />
        </div>
    );
};

const FormSelect: React.FC<{
    name: string;
    value: string;
    label: string;
    handleChange: HandleChange;
    options: string[];
}> = ({ name, value, label, options, handleChange }) => {
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                value={value}
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
    value: string;
    label: string;
    val: number;
    handleChange: HandleChange;
}> = ({ name, value, label, val, handleChange }) => {
    return (
        <div className="form-input full-width">
            <label htmlFor={name}>{label}</label>
            <textarea
                className="full-width"
                name={name}
                value={value}
                onChange={e => handleChange(e.target.name, e.target.value)}
                rows={7}
            ></textarea>
            <Progress val={val > 1 ? val : 0} />
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

// <FormService active={vals.service} handleChange={handleChange} />

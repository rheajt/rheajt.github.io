import React from "react";
import { styled } from "styled-components";

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

interface ContactFormProps {
	data?: Partial<typeof initialVals>;
}

export const ContactForm: React.FC<ContactFormProps> = props => {
	const [isDisabled, setIsDisabled] = React.useState(true);
	const [isSent, setSent] = React.useState(false);
	const [percentage, setPercentage] = React.useState(0);
	const [vals, setVals] = React.useState({ ...initialVals, ...props.data });

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
			vals.your_email.length !== 0
		) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [vals]);

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
		console.log(name, val);
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

	console.log("topic", vals.topic);
	return (
		<>
			{vals.topic ? (
				<>
					<i>Lets talk more about </i>
					<b>
						{vals.topic
							.split(" ")
							.map(t => `#${t}`)
							.join(", ")}
					</b>
				</>
			) : null}

			<StyledForm onSubmit={handleSubmit}>
				<FormInput
					type="text"
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

				<FormInput
					type="textarea"
					name="message"
					label="Send me a message! I love meeting new people and talking about data systems."
					placeholder={vals.message}
					value={vals.message}
					val={percentage}
					handleChange={handleChange}
				/>

				<div className="actions full-width">
					<button type="submit" disabled={isDisabled}>
						Send
					</button>

					<FormCheckbox
						name="isNewsletter"
						label="Newsletter?"
						handleChange={handleChange}
						isChecked={vals.isNewsletter}
					/>

					<FormCheckbox
						name="isAnonymous"
						label="Stay anonymous?"
						handleChange={handleChange}
						isChecked={vals.isAnonymous}
					/>
				</div>
			</StyledForm>
		</>
	);
};

type HandleChange = (name: string, val: string | boolean) => void;

const StyledFormCheckbox = styled.div`
    label {
        display: inline-block;
        padding-left: 1em;
    }
`;
const FormCheckbox: React.FC<{
	name: string;
	label: string;
	isChecked: boolean;
	handleChange: HandleChange;
}> = ({ name, label, isChecked, handleChange }) => {
	return (
		<StyledFormCheckbox>
			<input
				type="checkbox"
				id={name}
				name={name}
				onChange={e => handleChange(name, e.target.checked)}
				checked={isChecked}
			/>

			<label htmlFor={name}>{label}</label>
		</StyledFormCheckbox>
	);
};

type FormInputProps =
	| {
		type: "text" | "email";
		name: string;
		value: string;
		placeholder: string;
		handleChange: HandleChange;
	}
	| {
		type: "textarea";
		name: string;
		placeholder: string;
		value: string;
		label: string;
		val: number;
		handleChange: HandleChange;
	};
const StyledFormInput = styled.div`
    &.full-width {
        grid-column: 1 / -1;
    }

    label {
        display: block;
    }

    input,
    select,
    textarea {
        padding: 8px;
        width: 100%;
        border-radius: 3px;
        border: 1px solid lightgray;

        &:focus {
            outline: none;
            border: 1px solid var(--color-primary);
        }
    }
`;
const FormInput: React.FC<FormInputProps> = props => {
	if (props.type === "textarea") {
		return (
			<StyledFormInput className="full-width">
				<label htmlFor={props.name}>{props.label}</label>
				<textarea
					className="full-width"
					name={props.name}
					value={props.value}
					onChange={e =>
						props.handleChange(e.target.name, e.target.value)
					}
					placeholder={props.placeholder}
					rows={7}
				></textarea>
				<Progress val={props.val > 1 ? props.val : 0} />
			</StyledFormInput>
		);
	}

	return (
		<StyledFormInput>
			<label htmlFor={props.name}>{props.placeholder}</label>
			<input
				type={props.type}
				placeholder={props.placeholder}
				name={props.name}
				value={props.value}
				onChange={e =>
					props.handleChange(e.target.name, e.target.value)
				}
			/>
		</StyledFormInput>
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
	placeholder: string;
	value: string;
	label: string;
	val: number;
	handleChange: HandleChange;
}> = ({ name, placeholder, value, label, val, handleChange }) => {
	return (
		<div className="form-input full-width">
			<label htmlFor={name}>{label}</label>
			<textarea
				className="full-width"
				name={name}
				value={value}
				onChange={e => handleChange(e.target.name, e.target.value)}
				placeholder={placeholder}
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

const StyledForm = styled.form`
    display: grid;
    margin-top: 1em;
    margin-bottom: 1em;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;

    button {
        margin-right: 1em;
        padding: 4px 1em;

        &[type="submit"] {
            background-color: var(--color-primary);
            color: white;
        }

        &:disabled {
            background-color: gray;
        }
    }

    .actions {
        display: flex;
        justify-content: space-between;
    }
`;
// <FormService active={vals.service} handleChange={handleChange} />

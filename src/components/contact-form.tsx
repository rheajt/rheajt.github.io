import { createSignal, createEffect, onCleanup, Show } from "solid-js";
import { styled } from "solid-styled-components";

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

export const ContactForm = (props: ContactFormProps) => {
    const [isDisabled, setIsDisabled] = createSignal(true);
    const [isSent, setSent] = createSignal(false);
    const [isSubmitting, setIsSubmitting] = createSignal(false);
    const [error, setError] = createSignal("");
    let request: AbortController | undefined;
    onCleanup(() => request?.abort());
    const [percentage, setPercentage] = createSignal(0);
    const [vals, setVals] = createSignal({ ...initialVals, ...props.data });

    createEffect(() => {
        const v = vals();
        const message = v.message.trim();
        const wordCount = message ? message.split(/\s+/).length : 0;
        const charCount = message.length;
        const pct = Math.min(
            100,
            Math.max(0, ((charCount / 100) * 100 + (wordCount / 50) * 100) / 2),
        );
        setPercentage(pct);
        if (
            pct === 100 &&
            v.your_name.trim().length !== 0 &&
            v.your_email.trim().length !== 0
        ) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    });

    async function handleSubmit(e: Event) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        if (isDisabled() || isSubmitting() || !form.reportValidity()) return;
        setIsSubmitting(true);
        setError("");
        request = new AbortController();
        const deploymentId =
            "AKfycbyhUP2UI4NOia08Ey5yykiLYERXLRyHF_fBZVBiH9rKYeWDLOmy4AdRtmPuMzS7Dsg";
        const endpoint = `https://script.google.com/macros/s/${deploymentId}/exec`;
        try {
            const resp = await fetch(endpoint, {
                signal: request.signal,
                redirect: "follow",
                method: "post",
                headers: { "content-type": "text/plain" },
                body: JSON.stringify(vals()),
            });
            if (!resp.ok) throw new Error("Unable to send message");
            const json = await resp.json();
            if (json.status !== "done") throw new Error("Message not accepted");
            setSent(true);
        } catch {
            if (!request.signal.aborted)
                setError("Your message could not be sent. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleChange(name: string, val: string | boolean) {
        setVals(prev => ({ ...prev, [name]: val }));
    }

    return (
        <Show
            when={!isSent()}
            fallback={
                <div
                    role="status"
                    style={{
                        display: "grid",
                        "place-items": "center",
                        width: "100%",
                        height: "200px",
                    }}
                >
                    <b>Sent!</b>
                </div>
            }
        >
            <>
                <Show when={vals().topic}>
                    <>
                        <i>Lets talk more about </i>
                        <b>
                            {vals()
                                .topic.split(" ")
                                .map(t => `#${t}`)
                                .join(", ")}
                        </b>
                    </>
                </Show>
                <StyledForm onSubmit={handleSubmit} aria-busy={isSubmitting()}>
                    <StyledFormInput>
                        <label for="your_name">Name</label>
                        <input
                            type="text"
                            id="your_name"
                            required
                            autocomplete="name"
                            name="your_name"
                            placeholder="Name"
                            value={vals().your_name}
                            onInput={e =>
                                handleChange("your_name", e.currentTarget.value)
                            }
                        />
                    </StyledFormInput>
                    <StyledFormInput>
                        <label for="your_email">Email</label>
                        <input
                            type="email"
                            id="your_email"
                            required
                            autocomplete="email"
                            name="your_email"
                            placeholder="Email"
                            value={vals().your_email}
                            onInput={e =>
                                handleChange(
                                    "your_email",
                                    e.currentTarget.value,
                                )
                            }
                        />
                    </StyledFormInput>
                    <StyledFormInput class="full-width">
                        <label for="message">
                            Send me a message! I love meeting new people and
                            talking about data systems.
                        </label>
                        <textarea
                            id="message"
                            required
                            name="message"
                            value={vals().message}
                            onInput={e =>
                                handleChange("message", e.currentTarget.value)
                            }
                            placeholder={vals().message}
                            rows={7}
                        ></textarea>
                        <div
                            role="progressbar"
                            aria-label="Message detail"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={Math.round(percentage())}
                            style={{
                                width: "100%",
                                border: "1px solid lightgray",
                            }}
                        >
                            <div
                                style={{
                                    "background-color": "var(--color-primary)",
                                    height: "10px",
                                    width: `${percentage() > 1 ? percentage() : 0}%`,
                                }}
                            ></div>
                        </div>
                    </StyledFormInput>
                    <div class="actions full-width">
                        <button
                            type="submit"
                            disabled={isDisabled() || isSubmitting()}
                        >
                            {isSubmitting() ? "Sending…" : "Send"}
                        </button>
                        <div class="checkbox-group">
                            <StyledFormCheckbox>
                                <input
                                    type="checkbox"
                                    id="isNewsletter"
                                    name="isNewsletter"
                                    onChange={e =>
                                        handleChange(
                                            "isNewsletter",
                                            e.currentTarget.checked,
                                        )
                                    }
                                    checked={vals().isNewsletter}
                                />
                                <label for="isNewsletter">Newsletter?</label>
                            </StyledFormCheckbox>
                            <StyledFormCheckbox>
                                <input
                                    type="checkbox"
                                    id="isAnonymous"
                                    name="isAnonymous"
                                    onChange={e =>
                                        handleChange(
                                            "isAnonymous",
                                            e.currentTarget.checked,
                                        )
                                    }
                                    checked={vals().isAnonymous}
                                />
                                <label for="isAnonymous">Stay anonymous?</label>
                            </StyledFormCheckbox>
                        </div>
                    </div>
                    <Show when={error()}>
                        <p class="full-width" role="alert">
                            {error()}
                        </p>
                    </Show>
                </StyledForm>
            </>
        </Show>
    );
};

const StyledFormCheckbox = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    input[type="checkbox"] {
        width: 16px;
        height: 16px;
        margin: 0;
        accent-color: var(--color-primary);
    }
    label {
        display: inline-block;
        padding-left: 0.25rem;
        margin: 0;
        cursor: pointer;
    }
`;

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

const StyledForm = styled.form`
    display: grid;
    margin-top: 1em;
    margin-bottom: 1em;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    > .full-width {
        grid-column: 1 / -1;
    }
    button {
        padding: 0.5rem 1rem;
        border-radius: 3px;
        border: 1px solid lightgray;
        font-weight: 700;
        cursor: pointer;
        transition:
            transform 120ms ease,
            box-shadow 120ms ease;
        &[type="submit"] {
            background-color: var(--color-primary);
            color: white;
            box-shadow: 0 6px 18px rgba(40, 53, 151, 0.12);
        }
        &:disabled {
            background-color: #ddd;
            color: #777;
            cursor: not-allowed;
            opacity: 0.7;
            box-shadow: none;
            transform: none;
        }
    }
    .actions {
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }
    .actions > div:first-of-type {
        margin-left: auto;
        display: inline-flex;
        gap: 0.75rem;
        align-items: center;
    }
    @media (max-width: 600px) {
        .actions {
            flex-direction: column;
            align-items: stretch;
        }
        .actions > div:first-of-type {
            margin-left: 0;
            justify-content: flex-start;
        }
        button[type="submit"] {
            width: 100%;
        }
    }
`;

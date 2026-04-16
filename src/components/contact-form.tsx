import { createSignal, createEffect, Show } from "solid-js";
import { styled } from "solid-styled-components";

interface CustomFormElement extends HTMLFormElement { your_name: HTMLInputElement; message: HTMLTextAreaElement; }

const initialVals = { your_name: "", your_email: "", service: "", topic: "", message: "", isAnonymous: true, isNewsletter: true };

interface ContactFormProps { data?: Partial<typeof initialVals>; }

export const ContactForm = (props: ContactFormProps) => {
  const [isDisabled, setIsDisabled] = createSignal(true);
  const [isSent, setSent] = createSignal(false);
  const [percentage, setPercentage] = createSignal(0);
  const [vals, setVals] = createSignal({ ...initialVals, ...props.data });

  createEffect(() => {
    const v = vals();
    const wordCount = v.message.split(" ").length;
    const charCount = v.message.length;
    const pct = Math.min(100, Math.max(0, ((charCount / 100) * 100 + (wordCount / 50) * 100) / 2));
    setPercentage(pct);
    if (pct === 100 && v.your_name.length !== 0 && v.your_email.length !== 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  });

  async function handleSubmit(e: Event) {
    e.preventDefault();
    const deploymentId = "AKfycbyhUP2UI4NOia08Ey5yykiLYERXLRyHF_fBZVBiH9rKYeWDLOmy4AdRtmPuMzS7Dsg";
    const endpoint = `https://script.google.com/macros/s/${deploymentId}/exec`;
    try {
      const resp = await fetch(endpoint, { redirect: "follow", method: "post", headers: { "content-type": "text/plain" }, body: JSON.stringify(vals()) });
      const json = await resp.json();
      if (json.status === "done") setSent(true);
    } catch (err) { console.log(err); }
  }

  function handleChange(name: string, val: string | boolean) {
    setVals(prev => ({ ...prev, [name]: val }));
  }

  return (
    <Show when={!isSent()} fallback={
      <div style={{ display: "grid", "place-items": "center", width: "100%", height: "200px" }}><b>Sent!</b></div>
    }>
      <>
        <Show when={vals().topic}>
          <><i>Lets talk more about </i><b>{vals().topic.split(" ").map(t => `#${t}`).join(", ")}</b></>
        </Show>
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormInput>
            <label for="your_name">Name</label>
            <input type="text" name="your_name" placeholder="Name" value={vals().your_name} onInput={(e) => handleChange("your_name", e.currentTarget.value)} />
          </StyledFormInput>
          <StyledFormInput>
            <label for="your_email">Email</label>
            <input type="email" name="your_email" placeholder="Email" value={vals().your_email} onInput={(e) => handleChange("your_email", e.currentTarget.value)} />
          </StyledFormInput>
          <StyledFormInput class="full-width">
            <label for="message">Send me a message! I love meeting new people and talking about data systems.</label>
            <textarea name="message" value={vals().message} onInput={(e) => handleChange("message", e.currentTarget.value)} placeholder={vals().message} rows={7}></textarea>
            <div style={{ width: "100%", border: "1px solid lightgray" }}>
              <div style={{ "background-color": "var(--color-primary)", height: "10px", width: `${percentage() > 1 ? percentage() : 0}%` }}></div>
            </div>
          </StyledFormInput>
          <div class="actions full-width">
            <button type="submit" disabled={isDisabled()}>Send</button>
            <div class="checkbox-group">
              <StyledFormCheckbox>
                <input type="checkbox" id="isNewsletter" name="isNewsletter" onChange={(e) => handleChange("isNewsletter", e.currentTarget.checked)} checked={vals().isNewsletter} />
                <label for="isNewsletter">Newsletter?</label>
              </StyledFormCheckbox>
              <StyledFormCheckbox>
                <input type="checkbox" id="isAnonymous" name="isAnonymous" onChange={(e) => handleChange("isAnonymous", e.currentTarget.checked)} checked={vals().isAnonymous} />
                <label for="isAnonymous">Stay anonymous?</label>
              </StyledFormCheckbox>
            </div>
          </div>
        </StyledForm>
      </>
    </Show>
  );
};

const StyledFormCheckbox = styled.div`
  display: inline-flex; align-items: center; gap: 0.5rem;
  input[type="checkbox"] { width: 16px; height: 16px; margin: 0; accent-color: var(--color-primary); }
  label { display: inline-block; padding-left: 0.25rem; margin: 0; cursor: pointer; }
`;

const StyledFormInput = styled.div`
  &.full-width { grid-column: 1 / -1; }
  label { display: block; }
  input, select, textarea {
    padding: 8px; width: 100%; border-radius: 3px; border: 1px solid lightgray;
    &:focus { outline: none; border: 1px solid var(--color-primary); }
  }
`;

const StyledForm = styled.form`
  display: grid; margin-top: 1em; margin-bottom: 1em; grid-gap: 1em; grid-template-columns: 1fr 1fr;
  button {
    padding: 0.5rem 1rem; border-radius: 3px; border: 1px solid lightgray; font-weight: 700; cursor: pointer; transition: transform 120ms ease, box-shadow 120ms ease;
    &[type="submit"] { background-color: var(--color-primary); color: white; box-shadow: 0 6px 18px rgba(40, 53, 151, 0.12); }
    &:disabled { background-color: #ddd; color: #777; cursor: not-allowed; opacity: 0.7; box-shadow: none; transform: none; }
  }
  .actions { grid-column: 1 / -1; display: flex; align-items: center; gap: 1rem; width: 100%; }
  .actions > div:first-of-type { margin-left: auto; display: inline-flex; gap: 0.75rem; align-items: center; }
  @media (max-width: 600px) {
    .actions { flex-direction: column; align-items: stretch; }
    .actions > div:first-of-type { margin-left: 0; justify-content: flex-start; }
    button[type="submit"] { width: 100%; }
  }
`;

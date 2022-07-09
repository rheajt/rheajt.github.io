import * as React from "react";

export const ContactForm: React.FC = () => {
    return (
        <form className="contact-form">
            <input placeholder="Your name" />
            <input placeholder="Your email" />
            <select>
                <option>Google</option>
                <option>Microsoft</option>
            </select>
            <textarea></textarea>
        </form>
    );
};

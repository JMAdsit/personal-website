import { useState } from "react";
import { Row } from "react-bootstrap";
import { FaChevronCircleRight } from "react-icons/fa";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/62f6e0a0-d188-11f1-84fe-891848413fa8";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

    fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
            throw new Error('Form response was not ok');
            }

            setSubmitted(true);
        })
        .catch((err) => {
            e.target.submit();
        });
    };

    if (submitted) {
        return (
        <>
            <h2>Thank you!</h2>
            <div>We'll be in touch soon.</div>
        </>
        );
    }

    return (
        <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        className="contactForm"
        >
            <div className="contactFormInput name">
                <label for="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    required 
                />
            </div>
            <div className="contactFormInput email">
                <label for="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    required 
                />
            </div>
            <div className="contactFormInput message">
                <label for="message">Message:</label>
                <textarea
                    name="message"
                    required 
                />
            </div>
            <Row className="buttonRow">
                <button 
                    className="submitButton button"
                    type="submit">
                    Send Message 
                    <FaChevronCircleRight className="buttonIcon" />
                </button>
            </Row>
        </form>
    );
}

export default ContactForm;
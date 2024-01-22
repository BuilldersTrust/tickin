import React, { useEffect, useRef, useState } from 'react';
import './Footer.scss'
import { useForm, ValidationError } from '@formspree/react';

export default function Footer() {
    const formToken = "mvoezzae";
    const [state, handleSubmit] = useForm(formToken);
    const [message, setMessage] = useState("")
    const [text, setText] = useState('');
    const formRef = useRef(null);
    const [formSubmitted, setFormSubmitted] = React.useState(false);


    useEffect(() => {
        if (state.succeeded) {
            setFormSubmitted(true); // Set formSubmitted to true
            setMessage("Message sent successfully");
            formRef.current.reset(); // Reset the form
            setText("");
            setTimeout(() => {
                setMessage(""); // Clear the message after 3 seconds
                setFormSubmitted(false); // Set formSubmitted back to false
                window.location.reload(false);
            }, 3000);

        }
    }, [state.succeeded])

    return (
        <footer>
            <div className="footer-widgets">

            </div>
            <div className="foot-note">

                <div
                    className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
                    <p className="mb-0" data-aos="fade-right" data-aos-offset="0">&copy;TICKIN - 2023 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

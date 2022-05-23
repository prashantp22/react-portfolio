import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        } 
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
    }


    return(
        <section id="Contact" className="contact">
        <h1 className="section-title">Contact Me</h1>
        <div className="contact-form">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="label">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} className='form-input'/>
            </div>
            <div>
                <label htmlFor="email" className="label">Email address:</label>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange} className='form-input'/>
            </div>
            <div>
                <label htmlFor="message" className="label">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} className='form-input'/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
          </form>
          </div>
        </section>
    )
}

export default Contact;
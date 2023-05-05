import { useState } from "react";
import React from 'react';
import './index.css';

function Form() {
    const [name, setName] = useState('');
    const [heading, setHeading] = useState('');
    const [email, setEmail] = useState('');

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onNameAdd(event) {
        setHeading(name)
        event.preventDefault()
    }

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onEmailAdd(event) {
        setEmail(email)
        event.preventDefault()
    }

    return (
        <div onClick={onNameAdd} className='counterContainer'>
            <h1 className="number">Hello {heading}</h1>
            <input className="input"
             type="text"
             placeholder="Enter Your name"
              onChange={onNameChange} />

            <div onClick={onEmailAdd}>
                <h1 className="number">{email}</h1>
                <input className="input"
                 type="text"
                 placeholder="abc@example.com"
                  onChange={onEmailChange} />
            </div>

            <div className="button">
                <button type="submit" className="btn">Submit</button>
            </div>
        </div>
    )
}

export default Form;
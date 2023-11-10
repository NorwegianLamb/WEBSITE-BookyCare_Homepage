import React, { useState, useEffect } from 'react';
import './Register.css';
import FormInput from './FormInput';

function Register() {
    const [username, setUsername] = useState("");
    console.log(username);
    return (
        <div className='pageHolder'>
            <form>
                <FormInput placeholder='Username' setUsername={setUsername}/>
                <FormInput placeholder='Password'/>
                <FormInput placeholder='Email'/>
                <FormInput placeholder='Birthday'/>
            </form>
        </div>
    );
}

export default Register;
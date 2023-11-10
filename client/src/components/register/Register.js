import React, { useState, useEffect } from 'react';
import './Register.css';
import FormInput from './FormInput';

function Register() {
    const [values, setValues] = useState({
        username: "",
        password: "",
        email: "",
        birthday: ""
    });

    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            label:"Username"
        },
        {
            id:2,
            name:"password",
            type:"password",
            placeholder:"Password",
            label:"Password"
        },
        {
            id:3,
            name:"email",
            type:"text",
            placeholder:"Email",
            label:"Email"
        },
        {
            id:4,
            name:"birthday",
            type:"text",
            placeholder:"Birthday",
            label:"Birthday"
        }
    ]

    const handleSubmit  = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    console.log(values);

    return (
        <div className='pageHolder'>
            <form onSubmit={handleSubmit}>
                {inputs.map(input=>(
                    <FormInput key={input.id} 
                    {...input} 
                    value={values[input.name]}
                    onChange={onChange}/>
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Register;
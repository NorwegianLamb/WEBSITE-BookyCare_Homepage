import React, { useState, useEffect } from 'react';
import './Register.css';
import FormInput from './FormInput';

function Register() {

    return (
        <div className='pageHolder'>
            <form>
                <FormInput/>
                <FormInput/>
                <FormInput/>
                <FormInput/>
            </form>
        </div>
    );
}

export default Register;
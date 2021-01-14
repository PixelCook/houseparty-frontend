import React, { useState } from 'react'
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../css/signin.css'
import { Link } from 'react-router-dom'

export default function Signin() {
    const [signUpValues, setSignUpValues] = useState({})

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const signUpValuesCopy = { ...signUpValues }
        signUpValuesCopy[name] = value
        setSignUpValues(signUpValuesCopy)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.post when backend is ready to receive
    }

    return (
        <div className='signup-form-wrapper'>
            <div className="signup-form">

                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input name='email' id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">First Name</InputLabel>
                    <Input name='firstName' id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Last Name</InputLabel>
                    <Input name='lastName' id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Username</InputLabel>
                    <Input name='username' id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input name='password1' type="password" id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                    <Input name='password2' type="password" id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                </FormControl>
                {signUpValues.password1 !== signUpValues.password2 && <p className='error'>Passwords don't match</p>}
            </div>
            <Button variant="contained" color="secondary" className='signup-btn'>Sign up</Button>
            <p>Already have an account? <Link to='/login'>Login</Link> </p>

        </div>
    )
}   

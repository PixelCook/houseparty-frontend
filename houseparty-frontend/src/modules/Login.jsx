import React, { useState } from 'react'
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../css/signin.css'
import { Link } from 'react-router-dom'

export default function Login() {
    const [loginValues, setSLginValues] = useState({})

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const loginValuesCopy = { ...loginValues }
        loginValuesCopy[name] = value
        setSLginValues(loginValuesCopy)
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
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input name='password1' type="password" id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                </FormControl>
            </div>
            <Button variant="contained" type='submit' color="secondary" className='signup-btn' onSubmit={handleSubmit}>Sign up</Button>
            <p>Don't have an account? <Link to='/signin'>Login</Link></p>

        </div>
    )
}
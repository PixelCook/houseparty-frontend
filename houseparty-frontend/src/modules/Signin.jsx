import React, { useState } from 'react'
import { Button, FormControl, InputLabel, Input, FormHelperText, Grid, Paper } from '@material-ui/core';
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
            <Grid container justify="center" alignItems="center" spacing={5}>
                <Paper>

                    <div className="signup-form">
                        <h3>Sign up</h3>
                        <Grid item xs={12} spacing={3} >
                            {/* <FormRow /> */}
                            <FormControl className='input-field'>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input name='email' id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} spacing={3}>
                            <FormControl className='input-field'>
                                <InputLabel htmlFor="my-input">First Name</InputLabel>
                                <Input name='firstName' id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} spacing={3}>
                            <FormControl className='input-field'>
                                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                                <Input name='lastName' id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} spacing={3}>
                            <FormControl className='input-field'>
                                <InputLabel htmlFor="my-input">Username</InputLabel>
                                <Input name='username' id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} spacing={3}>
                            <FormControl className='input-field'>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input name='password1' type="password" id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} spacing={3}>
                            <FormControl className='input-field'>
                                <InputLabel htmlFor="my-input" >Confirm Password</InputLabel>
                                <Input name='password2' type="password" id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                            </FormControl>
                            {signUpValues.password1 !== signUpValues.password2 && <p className='error'>Passwords don't match</p>}
                        </Grid>
                    </div>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" className='signup-btn'>Sign up</Button>
                    </Grid>
                    <Grid item xs={10}>
                        <div className="link">
                            <p>Already have an account? <Link to='/login'>Login</Link> </p>
                        </div>
                    </Grid>
                </Paper>
            </Grid>

        </div >
    )
}   

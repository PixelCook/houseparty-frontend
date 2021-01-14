import React, { useState } from 'react'
import { Button, FormControl, InputLabel, Input, Grid, Paper } from '@material-ui/core';
import '../css/signin.css'
import { Link } from 'react-router-dom'

export default function Login() {
    const [loginValues, setSLoginValues] = useState({})

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const loginValuesCopy = { ...loginValues }
        loginValuesCopy[name] = value
        console.log(loginValuesCopy);
        setSLoginValues(loginValuesCopy)
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
                        <h3>Log into your account</h3>
                        <Grid item xs={12} spacing={3}>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input name='email' id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} spacing={3}>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input name='password1' type="password" id="my-input" aria-describedby="my-helper-text" onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                    </div>
                    <Grid item xs={12}>
                        <Button variant="contained" type='submit' color="secondary" className='signup-btn' onSubmit={handleSubmit}>Sign up</Button>
                    </Grid>
                    <Grid item xs={10}>
                        <div className="link">
                            <p>Don't have an account? <Link to='/signin'>Login</Link></p>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}
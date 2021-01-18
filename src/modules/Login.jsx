import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Grid,
  Paper,
} from '@material-ui/core';
import '../CSS/signin.css';
import { Link } from 'react-router-dom';
import { loginUrl } from '../utils/config';
import axios from 'axios';

export default function Login() {
  const [loginValues, setSLoginValues] = useState({});
  const [error, setError] = useState('');

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const loginValuesCopy = { ...loginValues };
    loginValuesCopy[name] = value;
    console.log(loginValuesCopy);
    setSLoginValues(loginValuesCopy);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(loginUrl, loginValues);
      const token = response.data.token;
      localStorage.setItem('token', token);
      window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className='signup-form-wrapper'>
      <Grid container justify='center' alignItems='center' spacing={5}>
        <Paper>
          <div className='signup-form'>
            <h3>Log into your account</h3>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor='my-input'>Email address</InputLabel>
                <Input
                  name='email'
                  id='my-input'
                  aria-describedby='my-helper-text'
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor='my-input'>Password</InputLabel>
                <Input
                  name='password1'
                  type='password'
                  id='my-input'
                  aria-describedby='my-helper-text'
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            {error && (
              <Grid item xs={12}>
                {error}
              </Grid>
            )}
          </div>
          <Grid item xs={12}>
            <Button
              variant='contained'
              type='submit'
              color='secondary'
              className='signup-btn'
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={10}>
            <div className='link'>
              <p>
                Don't have an account? <Link to='/signin'>Sign up</Link>
              </p>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

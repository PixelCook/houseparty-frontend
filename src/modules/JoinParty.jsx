import React, { useState } from "react";
import "../CSS/home.css";
import Join from "../DesignImages/3.svg";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Grid
} from '@material-ui/core';
import '../CSS/joinparty.css'
import axios from 'axios'
import { joinPartyUrl } from '../utils/config'

export default function JoinParty() {
  const [joinPartyValue, setJoinPartyValue] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    const joinPartyValueCopy = { ...joinPartyValue };
    joinPartyValueCopy[name] = value;

    setJoinPartyValue(joinPartyValueCopy)
  }

  const handleJoinParty = async () => {
    try {

      console.log('before sending', joinPartyValue);
      const response = await axios.post(joinPartyUrl, joinPartyValue)
      const partyJoined = await response.data
      localStorage.setItem('partyId', partyJoined.partyId)
      window.location = '/home'
    } catch (err) {
      alert(err.response.data);
    }
  }


  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Join})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <div className='joinparty-wrapper'>
        <Grid container>
          <Grid item xs={11}>
            <h4 className='joinparty-ready'>Ready to Join a Party?</h4>
          </Grid>
          <Grid item xs={11}>
            <FormControl>
              <InputLabel htmlFor='my-input'>Party ID</InputLabel>
              <Input
                name='partyId'
                id='my-input'
                aria-describedby='my-helper-text'
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={11}>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleJoinParty}
            >
              Join
          </Button>
          </Grid>

        </Grid>
      </div>

    </div>
  );
}
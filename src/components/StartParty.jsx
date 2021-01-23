import React, { useState, useContext } from 'react';
import startparty from '../DesignImages/2.svg';
import { Grid, Button } from '@material-ui/core';
import '../CSS/startparty.css';
import userContext from '../context/userContext';
import axios from 'axios';
import { startPartyUrl } from '../utils/config';

export default function StartParty() {
  const date = new Date();
  const [startPartyValues, setStartPartyValues] = useState({});
  const [selectedDate, setSelectedDate] = useState(
    date.toISOString().split('T')[0]
  );
  const [partyCreated, setPartyCreated] = useState('');

  const { user } = useContext(userContext);

  const handleDateChange = (e) => {
    const startPartyValuesCopy = { ...startPartyValues };
    console.log(e.target.value);
    const { value, name } = e.target;
    startPartyValuesCopy['userId'] = user.id;
    startPartyValuesCopy[name] = value;
    setSelectedDate(value);
    setStartPartyValues(startPartyValuesCopy);
  };

  const handleCreateParty = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(startPartyUrl, startPartyValues, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });
      const partyId = response.data;
      setPartyCreated(partyId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid container justify='space-around' spacing={3}>
      <div
        className='background'
        style={{
          backgroundImage: `url(${startparty})`,
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          backgroundSize: '100% 100%',
        }}
      >
        <div>
          {/* <h1 className='startaparty' style={{ color: '#F90040' }}>
            Throw A Party
          </h1> */}
          <p className='startaparty-msg'>
            {' '}
            A party always starts when you're here, take the lead
          </p>
        </div>
        <h3 className='startaparty-when'>When is your Party happening?</h3>
        <div className='startaparty-form'>
          <Grid item xs={11}>
            <input
              type='date'
              id='start'
              name='date'
              value={selectedDate}
              min={date.toISOString().split('T')[0]}
              onChange={handleDateChange}
            />
          </Grid>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleCreateParty}
          >
            Create Party
          </Button>
        </div>
        {partyCreated && (
          <div className='createdParty'>
            {' '}
            You have created a party! It's ID number is
            <div className='partyId'>{partyCreated}</div>
          </div>
        )}
      </div>
    </Grid>
  );
}

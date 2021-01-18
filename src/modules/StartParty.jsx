import React, { useState } from "react";
import startparty from "../DesignImages/2.svg";
import { Grid, Button } from '@material-ui/core';
import '../CSS/startparty.css'


export default function StartParty() {
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date.toISOString().split('T')[0]);


  const handleDateChange = (e) => {
    console.log(e.target.value);
    setSelectedDate(e.target.value);
  }

  const handleCreateParty = (e) => {
    e.preventDefault()

  }

  return (
    <Grid container justify="space-around" className='startaparty-wrapper'>
      <div
        className="background"
        style={{
          backgroundImage: `url(${startparty})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "100% 100%",
        }}
      ><div>
          <h1 className="startaparty" style={{ color: "#F90040" }}>Throw A Party</h1>
          <p className="startaparty-msg" > A party always starts when you're here, take the lead</p>
        </div>
        <h3 className="startaparty-when">When is your Party happening?</h3>
        <div className="startaparty-form">
          <Grid item xs={11}>
            <input type="date" id="start" name="trip-start"
              value={selectedDate}
              min={date.toISOString().split('T')[0]}
              onChange={handleDateChange}
            />
          </Grid>
          <Button variant="contained" color="secondary" onClick={handleCreateParty}>
            Create Party</Button>
        </div>
      </div>
    </Grid>
  );
}

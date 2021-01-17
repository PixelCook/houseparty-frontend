import React, { useState } from "react";
import "../CSS/startparty.css";
import startparty from "../DesignImages/2.svg";
import { Grid, Paper, Button } from '@material-ui/core';


export default function StartParty() {
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date.toISOString().split('T')[0]);


  const handleDateChange = (e) => {
    console.log(e.target.value);
    setSelectedDate(e.target.value);
  }

  const handleCreateParty = (e) => {
    console.log('party created for', selectedDate);

  }

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${startparty})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <h1 className="startaparty" style={{ color: "#F90040" }}>Throw A Party</h1>
      <p>A party always starts when you're here, take the lead</p>
      <Grid container justify="space-around">
        <Paper>
          <h3>When is your Party happening?</h3>
          <input type="date" id="start" name="trip-start"
            value={selectedDate}
            min={date.toISOString().split('T')[0]}
            onChange={handleDateChange}
          />
          <Button variant="contained" color="secondary" onClick={handleCreateParty}>
            Create Party</Button>
        </Paper>
      </Grid>
    </div>
  );
}

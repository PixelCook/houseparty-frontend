import React, { useState, useContext } from "react";
import startparty from "../DesignImages/2.svg";
import { Grid, Button } from "@material-ui/core";
import "../CSS/startparty.css";
import userContext from "../context/userContext";
import axios from "axios";
import { startPartyUrl } from "../utils/config";

export default function StartParty() {
  // const date = new Date();
  // const [startPartyValues, setStartPartyValues] = useState('');
  // const [selectedDate, setSelectedDate] = useState(
  // date.toISOString().split('T')[0]
  // );
  const [partyCreated, setPartyCreated] = useState("");

  const { user } = useContext(userContext);

  const handleCreateParty = async (e) => {
    e.preventDefault();

    const partyData = { userId: user.id, username: user.username };

    try {
      const response = await axios.post(startPartyUrl, partyData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });

      const partyCreated = response.data;
      localStorage.setItem("party", JSON.stringify(partyCreated));
      setPartyCreated(partyCreated.partyId);
      window.location = `/start-party/select/id=:${partyCreated.partyId}`;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid container justify="space-around" spacing={3}>
      <div
        className="background"
        style={{
          backgroundImage: `url(${startparty})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "100% 100%",
        }}
      >
        <div>
          <p className="startaparty-msg">
            {" "}
            A party always starts when you're here, take the lead
          </p>
        </div>
        <div className="startaparty-form">
         
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCreateParty}
          >
            Create Party
          </Button>
        </div>
        {partyCreated && (
          <div className="createdParty">
            {" "}
            You have created a party! It's ID number is
            <div className="partyId">{partyCreated}</div>
          </div>
        )}
      </div>
    </Grid>
  );
}

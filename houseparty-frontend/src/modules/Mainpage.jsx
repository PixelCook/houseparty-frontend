import React from "react";
import "../CSS/mainpage.css";
import background from "../DesignImages/1.svg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function Mainpage() {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <h1 style={{ color: "#F90040" }}>HouseParty</h1>
          <div className="signin">
          <a href="signup"><Button variant="contained" color="primary">Sign Up</Button></a>
          </div>
        </Grid>
        <Grid item xs={12}>
          <h2 style={{ color: "#F1F1F2" }}>PARTY JUKEBOX</h2>
        </Grid>
      </Grid>
    </div>
  );
}

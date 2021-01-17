import React, { useState } from "react";
import "../CSS/home.css";
import Mainpage from "../modules/Mainpage";
import StartParty from "../modules/StartParty";
import JoinParty from "../modules/JoinParty";
import Profile from "../modules/Profile";

const Home = () => {
  const [auth, setAuth] = useState("");

  if (auth) {
    return (
      <div>
        <StartParty />
        <JoinParty />
        <Profile />
      </div>
    );
  }
  return (
    <>
      <div className="main">
        <Mainpage />
      </div>
    </>
  );
};

export default Home;

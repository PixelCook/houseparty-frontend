import React, { useContext } from "react";
import "../CSS/home.css";
import Mainpage from "../modules/Mainpage";
import StartParty from "../modules/StartParty";
import JoinParty from "../modules/JoinParty";
import Profile from "../modules/Profile";
import AuthContext from "../context/userContext";
import SpotifyLogin from "../modules/SpotifyLogin";

const Home = () => {
  const { user } = useContext(AuthContext);

  // Render

  // AuthRender
  if (user) {
    return (
      <div>
        <StartParty />
        <JoinParty />
        <Profile />
        <SpotifyLogin />
      </div>
    );
  }

  // NeedsSignin Render
  return (
    <>
      <div className="main">
        <Mainpage />
      </div>
    </>
  );
};

export default Home;

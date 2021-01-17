import React, { useState } from "react";
import "../CSS/home.css";
import Mainpage from "../modules/Mainpage";
import StartParty from "../modules/StartParty";
import JoinParty from "../modules/JoinParty";
import Profile from "../modules/Profile";





const Home = () => {
  //  Hooks
  const [auth, setAuth] = useState(false);


  // AuthCheck
  const checkAuth = () => {
    const auth = localStorage.getItem('token')
    if (auth){
      setAuth(true)
    }
  }


  // Render

  // AuthRender
  if (auth) {
    return (
      <div>
        <StartParty />
        <JoinParty />
        <Profile />
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

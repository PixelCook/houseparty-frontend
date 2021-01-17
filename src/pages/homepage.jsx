<<<<<<< HEAD
import React from 'react';
import '../CSS/home.css';
import Mainpage from '../modules/Mainpage';
import StartParty from '../modules/StartParty';
import JoinParty from '../modules/JoinParty';
import Profile from '../modules/Profile';
import SpotifyLogin from '../modules/SpotifyLogin';
=======
import React, {useContext} from "react";
import "../CSS/home.css";
import Mainpage from "../modules/Mainpage"
import StartParty from "../modules/StartParty"
import JoinParty from "../modules/JoinParty"
import Profile from "../modules/Profile"
import AuthContext from "../context/userContext" 

>>>>>>> navbar

const Home = () => {
  const { user } = useContext(AuthContext)


  // Render

  // AuthRender
  if (user) {
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
      <div className='main'>
        <Mainpage />
<<<<<<< HEAD
        <StartParty />
        <JoinParty />
        <Profile />
        <SpotifyLogin />
=======
>>>>>>> navbar
      </div>
    </>
  );
};
<<<<<<< HEAD

export default Home;
=======

export default Home;

>>>>>>> navbar

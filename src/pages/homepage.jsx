import React, { useContext, useEffect } from 'react';
import '../CSS/home.css';
import Mainpage from '../modules/Mainpage';
import StartParty from '../modules/StartParty';
import JoinParty from '../modules/JoinParty';
import Profile from '../modules/Profile';
import AuthContext from '../context/userContext';
import SpotifyLogin from '../modules/SpotifyLogin';
import queryString from 'query-string';
import AboutUs from "../modules/AboutUs"

const Home = (props) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // store spotify token in localStorage
    const parsedHash = queryString.parse(window.location.hash);

    if (parsedHash.access_token) {
      localStorage.setItem('spotifyToken', JSON.stringify(parsedHash));
    }
  }, []);

  // Render

  // AuthRender
  if (user) {
    return (
      <div>
        <StartParty />
        <JoinParty />
        <Profile />
        <SpotifyLogin />
        <AboutUs/>
      </div>
    );
  }

  // NeedsSignin Render
  return (
    <>
      <div className='main'>
        <Mainpage />
      </div>
    </>
  );
};

export default Home;

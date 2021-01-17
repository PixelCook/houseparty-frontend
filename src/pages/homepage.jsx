import React from 'react';
import '../CSS/home.css';
import Mainpage from '../modules/Mainpage';
import StartParty from '../modules/StartParty';
import JoinParty from '../modules/JoinParty';
import Profile from '../modules/Profile';
import SpotifyLogin from '../modules/SpotifyLogin';

const Home = () => {
  return (
    <>
      <div className='main'>
        <Mainpage />
        <StartParty />
        <JoinParty />
        <Profile />
        <SpotifyLogin />
      </div>
    </>
  );
};

export default Home;

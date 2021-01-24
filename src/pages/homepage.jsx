import React, { useContext, useEffect } from 'react';
import '../CSS/home.css';
import Mainpage from '../components/Mainpage';
import StartParty from '../components/StartParty';
import JoinParty from '../components/JoinParty';
import AuthContext from '../context/userContext';
import queryString from 'query-string';
import AboutUs from '../components/AboutUs';
import { authOptionsGetRefresh } from '../lib/spotifyApi';

const Home = (props) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // store spotify token in localStorage
    const parsedHash = queryString.parse(window.location.search);

    if (parsedHash) {
      authOptionsGetRefresh(parsedHash).then((response) => {
        localStorage.setItem(
          'spotifyToken',
          JSON.stringify(response.data.body)
        );
      });
    }
  }, []);

  // AuthRender
  if (user) {
    return (
      <div>
        <StartParty />
        <JoinParty />
        {/* <Profile /> */}
        <AboutUs />
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

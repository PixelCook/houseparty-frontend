import React, { useContext, useEffect, useState } from 'react';
import '../CSS/home.css';
import Mainpage from '../components/Mainpage';
import StartParty from '../components/StartParty';
import JoinParty from '../components/JoinParty';
import AuthContext from '../context/userContext';
import queryString from 'query-string';
import AboutUs from '../components/AboutUs';
import Modal from '../components/Modal';
import Profile from '../components/Profile';
import cookie from 'react-cookies';

import { authOptionsGetRefresh } from '../lib/spotifyApi';

const Home = (props) => {
  const { user } = useContext(AuthContext);
  const [cookieSpotify, setCookieSpotify] = useState(null);

  console.log(cookieSpotify);

  useEffect(() => {
    // store spotify token in cookie
    const parsedHash = queryString.parse(window.location.search);

    if (
      localStorage.getItem('token') &&
      (!cookie.load('spotifyToken') || cookie.load('spotifyToken').error)
    ) {
      cookie.remove('spotifyToken');

      authOptionsGetRefresh(parsedHash).then((response) => {
        cookie.save('spotifyToken', response.data.body, {
          path: '/',
          expires: new Date(Date.now() + 3000),
          maxAge: 3000,
        });

        setCookieSpotify(cookie.load('spotifyToken'));
      });
    } else {
      setCookieSpotify(cookie.load('spotifyToken'));
    }
  }, []);

  // AuthRender
  if (user) {
    return (
      <div>
        {!cookieSpotify || (cookieSpotify.error && <Modal true={true} />)}
        <StartParty />
        <JoinParty />
        <Profile />
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

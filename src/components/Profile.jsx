import React from 'react';
import '../CSS/home.css';
import profile from '../DesignImages/4.svg';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';
import cookie from 'react-cookies';

import { getProfileData } from '../lib/spotifyApi';
import PlaylistList from './PlaylistList';

const Profile = () => {
  const [userDataSpotify, setUserDataSpotify] = useState({});
  const [logInData, setLogInData] = useState({});
  const [loader, setLoader] = useState(true);
  const [loginMassage, setLoginMassage] = useState(false);

  useEffect(() => {
    if (cookie.load('spotifyToken')) {
      getProfileData().then((response) => {
        setUserDataSpotify(response.data);

        const userToken = localStorage.getItem('token');
        const tokenDecoded = jwt_decode(userToken);

        setLogInData(tokenDecoded);
        setLoader(false);
      });
    } else {
<<<<<<< HEAD
      // window.location = 'home';
=======
      setLoginMassage(true);
      setLoader(false);
>>>>>>> 5fcb9ae9e7599ecb6cf3c79cba673e76178b15fe
    }
  }, []);

  if (!loader) {
    if (loginMassage) {
      return (
        <div>
          <h1>Please login</h1>
          <p>Please log in so you can access your profile</p>
        </div>
      );
    }
    return (
      <>
        <div
          className='background'
          style={{
            backgroundImage: `url(${profile})`,
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            backgroundSize: '100% 100%',
          }}
        >
          <Box width={1 / 3}>
            <Image src={`${userDataSpotify.images[0].url}`} disableSpinner />
          </Box>

          <p>
            name: {logInData.firstName} {logInData.lastName}
          </p>
          <p>email: {logInData.email}</p>
        </div>

        <PlaylistList />
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Profile;

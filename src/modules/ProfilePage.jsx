import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';

import { getProfileData } from '../lib/spotifyApi';
import '../CSS/profileImage.css';

const ProfilePage = () => {
  const [userDataSpotify, setUserDataSpotify] = useState({});
  const [logInData, setLogInData] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('spotifyToken')) {
      getProfileData().then((response) => {
        setUserDataSpotify(response.data);

        const userToken = localStorage.getItem('token');
        const tokenDecoded = jwt_decode(userToken);

        setLogInData(tokenDecoded);
        setLoader(false);
      });
    } else {
      window.location = 'home';
    }
  }, []);

  if (!loader) {
    return (
      <>
        <h1>Profile Page</h1>

        <Box width={1 / 3}>
          <Image src={`${userDataSpotify.images[0].url}`} disableSpinner />
        </Box>

        <p>
          name: {logInData.firstName} {logInData.lastName}
        </p>
        <p>email: {logInData.email}</p>
      </>
    );
  } else {
    return <h1>loading...</h1>;
  }
};

export default ProfilePage;

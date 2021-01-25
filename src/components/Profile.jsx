import React from "react";
import "../CSS/home.css";
import profile from "../DesignImages/4.svg";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Image from "material-ui-image";
import Box from "@material-ui/core/Box";
import cookie from "react-cookies";

import { getProfileData } from "../lib/spotifyApi";
import PlaylistList from "./PlaylistList";

const Profile = () => {
  const [userDataSpotify, setUserDataSpotify] = useState({});
  const [logInData, setLogInData] = useState({});
  const [loader, setLoader] = useState(true);
  const [loginMessage, setLoginMassage] = useState(false);

  useEffect(() => {
    if (cookie.load("spotifyToken")) {
      getProfileData().then((response) => {
        setUserDataSpotify(response.data);

        const userToken = localStorage.getItem("token");
        const tokenDecoded = jwt_decode(userToken);

        setLogInData(tokenDecoded);
        setLoader(false);
      });
    } else {
      setLoginMassage(true);
      setLoader(false);
    }
  }, []);

  const showImage = () => {
    return (
      <Box width={1 / 3}>
        <Image src={`${userDataSpotify.images[0].url}`} disableSpinner />
      </Box>
    );
  };

  if (!loader) {
    if (loginMessage) {
      return (
        <div
          className="background"
          style={{
            backgroundImage: `url(${profile})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "100% 100%",
          }}
        >
          <h1>Please login</h1>
          <p>Please log in so you can access your profile</p>
        </div>
      );
    }
    return (
      <>
        <div
          className="background"
          style={{
            backgroundImage: `url(${profile})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="profile-display">
            {userDataSpotify.images[0] && showImage()}

            <h3>
              Name: {logInData.firstName} {logInData.lastName}
            </h3>
            <h4>Email: {logInData.email}</h4>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Profile;

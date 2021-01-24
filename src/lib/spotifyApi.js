import axios from 'axios';

const getProfileData = () => {
  const localSpotify = JSON.parse(localStorage.getItem('spotifyToken'));

  return axios.get('https://api.spotify.com/v1/me', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localSpotify.token_type} ${localSpotify.access_token}`,
    },
  });
};

const getProfilePlayList = () => {
  const localSpotify = JSON.parse(localStorage.getItem('spotifyToken'));

  return axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localSpotify.token_type} ${localSpotify.access_token}`,
    },
  });
};

export { getProfileData, getProfilePlayList };

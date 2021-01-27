import axios from 'axios';
import { spotifyToken, spotifyDeleteSong } from './url';
import cookie from 'react-cookies';

const deleteSong = (playlistId, songId) => {
  const localSpotify = cookie.load('spotifyToken');
  const localToken = localStorage.getItem('token');

  axios({
    method: 'DELETE',
    url: spotifyDeleteSong,
    headers: {
      'Content-Type': 'application/json',
      spotifyAuthorization: `${localSpotify.token_type} ${localSpotify.access_token}`,
      authorization: localToken,
    },
    data: {
      playlistId,
      songId,
    },
  });
};

const changePlaylistToCpllaborative = (playlistId) => {
  const localSpotify = cookie.load('spotifyToken');

  return axios.put(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    { public: false, collaborative: true },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localSpotify.token_type} ${localSpotify.access_token}`,
      },
    }
  );
};

const getSearchData = (searchValue) => {
  const localSpotify = cookie.load('spotifyToken');
  return axios.get(
    `https://api.spotify.com/v1/search?q=${searchValue}&type=track&market=US&limit=20`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localSpotify.token_type} ${localSpotify.access_token}`,
      },
    }
  );
};

const addSong = (playlist_id, songId) => {
  console.log(playlist_id);
  const localSpotify = cookie.load('spotifyToken');

  return axios.post(
    `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?uris=spotify%3Atrack%3A${songId}`,
    {},
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${localSpotify.token_type} ${localSpotify.access_token}`,
      },
    }
  );
};

const getProfileData = () => {
  const localSpotify = cookie.load('spotifyToken');

  return axios.get('https://api.spotify.com/v1/me', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localSpotify.token_type} ${localSpotify.access_token}`,
    },
  });
};

const getProfilePlayList = () => {
  const localSpotify = cookie.load('spotifyToken');

  return axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localSpotify.token_type} ${localSpotify.access_token}`,
    },
  });
};

const getPlaylistMusic = (playlistId) => {
  const localSpotify = cookie.load('spotifyToken');

  return axios.get(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=IL`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localSpotify.token_type} ${localSpotify.access_token}`,
      },
    }
  );
};

const authOptionsGetRefresh = (token) => {
  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

  return axios.post(spotifyToken, {
    headers: {
      'Content-Type': 'application/json',
    },
    Authorization: {
      clientId: REACT_APP_CLIENT_ID,
      secret: REACT_APP_CLIENT_SECRET,
      spotifyToken: token.code,
    },
  });
};

export {
  getProfileData,
  getProfilePlayList,
  getPlaylistMusic,
  authOptionsGetRefresh,
  getSearchData,
  addSong,
  changePlaylistToCpllaborative,
  deleteSong,
};

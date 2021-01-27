import axios from 'axios';
import { spotifyToken } from './url';
import cookie from 'react-cookies';

const changePlaylistToCpllaborative = (playlistId) => {
  const localSpotify = cookie.load('spotifyToken');

  return axios.put(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    { collaborative: true },
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
  const localSpotify = cookie.load('spotifyToken');
  return axios.post(
    `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?uris=spotify%3Atrac${songId}`,
    {
      headers: {
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
};

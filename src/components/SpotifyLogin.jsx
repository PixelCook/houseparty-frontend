import Button from '@material-ui/core/Button';

const SpotifyLogin = () => {
  const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URL } = process.env;

  const handleLogin = () => {
    const scopes =
      'ugc-image-upload user-read-recently-played user-read-playback-state app-remote-control playlist-modify-public playlist-modify-private user-read-currently-playing playlist-read-private playlist-read-collaborative';

    const url =
      'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' +
      REACT_APP_CLIENT_ID +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' +
      encodeURIComponent(REACT_APP_REDIRECT_URL);

    window.location = url;
  };

  return (
    <Button variant='contained' type='submit' onClick={handleLogin}>
      Login to spotify
    </Button>
  );
};

export default SpotifyLogin;

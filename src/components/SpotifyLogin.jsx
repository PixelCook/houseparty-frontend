import Button from '@material-ui/core/Button';

const SpotifyLogin = () => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <Button variant='contained' type='submit' onClick={handleLogin}>
      Login to spotify
    </Button>
  );
};

export default SpotifyLogin;

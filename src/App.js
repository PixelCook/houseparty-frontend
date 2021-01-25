import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/homepage';
import Signin from './components/Signin';
import Login from './components/Login';
import LogOut from './components/LogOut';
import UserContext from './context/userContext';
import SpotifyContext from './context/spotifyContext'
import jwt_decode from 'jwt-decode';
import Navbar from './components/Navbar';
import StartParty from './components/StartParty';
import Profile from './components/Profile';
import JoinParty from './components/JoinParty';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import PlatlistPage from './components/PlatlistPage';
import cookie from 'react-cookies';


function App() {
  const [user, setUser] = useState();
  const [spotifyToken, setSpotifyToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded);
    }
    const localSpotify = cookie.load("spotifyToken");
    if (localSpotify) {
      setSpotifyToken(localSpotify)
    }
  }, []);

  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        <SpotifyContext.Provider value={{spotifyToken, setSpotifyToken}}>
        <Navbar />
        <Router>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/playlist/id=:id' component={PlatlistPage} />
            {/*  <Route path='/connect' /> do we need it? */}
            <Route path='/login' component={Login} />
            <Route path='/join' component={JoinParty} />
            <Route path='/logout' component={LogOut} />
            <Route path='/signin' component={Signin} />
            <Route path='/start-party' component={StartParty} />
            <Redirect to='/home' />
          </Switch>
        </Router>
        </SpotifyContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

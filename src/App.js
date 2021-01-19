import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/homepage';
import Signin from './modules/Signin';
import Login from './modules/Login';
import LogOut from './modules/LogOut';
import UserContext from './context/userContext';
import jwt_decode from 'jwt-decode';
import Navbar from './modules/Navbar';
import ProfilePage from './modules/ProfilePage';
import StartParty from '../src/modules/StartParty';
import Profile from './modules/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded);
    }
  }, []);

  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Router>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
            {/*  <Route path='/connect' /> do we need it? */}
            <Route path='/login' component={Login} />
            <Route path='/logout' component={LogOut} />
            <Route path='/signin' component={Signin} />
            <Route path='/start-party' component={StartParty} />
            <Redirect to='/home' />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

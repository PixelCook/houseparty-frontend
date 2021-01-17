import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/homepage"

import home from './pages/home'
import Signin from './modules/Signin'
import Login from './modules/Login'
import LogOut from './modules/LogOut';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
<<<<<<< HEAD
  return <>
  <Router>
    <Switch>
      <Route>
        <Home/>
      </Route>
    </Switch>
  </Router>
  </>;
=======
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/logout' component={LogOut} />
          <Route path='/signin' component={Signin} />
          <Redirect to='/home' />
        </Switch>

      </Router>
    </div>
  );
>>>>>>> 2e366a9ce4831600f13b938577aff2a8583ce02a
}

export default App;

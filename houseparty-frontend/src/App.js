import logo from './logo.svg';
import './App.css';

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
}

export default App;

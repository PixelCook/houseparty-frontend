import logo from './logo.svg';
import './App.css';
import Signin from './modules/Signin'
import Login from './modules/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signin' component={Signin} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;

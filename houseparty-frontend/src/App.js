import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/homepage"

function App() {
  return <>
  <Router>
    <Switch>
      <Route>
        <Home/>
      </Route>
    </Switch>
  </Router>
  </>;
}

export default App;

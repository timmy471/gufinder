import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import About from "./components/pages/About";
import Navbar from "./components/layouts/Navbar";
import Home from './components/pages/Home';
import User from "./components/pages/User";


import "./App.css";

function App() {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
          <Switch> 
             <Route exact path = '/' component={Home} />
             <Route exact path = '/about' component = {About} />
              <Route exact path = '/user/:login' component={User} /> 
          </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;

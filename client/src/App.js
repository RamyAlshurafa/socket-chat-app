import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

import "./App.css";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router exact path="/">
            <Chat />
          </Router>

          <Router exact path="/login">
            <Login />
          </Router>

          <Router>
            <h1>Login2</h1>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

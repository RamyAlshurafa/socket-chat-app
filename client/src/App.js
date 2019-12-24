import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Chat from "./pages/Chat";

import "./App.css";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <div className="container clearfix">
        <Router>
          <Switch>
            <Router exact path="/">
              <Chat />
            </Router>

            <Router exact path="/login">
              <h1>Login</h1>
            </Router>

            <Router>
              <h1>Login2</h1>
            </Router>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

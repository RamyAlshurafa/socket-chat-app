import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

import "./App.css";
import "./style.scss";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? (
              <Chat userInfo={userInfo} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route
            exact
            path="/login"
            component={({ history }) => (
              <Login
                setUserInfo={setUserInfo}
                setIsAuthenticated={setIsAuthenticated}
                history={history}
              />
            )}
          />

          <Route>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

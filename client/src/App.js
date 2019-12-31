import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import axios from "axios";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

import "./App.css";
import "./style.scss";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchUserInfo = async () => {
    try {
      const { data } = await axios.get("/api/users/auth");
      setUserInfo(data);
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

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
            component={({ history }) =>
              !isAuthenticated ? (
                <Login
                  setUserInfo={setUserInfo}
                  setIsAuthenticated={setIsAuthenticated}
                  history={history}
                />
              ) : (
                <Redirect to="/" />
              )
            }
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

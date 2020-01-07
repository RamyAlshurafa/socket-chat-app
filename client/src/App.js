import React, { useContext } from "react";

import "antd/es/notification/style/css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { UserContext } from "./user-context";

import "./App.css";
import "./style.scss";

function App() {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? <Chat /> : <Redirect to="/login" />}
          </Route>

          <Route
            exact
            path="/login"
            component={({ history }) =>
              !isAuthenticated ? (
                <Login history={history} />
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

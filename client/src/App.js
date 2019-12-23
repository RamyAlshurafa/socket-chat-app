import React from "react";
import "./App.css";
import "./style.scss";
import UsersList from "./components/UsersList";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <div className="container clearfix">
        <UsersList />

        <Chat />
      </div>
    </div>
  );
}

export default App;

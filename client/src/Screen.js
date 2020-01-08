import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import { UserContext } from "./user-context";
import { SocketContext } from "./socket-context";

import App from "./App";

export default () => {
  const [userInfo, setUserInfo] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [connectedUsersIds, setConnectedUsersIds] = useState([]);
  const [newMessage, setNewMessage] = useState(null);

  const disconnect = () => {
    const socket = io();
    socket.emit("disconnect");
  };

  const connectToSocket = () => {
    const socket = io();

    socket.on("connect", () => {
      socket.on("connectedUser", connectedIds => {
        setConnectedUsersIds(connectedIds);
      });
      socket.on(
        "new message",
        ({ toId, body, fromId, firstName, lastName, id, createdAt }) => {
          setNewMessage({
            toId,
            body,
            fromId,
            firstName,
            lastName,
            id,
            createdAt,
          });
        }
      );
    });
  };

  useEffect(() => {
    if (userInfo.id) {
      connectToSocket();
      return () => disconnect();
    }
    return undefined;
  }, [userInfo.id]);

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
    <UserContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userInfo, setUserInfo }}
    >
      <SocketContext.Provider
        value={{
          connectedUsersIds,
          setConnectedUsersIds,
          newMessage,
          setNewMessage,
        }}
      >
        <App />
      </SocketContext.Provider>
    </UserContext.Provider>
  );
};

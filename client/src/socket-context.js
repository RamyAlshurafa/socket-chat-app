import React from "react";

export const SocketContext = React.createContext({
  connectedUsersIds: [],
  setConnectedUsersIds: () => {},
  newMessage: null,
  setNewMessage: () => {},
});

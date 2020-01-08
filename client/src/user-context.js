import React from "react";

export const UserContext = React.createContext({
  userInfo: {},
  setUserInfo: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

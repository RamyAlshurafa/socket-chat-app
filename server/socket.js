/* eslint-disable no-param-reassign */
const Socket = require("socket.io");
const message = require("./use-cases/message");

const { parseCookies } = require("./auth");
const { tokenAuthentication, getUserInfo: makeGetUserInfoMiddleware } = require("./middlewares");
const { user: { getUserInfo } } = require("./use-cases");

const getUserInfoMiddleware = makeGetUserInfoMiddleware({ getUserInfo });

const tokenName = "token";

const userIdToSocketIdMap = {};

const initializeSocket = (server) => {
  const io = Socket(server, {
    // path: "/",
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: true,
  });

  io.use((socket, next) => {
    if (socket.request.headers.cookie) {
      const cookies = parseCookies(socket.request.headers.cookie);
      socket[tokenName] = cookies[tokenName];
      return next();
    }
    return next(new Error("Authentication error"));
  });

  io.use((socket, next) => {
    if (socket[tokenName]) {
      const { userId } = tokenAuthentication(tokenName)(socket.request);
      socket.userId = userId;
      return next();
    }
    return next(new Error("Authentication error"));
  });


  io.use(async (socket, next) => {
    if (socket[tokenName]) {
      const { userId } = socket;
      const { user } = await getUserInfoMiddleware({ userId });
      socket.user = user;
      return next();
    }
    return next(new Error("Authentication error"));
  });

  const updateOnlineUsers = (socket, isOnline) => {
    const connectedSocketes = Object.values(io.sockets.clients().sockets);
    const Ids = connectedSocketes.map((i) => i.user.id);
    io.emit("connectedUser", Ids);
    if (isOnline) {
      userIdToSocketIdMap[socket.userId] = socket.id;
    } else {
      delete userIdToSocketIdMap[socket.userId];
    }
  };


  io.on("connection", (socket) => {
    updateOnlineUsers(socket, true);
    socket.on("disconnect", () => {
      updateOnlineUsers(socket, false);
    });
  });

  message.on("privateMessageAdded", ({
    toId, body, fromId, firstName, lastName, id, createdAt,
  }) => {
    io.to(userIdToSocketIdMap[toId]).emit("new message", {
      toId, body, fromId, firstName, lastName, id, createdAt,
    });
  });
};
module.exports = initializeSocket;

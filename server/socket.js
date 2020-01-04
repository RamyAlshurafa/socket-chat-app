/* eslint-disable no-param-reassign */
const Socket = require("socket.io");
const { parseCookies } = require("./auth");
const { tokenAuthentication, getUserInfo: makeGetUserInfoMiddleware } = require("./middlewares");
const { user: { getUserInfo } } = require("./use-cases");

const getUserInfoMiddleware = makeGetUserInfoMiddleware({ getUserInfo });

const tokenName = "token";


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

  const updateOnlineUsers = () => {
    const connectedSocketes = Object.values(io.sockets.clients().sockets);
    const Ids = connectedSocketes.map((i) => i.user.id);
    io.emit("connectedUser", Ids);
  };


  io.on("connection", (socket) => {
    updateOnlineUsers();
    socket.on("disconnect", () => {
      updateOnlineUsers();
    });
  });
};
module.exports = initializeSocket;

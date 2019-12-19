const debug = require("debug")("server:server");
const http = require("http");

// read the config file
// require("dotenv")("./.env");


const app = require("./app");

const server = http.createServer(app);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

const port = 8080;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case "EACCES":
    console.error(`${bind} requires elevated privileges`);
    process.exit(1);
    break;
  case "EADDRINUSE":
    console.error(`${bind} is already in use`);
    process.exit(1);
    break;
  default:
    throw error;
  }
}


server.on("error", onError);
server.on("listening", onListening);

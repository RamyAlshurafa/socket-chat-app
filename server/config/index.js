/* eslint-disable global-require */
// read the config file
// don't load .env in local production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config("./.env");
}

const server = require("./components/server");
const common = require("./components/common");
const sqlDatabase = require("./components/database");

module.exports = Object.freeze({
  server,
  common,
  sqlDatabase,
});

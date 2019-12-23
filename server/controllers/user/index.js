const makeGetUsers = require("./getUsers");
// require use cases
const {
  user:
  { getUsers },
} = require("./../../use-cases/index");

module.exports = Object.freeze({
  getUsers: makeGetUsers({ getUsers }),
});

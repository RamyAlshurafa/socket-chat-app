const makeGetUsers = require("./getUsers");
const { user: userDB } = require("../../data-access");

module.exports = {
  getUsers: makeGetUsers({ userDB }),
};

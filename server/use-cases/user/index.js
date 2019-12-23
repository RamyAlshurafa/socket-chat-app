const makeGetUsers = require("./getUsers");
const { user: userDB } = require("../../data-access");
const { convertToCamalCase } = require("./../../helpers");

module.exports = {
  getUsers: makeGetUsers({ userDB, convertToCamalCase }),
};

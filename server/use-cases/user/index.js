const makeGetUsers = require("./getUsers");
const makeCheckUserLogin = require("./checkUserLogin");

const { user: userDB } = require("../../data-access");
const { convertToCamalCase, createToken } = require("./../../helpers");

module.exports = {
  getUsers: makeGetUsers({ userDB, convertToCamalCase }),
  checkUserLogin: makeCheckUserLogin({ userDB, convertToCamalCase, createToken }),
};

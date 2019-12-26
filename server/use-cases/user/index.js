const makeGetUsers = require("./getUsers");
const makeCheckUserLogin = require("./checkUserLogin");
const makeGetUserInfo = require("./getUserInfo");

const { user: userDB } = require("../../data-access");
const { convertToCamalCase } = require("./../../helpers");
const { createToken } = require("./../../auth");

module.exports = {
  getUsers: makeGetUsers({ userDB, convertToCamalCase }),
  checkUserLogin: makeCheckUserLogin({ userDB, convertToCamalCase, createToken }),
  getUserInfo: makeGetUserInfo({ userDB, convertToCamalCase }),
};

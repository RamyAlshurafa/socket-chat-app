const makeGetUsers = require("./getUsers");
const makeCheckUserLogin = require("./checkUserLogin");
const makeGetUserInfo = require("./getUserInfo");

const { User } = require("../../data-access");
const { convertToCamalCase } = require("./../../helpers");
const { createToken } = require("./../../auth");

module.exports = {
  getUsers: makeGetUsers({ User, convertToCamalCase }),
  checkUserLogin: makeCheckUserLogin({ User, convertToCamalCase, createToken }),
  getUserInfo: makeGetUserInfo({ User, convertToCamalCase }),
};

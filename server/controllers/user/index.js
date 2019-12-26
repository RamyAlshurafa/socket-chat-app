const makeGetUsers = require("./getUsers");
const makeCheckLogin = require("./checkLogin");
const makeGetUserInfo = require("./getUserInfo");


const {
  user: {
    getUsers,
    checkUserLogin,
    getUserInfo,
  },
} = require("./../../use-cases");

module.exports = Object.freeze({
  getUsers: makeGetUsers({ getUsers }),
  checkLogin: makeCheckLogin({ checkUserLogin }),
  getUserInfo: makeGetUserInfo({ getUserInfo }),
});

const makeGetUsers = require("./getUsers");
const makeCheckLogin = require("./checkLogin");
const makeGetUserInfo = require("./getUserInfo");
const makeCheckUserAuth = require("./checkUserAuth");


const {
  user: {
    getUsers,
    checkUserLogin,
    getUserInfo,
  },
} = require("./../../use-cases");

module.exports = Object.freeze({
  getUsers: makeGetUsers({ getUsers }),
  checkLogin: (tokenName) => makeCheckLogin({ checkUserLogin, tokenName }),
  getUserInfo: makeGetUserInfo({ getUserInfo }),
  checkUserAuth: makeCheckUserAuth({ getUserInfo }),
});

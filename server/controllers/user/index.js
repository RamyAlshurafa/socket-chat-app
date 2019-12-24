const makeGetUsers = require("./getUsers");
const makeCheckLogin = require("./checkLogin");

const {
  user:
  {
    getUsers,
    checkUserLogin,
  },
} = require("./../../use-cases/index");

module.exports = Object.freeze({
  getUsers: makeGetUsers({ getUsers }),
  checkLogin: makeCheckLogin({ checkUserLogin }),
});

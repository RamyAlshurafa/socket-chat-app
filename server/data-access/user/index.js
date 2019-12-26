const getUsers = require("./getUsers");
const getUserByEmail = require("./getUserByEmail");
const getUserById = require("./getUserById");

// TODO inject DB
module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
};

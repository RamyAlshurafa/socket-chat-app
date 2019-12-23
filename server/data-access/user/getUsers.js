const { query } = require("./../../db/index");

const getUsers = async () => {
  const results = await query("SELECT * FROM users");
  return results.rows;
};

module.exports = getUsers;

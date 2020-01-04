const { query } = require("./../../db/postgreSQL");

const getUsers = async () => {
  const results = await query("SELECT * FROM users");
  return results.rows;
};

module.exports = getUsers;

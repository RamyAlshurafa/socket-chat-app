const { query } = require("../../db/index");

const getUserByEmail = async ({ email }) => {
  const results = await query("SELECT * FROM users WHERE email=$1", [email]);
  return results.rows;
};

module.exports = getUserByEmail;

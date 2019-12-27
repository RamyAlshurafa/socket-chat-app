const { query } = require("../../db/index");

const getUserById = async ({ id }) => {
  const text = "SELECT * FROM users WHERE id=$1";
  const results = await query(text, [id]);
  return results.rows[0];
};

module.exports = getUserById;

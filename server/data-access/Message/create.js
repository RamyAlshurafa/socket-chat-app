const { query } = require("../../db/postgreSQL");

const create = async ({ fromId, body }) => {
  const text = `INSERT INTO message(user_id, body)
                VALUES ($1, $2)
                RETURNING id, user_id, body, created_at
  `;

  const values = [fromId, body];

  const res = await query(text, values);
  return res.rows[0];
};

module.exports = create;

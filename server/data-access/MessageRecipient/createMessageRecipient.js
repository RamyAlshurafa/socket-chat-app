const { query } = require("./../../db/postgreSQL");

const createMessageRecipient = async ({ recipientId, messageId }) => {
  const text = `INSERT INTO message_recipient(recipient_id, message_id)
                VALUES ($1, $2)
                RETURNING *
  `;

  const values = [recipientId, messageId];

  const res = await query(text, values);
  return res.rows[0];
};

module.exports = createMessageRecipient;

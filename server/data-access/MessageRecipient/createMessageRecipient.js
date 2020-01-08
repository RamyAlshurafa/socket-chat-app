const { query } = require("./../../db/postgreSQL");

const createMessageRecipient = async ({ recipientId, messageId }) => {
  const text = `WITH inserted AS (
                  INSERT INTO message_recipient(recipient_id, message_id)
                  VALUES ($1, $2) RETURNING *
              )

              SELECT inserted.*, users.first_name, users.last_name
              FROM inserted
              INNER JOIN users ON inserted.recipient_id = users.id
                
  `;

  const values = [recipientId, messageId];

  const res = await query(text, values);
  return res.rows[0];
};

module.exports = createMessageRecipient;

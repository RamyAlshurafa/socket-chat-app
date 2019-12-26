const { query } = require("./../../db");

const getMessagesBetweenTwoUsers = async ({ fromId, toId }) => {
  const text = `SELECT message.id,
                  message.user_id AS from_id,
                  message_recipient.recipient_id AS to_id,
                  message.body,
                  message_recipient.is_seen,
                  message.created_at
                FROM message
                  Inner join message_recipient
                  ON message_recipient.message_id = message.id
                WHERE
                   message_recipient.recipient_id = $1
                OR message.user_id = $2
                OR message_recipient.recipient_id = $2
                OR message.user_id = $1`;
  const values = [fromId, toId];

  const res = await query(text, values);
  return res.rows;
};

module.exports = getMessagesBetweenTwoUsers;
